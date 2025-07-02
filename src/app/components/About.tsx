"use client"
import { Waves, ShoppingBasket, Train, Utensils } from 'lucide-react'
import React from 'react'

// Dynamically import the map component to avoid SSR issues
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
})

const hotelData = {
  about:
    'The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.',
  // ✨ Added coordinates for the dynamic map
  coordinates: [36.7761, 3.0515], // Approx. coordinates for El Aurassi Hotel, Algiers
  explore: {
    restaurants: [
      { name: 'Blue Cafe', dist: '1.4 km' },
      { name: 'Blue Cafe', dist: '1.4 km' },
      { name: 'Blue Cafe', dist: '1.4 km' },
    ],
    shops: [
      { name: 'Central Mall', dist: '1.4 km' },
      { name: 'Central Mall', dist: '1.4 km' },
      { name: 'Central Mall', dist: '1.4 km' },
    ],
    beaches: [
      { name: 'Les Dunes Beach', dist: '1.4 km' },
      { name: 'Les Dunes Beach', dist: '1.4 km' },
      { name: 'Les Dunes Beach', dist: '1.4 km' },
    ],
    transport: [
      { name: 'Train - Ruardale Central Station', dist: '1.4 km' },
      { name: 'Metro - Cityline Metro Hub', dist: '1.4 km' },
      { name: 'Metro - Cityline Metro Hub', dist: '1.4 km' },
    ],
  },
}

// Helper components for cleaner code
const ExploreListItem = ({ item }) => (
  <div className='flex justify-between text-gray-500 text-sm'>
    <span>{item.name}</span>
    <span>{item.dist}</span>
  </div>
)

const ExploreSectionTitle = ({ icon, children }) => (
  <h3 className='flex items-center font-normal text-gray-800 mb-3'>
    {React.cloneElement(icon, { className: 'w-5 h-5 mr-2 text-gray-600' })}
    {children}
  </h3>
)

const About = () => (
  <section className='container mx-auto my-12 px-4'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
      {/* Left Column */}
      <div>
        <h2 className='text-xl font-bold mb-3'>About this property</h2>
        <p className='text-gray-600 text-sm leading-6'>{hotelData.about}</p>

        <h2 className='text-xl font-bold mt-8 mb-4'>Explore the Area</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6'>
          <div>
            <ExploreSectionTitle icon={<Utensils />}>Restaurants & cafes</ExploreSectionTitle>
            <div className='space-y-2'>
              {hotelData.explore.restaurants.map((item, i) => (
                <ExploreListItem key={i} item={item} />
              ))}
            </div>
          </div>
          <div>
            <ExploreSectionTitle icon={<ShoppingBasket />}>Shops & Markets</ExploreSectionTitle>
            <div className='space-y-2'>
              {hotelData.explore.shops.map((item, i) => (
                <ExploreListItem key={i} item={item} />
              ))}
            </div>
          </div>
          <div>
            <ExploreSectionTitle icon={<Waves />}>Beaches</ExploreSectionTitle>
            <div className='space-y-2'>
              {hotelData.explore.beaches.map((item, i) => (
                <ExploreListItem key={i} item={item} />
              ))}
            </div>
          </div>
          <div>
            <ExploreSectionTitle icon={<Train />}>Public transport</ExploreSectionTitle>
            <div className='space-y-2'>
              {hotelData.explore.transport.map((item, i) => (
                <ExploreListItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column (Dynamic Map) */}
      <div className='relative min-h-[400px] rounded-lg overflow-hidden'>
        {/* 👇 Replaced the <img> tag with our dynamic map component */}
        <MapWithNoSSR position={hotelData.coordinates} />
      </div>
    </div>
  </section>
)

export default About
