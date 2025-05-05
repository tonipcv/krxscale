import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, instagram } = body;

    if (!name || !email || !whatsapp) {
      return NextResponse.json(
        { error: 'Nome, email e WhatsApp são obrigatórios' },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    const existingPartner = await prisma.partner.findUnique({
      where: { email }
    });

    if (existingPartner) {
      return NextResponse.json(
        { error: 'Este email já está cadastrado em nossa base.' },
        { status: 400 }
      );
    }

    const newPartner = await prisma.partner.create({
      data: {
        name,
        email,
        whatsapp,
        instagram: instagram || null,
        status: 'pending'
      }
    });
    
    console.log('Novo parceiro registrado:', newPartner);
    
    return NextResponse.json({ 
      success: true,
      message: 'Parceiro registrado com sucesso!',
      partner: newPartner
    });
    
  } catch (error) {
    console.error('Erro ao registrar parceiro:', error);
    return NextResponse.json(
      { error: 'Falha ao processar a solicitação' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const partners = await prisma.partner.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json({ partners });
  } catch (error) {
    console.error('Erro ao obter parceiros:', error);
    return NextResponse.json(
      { error: 'Falha ao obter parceiros' },
      { status: 500 }
    );
  }
} 