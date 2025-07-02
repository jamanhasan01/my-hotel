import mongoose, { Schema, models } from 'mongoose'

const HotelSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    about: { type: String, required: true },
    images: { type: [String], required: true },

    propertyInfo: {
      type: {
        type: String,
        required: true,
      },
      size: { type: String, required: true },
      features: { type: [String], required: true },
    },

    rooms: [
      {
        name: { type: String, required: true },
        guests: { type: Number, required: true },
        price: { type: Number, required: true },
        beds: { type: String, required: true },
        size: { type: Number, required: true },
        features: { type: [String], required: true },
        bathrooms: { type: Number, required: true },
      },
    ],


    reviews: [
      {
        title: String,
        text: String,
        author: String,
        rating: Number,
        date: String,
      },
    ],
  },
  { timestamps: true }
)

export const Hotel = models.Hotel || mongoose.model('Hotel', HotelSchema)
