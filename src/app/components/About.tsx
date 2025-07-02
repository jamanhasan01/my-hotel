'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Waves, ShoppingBasket, Train, Utensils, LucideIcon } from 'lucide-react'

// --- TypeScript Interfaces ---
interface ExploreItem {
  name: string
  dist: string
}

interface HotelData {
  about: string
  coordinates: [number, number]
  explore: {
    restaurants: ExploreItem[]
    shops: ExploreItem[]
    beaches: ExploreItem[]
    transport: ExploreItem[]
  }
}

interface ExploreListItemProps {
  item: ExploreItem
}

interface ExploreSectionTitleProps {
  icon: LucideIcon
  children: React.ReactNode
}

// --- Dynamic Component Import ---
const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
})

// --- Typed Data Object ---
const hotelData: HotelData = {
  about:
    'The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.',
  coordinates: [36.7761, 3.0515],
  explore: {
    restaurants: [
      { name: 'Le Bardo', dist: '1.2 km' },
      { name: 'La Brasserie', dist: '1.5 km' },
      { name: 'Tantonville', dist: '1.8 km' },
    ],
    shops: [
      { name: 'Algiers Medina', dist: '2.1 km' },
      { name: 'Bab Ezzouar Mall', dist: '3.5 km' },
    ],
    beaches: [
      { name: 'Les Sablettes', dist: '4.0 km' },
      { name: 'Plage des Pins', dist: '5.2 km' },
    ],
    transport: [
      { name: 'Agha Train Station', dist: '1.9 km' },
      { name: '1st May Square Metro', dist: '2.3 km' },
    ],
  },
}

// --- Typed Helper Components ---
const ExploreListItem: React.FC<ExploreListItemProps> = ({ item }) => (
  <div className="flex justify-between text-gray-500 text-sm">
    <span>{item.name}</span>
    <span>{item.dist}</span>
  </div>
)

const ExploreSectionTitle: React.FC<ExploreSectionTitleProps> = ({ icon: Icon, children }) => (
  <h3 className="flex items-center font-normal text-gray-800 mb-3">
    <Icon className="w-5 h-5 mr-2 text-gray-600" />
    {children}
  </h3>
)

// --- Main Component ---
const About = () => (
  <section className="container mx-auto my-12 px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left Column */}
      <div>
        <h2 className="text-xl font-bold mb-3">About this property</h2>
        <p className="text-gray-600 text-sm leading-6">{hotelData.about}</p>

        <h2 className="text-xl font-bold mt-8 mb-4">Explore the Area</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <ExploreSectionTitle icon={Utensils}>Restaurants & cafes</ExploreSectionTitle>
            <div className="space-y-2">
              {hotelData.explore.restaurants.map((item, i) => (
                <ExploreListItem key={i} item={item} />
              ))}
            </div>
          </div>
          <div>
            <ExploreSectionTitle icon={ShoppingBasket}>Shops & Markets</ExploreSectionTitle>
            <div className="space-y-2">
              {hotelData.explore.shops.map((item, i) => (
                <ExploreListItem key={i} item={item} />
              ))}
            </div>
          </div>
          <div>
            <ExploreSectionTitle icon={Waves}>Beaches</ExploreSectionTitle>
            <div className="space-y-2">
              {hotelData.explore.beaches.map((item, i) => (
                <ExploreListItem key={i} item={item} />
              ))}
            </div>
          </div>
          <div>
            <ExploreSectionTitle icon={Train}>Public transport</ExploreSectionTitle>
            <div className="space-y-2">
              {hotelData.explore.transport.map((item, i) => (
                <ExploreListItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column (Dynamic Map) */}
      <div className="relative min-h-[400px] rounded-lg overflow-hidden">
        <MapWithNoSSR position={hotelData.coordinates} />
      </div>
    </div>
  </section>
)

export default About
