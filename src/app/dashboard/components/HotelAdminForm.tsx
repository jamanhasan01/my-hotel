'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Loader2, AlertCircle, Trash2, PlusCircle } from 'lucide-react'

interface Room {
  name: string
  guests: number
  price: number
  beds: string
  size: number
  features: string[]
  bathrooms: number
}

interface Review {
  title: string
  text: string
  author: string
  rating: number
  date: string
}

interface PropertyInfo {
  type: string
  size: string
  features: string[]
}

interface HotelFormData {
  name: string
  description: string
  images: string[]
  propertyInfo: PropertyInfo
  rooms: Room[]
  about: string
  reviews: Review[]
}

const initialFormData: HotelFormData = {
  name: '',
  description: '',
  images: [''],
  propertyInfo: {
    type: 'Resorts',
    size: '',
    features: [],
  },
  rooms: [],
  about: '',
  reviews: [],
}

const allFeatures = ['Wifi', 'Dining', 'Swimming Pool', 'Air Conditioning', 'Gym', 'Spa', 'Parking']

export default function HotelAdminForm() {
  const [formData, setFormData] = useState<HotelFormData>(initialFormData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name.includes('.')) {
      const [parent, child] = name.split('.') as [keyof HotelFormData, string]
      const parentState = formData[parent]
      if (typeof parentState === 'object' && parentState !== null) {
        setFormData((prev) => ({
          ...prev,
          [parent]: { ...(parentState as object), [child]: value },
        }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

const handleDynamicListChange = (
  e: ChangeEvent<HTMLInputElement>,
  section: 'images' | 'rooms',
  index: number
) => {
  const { name, value } = e.target;

  if (section === 'images') {
    // Create the list inside the 'if' block for correct type inference
    const updatedImages = [...formData.images];
    updatedImages[index] = value;
    setFormData((prev) => ({ ...prev, images: updatedImages }));

  } else if (section === 'rooms') {
    const updatedRooms = [...formData.rooms];
    const roomToUpdate: Room = { ...updatedRooms[index] };
    const roomKey = name as keyof Room;

    if (
      name === 'price' ||
      name === 'guests' ||
      name === 'bathrooms' ||
      name === 'size'
    ) {
      (roomToUpdate[roomKey] as number) = Number(value);
    } else {
      (roomToUpdate[roomKey] as string | string[]) = value;
    }

    updatedRooms[index] = roomToUpdate;
    setFormData((prev) => ({ ...prev, rooms: updatedRooms }));
  }
};

  const handleFeatureChange = (feature: string) => {
    const currentFeatures = formData.propertyInfo.features || []
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((f) => f !== feature)
      : [...currentFeatures, feature]
    setFormData((prev) => ({
      ...prev,
      propertyInfo: { ...prev.propertyInfo, features: newFeatures },
    }))
  }

  const addField = (section: 'images' | 'rooms' | 'reviews') => {
    let newField: string | Room | Review
    if (section === 'images') {
      newField = ''
    } else if (section === 'rooms') {
      newField = { name: '', guests: 2, price: 0, beds: '1', size: 0, features: [], bathrooms: 1 }
    } else {
      newField = { title: '', text: '', author: '', rating: 5, date: '' }
    }
    setFormData((prev) => ({ ...prev, [section]: [...prev[section], newField] }))
  }

  const removeField = (section: 'images' | 'rooms' | 'reviews', index: number) => {
    setFormData((prev) => {
      const list = [...prev[section]]
      list.splice(index, 1)
      return { ...prev, [section]: list }
    })
  }

 const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess('')

    try {
      const res = await fetch('/api/hotels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const errRes = await res.json()
        throw new Error(errRes.error || 'Something went wrong')
      }

      await res.json()
      setSuccess('Hotel created successfully!')
      setFormData(initialFormData)
    } catch (error: unknown) { 
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <Card className='max-w-4xl mx-auto my-8'>
      <CardHeader>
        <CardTitle>Create New Hotel</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className='space-y-8'>
          {/* Basic Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold border-b pb-2'>Basic Information</h3>
            <div>
              <Label htmlFor='name'>Hotel Name</Label>
              <Input id='name' name='name' value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor='description'>Short Description</Label>
              <Input
                id='description'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor='about'>About Property</Label>
              <Textarea
                id='about'
                name='about'
                value={formData.about}
                onChange={handleChange}
                rows={5}
              />
            </div>
          </div>

          {/* Property Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold border-b pb-2'>Property Details</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <Label htmlFor='propertyInfo.type'>Property Type</Label>
                <Input
                  id='propertyInfo.type'
                  name='propertyInfo.type'
                  value={formData.propertyInfo.type}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor='propertyInfo.size'>Property Size (e.g., 12000 sqft)</Label>
                <Input
                  id='propertyInfo.size'
                  name='propertyInfo.size'
                  value={formData.propertyInfo.size}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Label>Features</Label>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-2'>
                {allFeatures.map((feature) => (
                  <div key={feature} className='flex items-center space-x-2'>
                    <Checkbox
                      id={`feature-${feature}`}
                      checked={formData.propertyInfo.features.includes(feature)}
                      onCheckedChange={() => handleFeatureChange(feature)}
                    />
                    <Label htmlFor={`feature-${feature}`} className='font-normal'>
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold border-b pb-2'>Images</h3>
            {formData.images.map((url, index) => (
              <div key={index} className='flex items-center gap-2'>
                <Input
                  name='images'
                  value={url}
                  onChange={(e) => handleDynamicListChange(e, 'images', index)}
                  placeholder='https://example.com/image.png'
                />
                <Button
                  type='button'
                  variant='destructive'
                  size='icon'
                  onClick={() => removeField('images', index)}
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
              </div>
            ))}
            <Button type='button' variant='outline' onClick={() => addField('images')}>
              <PlusCircle className='mr-2 h-4 w-4' /> Add Image URL
            </Button>
          </div>

          {/* Rooms */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold border-b pb-2'>Rooms</h3>
            {formData.rooms.map((room, index) => (
              <div key={index} className='p-4 border rounded-md space-y-4 relative'>
                <Button
                  type='button'
                  variant='destructive'
                  size='icon'
                  className='absolute top-2 right-2'
                  onClick={() => removeField('rooms', index)}
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <Label>Room Name</Label>
                    <Input
                      name='name'
                      value={room.name}
                      onChange={(e) => handleDynamicListChange(e, 'rooms', index)}
                      placeholder='e.g., Deluxe Suite'
                    />
                  </div>
                  <div>
                    <Label>Guests</Label>
                    <Input
                      name='guests'
                      type='number'
                      max={4}
                      value={room.guests}
                      onChange={(e) => handleDynamicListChange(e, 'rooms', index)}
                    />
                  </div>
                  <div>
                    <Label>Beds</Label>
                    <Input
                      name='beds'
                      type='text'
                      value={room.beds}
                      onChange={(e) => handleDynamicListChange(e, 'rooms', index)}
                      placeholder='e.g., 1 King'
                    />
                  </div>
                  <div>
                    <Label>Bathrooms</Label>
                    <Input
                      name='bathrooms'
                      type='number'
                      max={4}
                      value={room.bathrooms}
                      onChange={(e) => handleDynamicListChange(e, 'rooms', index)}
                    />
                  </div>
                  <div className='md:col-span-2'>
                    <Label>Price per night</Label>
                    <Input
                      name='price'
                      type='number'
                      value={room.price}
                      onChange={(e) => handleDynamicListChange(e, 'rooms', index)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button type='button' variant='outline' onClick={() => addField('rooms')}>
              <PlusCircle className='mr-2 h-4 w-4' /> Add Room
            </Button>
          </div>
        </CardContent>
        <CardFooter className='flex flex-col items-start'>
          <Button type='submit' disabled={loading}>
            {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Create Hotel
          </Button>
          {success && (
            <Alert className='mt-4 border-green-500 text-green-700'>
              <AlertCircle className='h-4 w-4' />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert variant='destructive' className='mt-4'>
              <AlertCircle className='h-4 w-4' />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}