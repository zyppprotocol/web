// app/api/waitlist/route.ts
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Valid email is required' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if email already exists
    const existingEntry = await prisma.waitlistEntry.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingEntry) {    
      return NextResponse.json(
        { message: 'Email already exists in waitlist' },
        { status: 409 }
      );
    }

    // Create new waitlist entry
    const waitlistEntry = await prisma.waitlistEntry.create({
      data: {
        email: normalizedEmail,
      },
    });

    return NextResponse.json(
      {
        message: 'Successfully joined waitlist',
        data: waitlistEntry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { message: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}