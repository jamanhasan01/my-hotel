'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Bath, BedDouble, Info, Ruler, Star, LucideIcon } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import image1 from '../../../public/image1.png'

// --- IconText Component with Type Safety ---
interface IconTextProps {
  icon: LucideIcon
  text: string
}

const IconText: React.FC<IconTextProps> = ({ icon: Icon, text }) => (
  <div className='flex items-center space-x-1'>
    <Icon className='w-4 h-4 text-gray-500' />
    <span className='text-xs text-gray-600'>{text}</span>
  </div>
)

// --- Suggestion Card Type ---
interface Suggestion {
  name: string
  description: string
  price: number
  rating: number
  beds: number
  baths: number
  size: number
  image: string 
}

const hotelData: { suggestions: Suggestion[] } = {
  suggestions: Array(6).fill({
    name: 'Sofitel Algiers Hamma Garden',
    description:
      'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    rating: 4.5,
    beds: 2,
    baths: 2,
    size: 1200,
    image: image1,
  }),
}

const Suggestions: React.FC = () => (
  <section className='bg-gray-50 py-12'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-8 text-center'>You may also like</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {hotelData.suggestions.map((item, i) => (
          <Card
            key={i}
            className='h-full p-0 overflow-hidden border-none group transition-all duration-300'
          >
            {/* Image */}
            <div className='relative'>
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={400}
                className='w-full h-44 object-cover rounded-2xl'
              />
              <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm shadow-sm'>
                <Star className='w-4 h-4 text-yellow-400 fill-current mr-2' />
                <span className='font-semibold text-gray-800'>{item.rating}</span>
              </div>
            </div>

            {/* Content */}
            <CardContent className='p-5'>
              <h3 className='font-bold text-lg text-gray-900 truncate'>{item.name}</h3>
              <p className='text-sm text-gray-500 mt-1 line-clamp-2'>{item.description}</p>

              {/* Price */}
              <div className='my-2'>
                <span className='text-2xl font-bold text-gray-900'>${item.price}</span>
                <span className='ml-1 text-sm text-gray-500'>Per Night</span>
              </div>

              {/* Features */}
              <div className='flex justify-start items-center space-x-4 border-t border-gray-100 pt-2'>
                <IconText icon={BedDouble} text={`${item.beds} Bedroom`} />
                <IconText icon={Bath} text={`${item.baths} Bathroom`} />
                <IconText icon={Ruler} text={`${item.size} sqft`} />
              </div>

              {/* Actions */}
              <div className='flex gap-3 mt-5'>
                <button className='btn-primary w-full rounded-full'>Book Now</button>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full w-11 h-11 flex-shrink-0 border-gray-300'
                >
                  <Info className='w-5 h-5 text-gray-500' />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default Suggestions
