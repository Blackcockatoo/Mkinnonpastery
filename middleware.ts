import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { MEMBER_SESSION_COOKIE } from '@/lib/auth';

const protectedRoutes = ['/dashboard', '/formula-library', '/live-sessions', '/community-links', '/settings'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isProtected = protectedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

  if (!isProtected) {
    return NextResponse.next();
  }

  const isAuthenticated = request.cookies.get(MEMBER_SESSION_COOKIE)?.value === 'active';

  if (isAuthenticated) {
    return NextResponse.next();
  }

  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('next', pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/dashboard/:path*', '/formula-library/:path*', '/live-sessions/:path*', '/community-links/:path*', '/settings/:path*'],
};
