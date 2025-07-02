'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import {
  Ruler,
  Star,
  Wifi,
  Utensils,
  Waves,
  AirVent,
  Dumbbell,
  BedDouble,
  Users,
  Calendar as CalendarIcon,
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import IconText from './IconText'

const hotelData = {
  name: 'El Aurassi Hotel',
  description: 'Spacious, modern rooms with panoramic views of the Mediterranean Sea.',
  images: [
    'https://placehold.co/800x600/0077b6/ffffff?text=Main+View',
    'https://placehold.co/400x300/0096c7/ffffff?text=Lobby',
    'https://placehold.co/400x300/48cae4/ffffff?text=Poolside',
    'https://placehold.co/400x300/90e0ef/ffffff?text=Suite+View',
    'https://placehold.co/400x300/ade8f4/ffffff?text=Restaurant',
    'https://placehold.co/400x300/caf0f8/ffffff?text=Spa',
    'https://placehold.co/400x300/00b4d8/ffffff?text=Gym',
  ],
  propertyInfo: {
    type: 'Resorts',
    size: '12000 sqft',
    features: ['Wifi', 'Dining', 'Swimming Pool', 'Air Conditioning', 'Gym'],
  },
  reservation: {
    price: 6112,
    duration: '1 week, 2 adults, 1 child',
  },
  rooms: [
    {
      name: 'Twin Room',
      guests: 2,
      price: 282,
      beds: '2 single beds',
      size: 1200,
      features: ['Air condition', 'Bathroom', 'TV', 'WIFI'],
      breakfast: true,
      roomsLeft: 4,
    },
    {
      name: 'Deluxe Double Room',
      guests: 2,
      price: 282,
      beds: '2 single beds',
      size: 1200,
      features: ['Air condition', 'Bathroom', 'TV', 'WIFI'],
      breakfast: true,
      roomsLeft: 4,
    },
    {
      name: 'Deluxe Double Room',
      guests: 2,
      price: 282,
      beds: '2 single beds',
      size: 1200,
      features: ['Air condition', 'Bathroom', 'TV', 'WIFI'],
      breakfast: false,
      roomsLeft: 0,
    },
  ],
  about:
    'The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.',
  explore: {
    restaurants: [
      { name: 'Blue Cafe', dist: '1.4 km' },
      { name: 'Blue Cafe', dist: '1.4 km' },
      { name: 'Blue Cafe', dist: '1.4 km' },
    ],
    shops: [{ name: 'Central Mall', dist: '1.4 km' }],
    beaches: [
      { name: 'Lea Dunes Beach', dist: '1.4 km' },
      { name: 'Lea Dunes Beach', dist: '1.4 km' },
    ],
    transport: [
      { name: 'Train - Riverdale Central Station', dist: '1.4 km' },
      { name: 'Metro - Cityline Metro Hub', dist: '1.4 km' },
    ],
  },
  reviews: [
    {
      title: 'Breathtaking Views and Luxury Comfort!',
      text: 'The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!',
      author: 'Sofia B., France',
      rating: 5,
      date: '23.10.2024',
    },
    {
      title: 'Exceptional Stay with Excellent Amenities',
      text: 'The Executive Suite provided an exceptional experience. The room was spotless, equipped with everything you could need. The marble bathroom with its bathtub was pure luxury. This location is perfect for exploring the city, and the staff truly make you feel welcome.',
      author: 'Youssef R., Morocco',
      rating: 5,
      date: '15.09.2024',
    },
  ],
  suggestions: Array(6).fill({
    name: 'Sofitel Algiers Hamma Garden',
    description:
      'Sofitel Algiers Hamma Garden offers a luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    rating: 4.5,
    beds: 2,
    baths: 2,
    size: 1200,
    image: 'https://placehold.co/400x300/0077b6/ffffff?text=Hotel',
  }),
}

const getFeatureIcon = (feature: string) => {
  switch (feature.toLowerCase()) {
    case 'wifi':
      return Wifi
    case 'dining':
      return Utensils
    case 'swimming pool':
      return Waves
    case 'air conditioning':
      return AirVent
    case 'gym':
      return Dumbbell
    // Added cases from the rooms data
    case 'air condition':
      return AirVent
    case 'bathroom':
      return Waves // Placeholder icon
    case 'tv':
      return Utensils // Placeholder icon
    default:
      return Star
  }
}

const Availability = () => {
const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined)
const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date())

  return (
    <section className='container mx-auto mt-12 px-4 sm:px-8 lg:px-16'>
      <h2 className='text-2xl font-bold mb-4'>Availability</h2>
      <Card className='p-4 mb-6 border-gray-400'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-end'>
          {/* Check-in Date Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className='w-full justify-start text-left font-normal border-gray-400'
              >
                <CalendarIcon className='mr-2 h-4 w-4' />
                {checkInDate ? format(checkInDate, 'PPP') : <span>Check-in date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0 z-2' align='start'>
              <Calendar
                mode='single'
                selected={checkInDate}
                onSelect={(date) => date && setCheckInDate(date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {/* Check-out Date Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className='w-full justify-start text-left font-normal border-gray-400'
              >
                <CalendarIcon className='mr-2 h-4 w-4' />
                {checkOutDate ? format(checkOutDate, 'PPP') : <span>Check-out date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                selected={checkOutDate}
                onSelect={(date) => date && setCheckOutDate(date)} 
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <div className='flex items-center border rounded-md p-2 h-10 border-gray-400'>
            <Users className='w-5 h-5 mr-2 text-gray-500' />
            <span className='text-sm'>2 Adults - 0 Children - 1 Room</span>
          </div>
          <button className='btn-primary'>Search</button>
        </div>
      </Card>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border-gray-400 border'>
          <thead className='bg-[var(--main)] text-white'>
            <tr>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Room type</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
                Number of guests
              </th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
                Price for 1 night
              </th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Your choices</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Select rooms</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Action</th>
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {hotelData.rooms.map((room, i) => (
              <tr key={i} className='border-b border-gray-400 border hover:bg-gray-50'>
                <td className='py-4 px-4'>
                  <p className='font-semibold text-[var(--main)]'>{room.name}</p>
                  <div className='space-y-1 mt-2'>
                    <IconText icon={BedDouble} text={room.beds} />
                    <IconText icon={Ruler} text={`${room.size} sqft`} />
                    {room.features.map((f) => (
                      <IconText key={f} icon={getFeatureIcon(f)} text={f} />
                    ))}
                  </div>
                </td>
                <td className='py-4 px-4'>
                  <div className='flex items-center'>
                    <Users className='w-5 h-5 inline-block mr-2' />x {room.guests}
                  </div>
                </td>
                <td className='py-4 px-4 font-bold text-lg'>${room.price}</td>
                <td className='py-4 px-4'>
                  <p>{room.breakfast ? 'Breakfast included' : 'No breakfast'}</p>
                  {room.roomsLeft > 0 && (
                    <p className='text-red-500 font-semibold'>Only {room.roomsLeft} rooms left</p>
                  )}
                </td>
                <td className='py-4 px-4'>
                  {room.roomsLeft > 0 ? (
                    <Select defaultValue='0'>
                      <SelectTrigger className='w-[80px] border-gray-400'>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(room.roomsLeft + 1).keys()].map((n) => (
                          <SelectItem key={n} value={String(n)}>
                            {n}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className='text-gray-500'>Not available</p>
                  )}
                </td>
                <td className='py-4 px-4'>
                  <button className='btn-primary' disabled={room.roomsLeft === 0}>
                    Reserve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Availability
