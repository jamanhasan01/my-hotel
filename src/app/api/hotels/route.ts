import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { Hotel } from '@/lib/models/Hotel.model'

export async function POST(request) {
  try {
    await dbConnect()

    const body = await request.json()

    // Basic validation
    const { name, description, about, images, propertyInfo, rooms } = body

    if (
      !name ||
      !description ||
      !about ||
      !Array.isArray(images) ||
      !propertyInfo ||
      !propertyInfo.type ||
      !propertyInfo.size ||
      !Array.isArray(propertyInfo.features) ||
      !Array.isArray(rooms) ||
      rooms.length === 0
    ) {
      return NextResponse.json({ error: 'Missing required hotel fields' }, { status: 400 })
    }

    const newHotel = await Hotel.create(body)

    return NextResponse.json({ success: true, hotel: newHotel }, { status: 201 })
  } catch (error) {
    console.error('Hotel creation error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
