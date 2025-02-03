/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        email: body.email,
        whatsapp: body.whatsapp,
        audienceSize: body.audienceSize,
        currentRevenue: body.currentRevenue,
      },
    })
    
    return NextResponse.json(lead)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating lead' }, { status: 500 })
  }
} 