import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { MEDISCAN_PATHS } from './app/common';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const allow =
    pathname === '/' ||
    pathname.startsWith(MEDISCAN_PATHS.DEMO) ||
    pathname.startsWith(MEDISCAN_PATHS.USER);

  if (allow) return NextResponse.next();

  const url = new URL('/', req.url);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|assets|fonts|images).*)',
  ],
};
