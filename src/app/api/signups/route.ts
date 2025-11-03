import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, role, arr, markets, isUS, country, intent } = body as {
      name?: string;
      company?: string;
      role?: string;
      arr?: string;
      markets?: string;
      isUS?: boolean;
      country?: string | null;
      intent?: string;
    };

    if (!name || !company || !role || !arr || !markets || typeof isUS !== 'boolean' || !intent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!isUS && !country) {
      return NextResponse.json(
        { error: 'Country is required when company is not US' },
        { status: 400 }
      );
    }

    const signup = await prisma.signup.create({
      data: {
        name,
        company,
        role,
        arr,
        markets,
        isUS,
        country: isUS ? null : country || null,
        intent,
      },
    });

    return NextResponse.json({ success: true, signup });
  } catch (error) {
    console.error('Error saving signup:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const signups = await prisma.signup.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ signups });
  } catch (error) {
    console.error('Error fetching signups:', error);
    return NextResponse.json({ error: 'Failed to fetch signups' }, { status: 500 });
  }
}
