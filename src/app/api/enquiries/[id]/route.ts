import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const isVercel = process.env.VERCEL === '1';
const DB_PATH = isVercel
  ? path.join('/tmp', 'enquiries.json')
  : path.join(process.cwd(), 'data', 'enquiries.json');

// In-memory fallback if filesystem write fails in serverless environments
let inMemoryEnquiries: any[] = [];

function getEnquiries() {
  try {
    if (!fs.existsSync(DB_PATH)) return inMemoryEnquiries;
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
    console.warn('Filesystem read-only or error saving enquiries; saved to memory:', e);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { status } = body;

    const validStatuses = ['pending', 'contacted', 'confirmed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: 'Invalid status' },
        { status: 400 }
      );
    }

    const enquiries = getEnquiries();
    const index = enquiries.findIndex((e: any) => e.enquiryId === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, message: 'Enquiry not found' },
        { status: 404 }
      );
    }

    enquiries[index].status = status;
    enquiries[index].updatedAt = new Date().toISOString();
    saveEnquiries(enquiries);

    return NextResponse.json({
      success: true,
      message: `Enquiry status updated to ${status}`,
      enquiry: enquiries[index],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
