import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, sector, employees, arr, needs } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Nome, email e telefone são obrigatórios' },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    const newLead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        sector: sector || '',
        employees: employees || '',
        arr: arr || '',
        needs: needs || ''
      }
    });
    
    console.log('Novo lead registrado:', newLead);
    
    return NextResponse.json({ 
      success: true,
      message: 'Lead registrado com sucesso!',
      lead: newLead
    });
    
  } catch (error) {
    console.error('Erro ao registrar lead:', error);
    return NextResponse.json(
      { error: 'Falha ao processar a solicitação' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json({ leads });
  } catch (error) {
    console.error('Erro ao obter leads:', error);
    return NextResponse.json(
      { error: 'Falha ao obter leads' },
      { status: 500 }
    );
  }
} 