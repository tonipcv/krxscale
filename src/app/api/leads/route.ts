/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, whatsapp, audienceSize, currentRevenue } = body

    // Validações básicas
    if (!email) {
      return NextResponse.json(
        { error: 'Email é obrigatório' },
        { status: 400 }
      )
    }

    // Validar formato de email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Criar novo lead no banco de dados
    const newLead = await prisma.lead.create({
      data: {
        name: name || 'Sem nome',
        email,
        whatsapp: whatsapp || 'Não informado',
        audienceSize: audienceSize || 'Não informado',
        currentRevenue: currentRevenue || 'Não informado'
      }
    })
    
    console.log('Novo lead registrado:', newLead)
    
    // Retornar resposta de sucesso
    return NextResponse.json({ 
      success: true,
      message: 'Lead registrado com sucesso!',
      lead: newLead
    })
    
  } catch (error) {
    console.error('Erro ao registrar lead:', error)
    return NextResponse.json(
      { error: 'Falha ao processar a solicitação' },
      { status: 500 }
    )
  }
}

// Endpoint para obter todos os leads (apenas para demonstração)
export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json({ leads })
  } catch (error) {
    console.error('Erro ao obter leads:', error)
    return NextResponse.json(
      { error: 'Falha ao obter leads' },
      { status: 500 }
    )
  }
} 