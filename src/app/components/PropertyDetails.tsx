
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import {
  Building,
  MessageCircle,
  Ruler,
  Star,
  Wifi,
  Utensils,
  Waves,
  AirVent,
  Dumbbell,
} from 'lucide-react'
import IconText from './IconText' // Assuming IconText is a component you have defined elsewhere

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
    default:
      return Star
  }
}

const PropertyDetails = () => (
  <section className='container mx-auto mt-8 px-4 sm:px-8 lg:px-16'>
    <div className='flex flex-col lg:flex-row gap-8'>
      <div className='w-full lg:w-2/3 speace-x-3'>
        <Tabs defaultValue='overview'>
          <TabsList className=''>
            <TabsTrigger
              value='overview'
              className='data-[state=active]:border-b  data-[state=active]:border-[var(--main)] data-[state=active]:text-[var(--main)]'
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value='features'
              className='mx-4 data-[state=active]:border-b  data-[state=active]:border-[var(--main)] data-[state=active]:text-[var(--main)]'
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value='reviews'
              className='data-[state=active]:border-b  data-[state=active]:border-[var(--main)] data-[state=active]:text-[var(--main)]'
            >
              Reviews
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab Content */}
          <TabsContent value='overview' className='mt-4'>
            <div className='flex items-center justify-between'>
              <h3 className='text-xl font-semibold'>Property Type</h3>

              <button className='btn-primary flex items-center'>
                Message
                <MessageCircle className='w-4 h-4 ml-2' />{' '}
              </button>
            </div>
            <div className='flex space-x-8 mt-2 text-gray-700'>
              <IconText icon={Building} text={hotelData.propertyInfo.type} />
              <IconText icon={Ruler} text={hotelData.propertyInfo.size} />
            </div>
            <h3 className='text-xl font-semibold mt-6'>Features</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2'>
              {hotelData.propertyInfo.features.map((feat) => (
                <IconText key={feat} icon={getFeatureIcon(feat)} text={feat} />
              ))}
            </div>
            <h3 className='text-xl font-semibold mt-6'>About this Property</h3>
            <p className='text-gray-700 mt-2'>{hotelData.about}</p>
          </TabsContent>

          {/* Features Tab Content */}
          <TabsContent value='features' className='mt-4'>
            <h3 className='text-xl font-semibold'>All Features</h3>
            <Card className='mt-4 border-gray-300 border'>
              <CardContent className='p-6 grid grid-cols-2 sm:grid-cols-3 gap-6'>
                {hotelData.propertyInfo.features.map((feat) => (
                  <IconText key={feat} icon={getFeatureIcon(feat)} text={feat} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab Content */}
          <TabsContent value='reviews' className='mt-4 '>
            <h3 className='text-xl font-semibold'>Guest Reviews</h3>
            <div className='space-y-6 mt-4'>
              {hotelData.reviews.map((review, index) => (
                <Card key={index} className='p-4  border-gray-300 border'>
                  <CardContent className='p-0'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <h4 className='font-bold text-lg'>{review.title}</h4>
                        <p className='text-sm text-gray-600 mt-1'>
                          {review.author} - {review.date}
                        </p>
                      </div>
                      <div className='flex items-center'>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                        ))}
                      </div>
                    </div>
                    <p className='mt-3 text-gray-800'>{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className='w-full lg:w-1/3 '>
        <Card className='p-6 border-gray-300 border'>
          <CardContent className='p-0 '>
            <p className='text-gray-600'>{hotelData.reservation.duration}</p>
            <p className='text-3xl font-bold my-2'>
              USD ${hotelData.reservation.price.toLocaleString()}
            </p>

            <button className='btn-primary w-full'>Reserve</button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
)

export default PropertyDetails
