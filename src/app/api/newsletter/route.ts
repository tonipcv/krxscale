import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    console.log(`Tentando registrar email: ${email}`);

    // Usando o endpoint correto da API Beehiiv v2
    const publicationId = 'pub_901b2966-fafe-4929-838c-49bb902369f6';
    const apiKey = 'pub_901b2966-fafe-4929-838c-49bb902369f6'; // Idealmente, usar process.env.BEEHIIV_API_KEY

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email: email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'website',
          utm_medium: 'organic',
          utm_campaign: 'newsletter_signup',
          referring_site: 'krxscale.com',
          double_opt_override: 'true', // Bypass do duplo opt-in
        }),
      }
    );

    console.log(`Resposta do Beehiiv: status=${response.status}, statusText=${response.statusText}`);
    
    // Tentativa de obter a resposta como JSON
    let data;
    try {
      const text = await response.text();
      console.log(`Corpo da resposta: ${text}`);
      
      if (text && text.trim()) {
        data = JSON.parse(text);
      }
    } catch (jsonError) {
      console.error('Erro ao analisar resposta JSON:', jsonError);
    }

    // Email já cadastrado é considerado sucesso
    if (data?.error === 'Email already subscribed' || 
        data?.message?.includes('already exists') || 
        data?.message?.includes('already subscribed')) {
      return NextResponse.json({ success: true, alreadyExists: true });
    }

    // Sempre propaga o status real da API Beehiiv
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message || data?.error || 'Erro ao cadastrar email' },
        { status: response.status }
      );
    }

    // Sucesso real
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Falha ao processar a solicitação' },
      { status: 500 }
    );
  }
} 