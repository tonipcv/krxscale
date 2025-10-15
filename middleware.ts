import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const host = (req.headers.get('host') || '').toLowerCase()

  // Skip dev and local
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return NextResponse.next()
  }

  // Permanently redirect any krxlab.com host to krxscale.com
  if (host === 'krxlab.com' || host === 'www.krxlab.com') {
    const url = new URL(req.url)
    url.protocol = 'https:'
    url.host = 'krxscale.com'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
