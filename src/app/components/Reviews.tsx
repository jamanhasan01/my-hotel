"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const hotelData = {
  name: 'El Aurassi Hotel',
  description: 'Spacious, modern rooms with panoramic views of the Mediterranean Sea.',
  images: [
    "https://placehold.co/800x600/0077b6/ffffff?text=Main+View",
    "https://placehold.co/400x300/0096c7/ffffff?text=Lobby",
    "https://placehold.co/400x300/48cae4/ffffff?text=Poolside",
    "https://placehold.co/400x300/90e0ef/ffffff?text=Suite+View",
    "https://placehold.co/400x300/ade8f4/ffffff?text=Restaurant",
    "https://placehold.co/400x300/caf0f8/ffffff?text=Spa",
    "https://placehold.co/400x300/00b4d8/ffffff?text=Gym",
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
    { name: 'Twin Room', guests: 2, price: 282, beds: '2 single beds', size: 1200, features: ['Air condition', 'Bathroom', 'TV', 'WIFI'], breakfast: true, roomsLeft: 4 },
    { name: 'Deluxe Double Room', guests: 2, price: 282, beds: '2 single beds', size: 1200, features: ['Air condition', 'Bathroom', 'TV', 'WIFI'], breakfast: true, roomsLeft: 4 },
    { name: 'Deluxe Double Room', guests: 2, price: 282, beds: '2 single beds', size: 1200, features: ['Air condition', 'Bathroom', 'TV', 'WIFI'], breakfast: false, roomsLeft: 0 },
  ],
  about: 'The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.',
  explore: {
    restaurants: [{ name: 'Blue Cafe', dist: '1.4 km' }, { name: 'Blue Cafe', dist: '1.4 km' }, { name: 'Blue Cafe', dist: '1.4 km' }],
    shops: [{ name: 'Central Mall', dist: '1.4 km' }],
    beaches: [{ name: 'Lea Dunes Beach', dist: '1.4 km' }, { name: 'Lea Dunes Beach', dist: '1.4 km' }],
    transport: [{ name: 'Train - Riverdale Central Station', dist: '1.4 km' }, { name: 'Metro - Cityline Metro Hub', dist: '1.4 km' }],
  },
  reviews: [
    {
      title: 'Breathtaking Views and Luxury Comfort!',
      text: 'The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!',
      author: 'Sofia B., France',
      rating: 5,
      date: '23.10.2024'
    },
    {
      title: 'Exceptional Stay with Excellent Amenities',
      text: 'The Executive Suite provided an exceptional experience. The room was spotless, equipped with everything you could need. The marble bathroom with its bathtub was pure luxury. This location is perfect for exploring the city, and the staff truly make you feel welcome.',
      author: 'Youssef R., Morocco',
      rating: 5,
      date: '15.09.2024'
    }
  ],
  suggestions: Array(6).fill({
    name: 'Sofitel Algiers Hamma Garden',
    description: 'Sofitel Algiers Hamma Garden offers a luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    rating: 4.5,
    beds: 2,
    baths: 2,
    size: 1200,
    image: 'https://placehold.co/400x300/0077b6/ffffff?text=Hotel'
  })
};

  const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const nextReview = () => setCurrentReview(prev => (prev + 1) % hotelData.reviews.length);
    const prevReview = () => setCurrentReview(prev => (prev - 1 + hotelData.reviews.length) % hotelData.reviews.length);

    return (
      <section className="container mx-auto mt-12 px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">What Our Guests Say</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={prevReview}><ChevronLeft className="w-5 h-5" /></Button>
            <Button variant="outline" size="icon" onClick={nextReview}><ChevronRight className="w-5 h-5" /></Button>
            <Button variant="link" className="hidden sm:inline-flex">See All <ChevronRight className="w-4 h-4 ml-1" /></Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* This would be a slider in a real implementation */}
            {hotelData.reviews.map((review, index) => (
                 <Card key={index} className="p-6">
                    <CardContent className="p-0">
                        <h3 className="font-bold text-lg mb-2">{review.title}</h3>
                        <p className="text-gray-600 mb-4">{review.text}</p>
                        <div className="flex items-center mb-2">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>- {review.author}</span>
                            <span>{review.date}</span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>
    );
  };
export default Reviews