'use client'

import Image from 'next/image'
import { Bookmark, ChevronRight, Share2 } from 'lucide-react'

import image1 from '../../../public/image1.png'
import image2 from '../../../public/image2.png'
import image3 from '../../../public/image3.png'
import image4 from '../../../public/image4.png'
import image5 from '../../../public/image5.png'
import image6 from '../../../public/image6.png'
import image7 from '../../../public/image7.png'
import image8 from '../../../public/image8.png'
import image9 from '../../../public/image9.png'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

const Hero = () => (
  <section className='container mx-auto mt-8 px-4 sm:px-8 lg:px-16'>
    {/* Title & Buttons */}
    <div className='flex justify-between items-start mb-4 flex-wrap gap-2'>
      <div>
        <h2 className='text-3xl font-bold'>El Aurassi Hotel</h2>
        <p className='text-gray-600'>
          Spacious, modern rooms with panoramic views of the Mediterranean Sea.
        </p>
      </div>
      <div className='flex items-center space-x-2'>
        <button className='bg-[var(--secondary)] text-[var(--main)] p-2 rounded-full'>
          <Bookmark className='w-5 h-5' />
        </button>
        <button className='bg-[var(--secondary)] text-[var(--main)] p-2 rounded-full'>
          <Share2 className='w-5 h-5' />
        </button>
        <button className='btn-primary flex items-center'>
          <span>Reserve</span>
          <ChevronRight className='w-4 h-4' />
        </button>
      </div>
    </div>

    {/* Image Grid */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
      {images.map((img, i) => (
        <div
          key={i}
          className={`
            ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}
            w-full h-48 md:h-full
          `}
        >
          <Image
            src={img}
            alt={`Hotel image ${i + 1}`}
            className='rounded-lg object-cover w-full h-full'
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      ))}
    </div>
  </section>
)

export default Hero
