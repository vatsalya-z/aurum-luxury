import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { HOTEL_INFO } from '@/data/hotelInfo';

const isVercel = process.env.VERCEL === '1';
const DB_PATH = isVercel
  ? path.join('/tmp', 'enquiries.json')
  : path.join(process.cwd(), 'data', 'enquiries.json');

// In-memory fallback if filesystem write fails in serverless environments
let inMemoryEnquiries: any[] = [];

function getEnquiries() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      try {
        fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
        fs.writeFileSync(DB_PATH, '[]', 'utf-8');
      } catch (writeErr) {
        // Safe fallback in read-only environment
      }
      return inMemoryEnquiries;
    }
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (e) {
    return inMemoryEnquiries;
  }
}

function saveEnquiries(enquiries: any[]) {
  inMemoryEnquiries = enquiries;
  try {
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    fs.writeFileSync(DB_PATH, JSON.stringify(enquiries, null, 2), 'utf-8');
  } catch (e) {
    console.warn('Filesystem read-only or error writing enquiries; saved to memory:', e);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      checkIn,
      checkOut,
      adults = 2,
      children = 0,
      roomsCount = 1,
      preferredRoom,
      mealPlan = 'Room + Breakfast',
      guestName,
      email,
      phone,
      specialRequests = '',
    } = body;

    // Required fields validation
    if (!checkIn || !checkOut || !guestName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields (Dates, Name, Email, Phone).' },
        { status: 400 }
      );
    }

    // Check-out must be after check-in
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    if (checkOutDate <= checkInDate) {
      return NextResponse.json(
        { success: false, message: 'Check-out date must be after check-in date.' },
        { status: 400 }
      );
    }

    // Generate unique enquiry ID
    const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
    const datePrefix = new Date().getFullYear();
    const enquiryId = `AURUM-${datePrefix}-${randomCode}`;

    const newEnquiry = {
      enquiryId,
      status: 'pending', // 'pending' | 'contacted' | 'confirmed' | 'cancelled'
      createdAt: new Date().toISOString(),
      checkIn,
      checkOut,
      adults: Number(adults),
      children: Number(children),
      roomsCount: Number(roomsCount),
      preferredRoom: preferredRoom || 'Luxury Bedroom Cottage',
      mealPlan,
      guestName,
      email,
      phone,
      specialRequests,
    };

    const enquiries = getEnquiries();
    enquiries.unshift(newEnquiry);
    saveEnquiries(enquiries);

    // Format WhatsApp message
    const waText = `*New Stay Enquiry - The Aurum Luxury Collection*
*Enquiry ID:* ${enquiryId}
*Guest:* ${guestName}
*Phone:* ${phone}
*Email:* ${email}
*Dates:* ${checkIn} to ${checkOut}
*Guests:* ${adults} Adults, ${children} Children (${roomsCount} Room)
*Room:* ${preferredRoom || 'Luxury Bedroom Cottage'}
*Meal Plan:* ${mealPlan}
${specialRequests ? `*Requests:* ${specialRequests}` : ''}`;

    const whatsappUrl = `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(waText)}`;

    return NextResponse.json({
      success: true,
      enquiryId,
      message: 'Your enquiry has been received successfully. Our reservations team will contact you shortly.',
      whatsappUrl,
      enquiry: newEnquiry,
    });
  } catch (error: any) {
    console.error('Error processing booking enquiry:', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred. Please try again or reach out on WhatsApp.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const enquiries = getEnquiries();
    return NextResponse.json({ success: true, count: enquiries.length, enquiries });
  } catch (error) {
    return NextResponse.json({ success: false, enquiries: [] }, { status: 500 });
  }
}
