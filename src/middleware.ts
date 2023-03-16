import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(JSON.stringify({
    url: request.url,
    geo: request.geo,
    ip: request.headers.get('x-forwarded-for'),
    useragent: request.headers.get('user-agent'),
  }));
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|site.webmanifest).*)',
  ],
}
