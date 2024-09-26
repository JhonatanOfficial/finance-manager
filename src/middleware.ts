// middleware.ts or middleware.js

import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Checks if the user is logged in
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  // If the token does not exist, redirect to the login page
  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    const url = req.nextUrl.clone();
    url.pathname = '/'; // The page to which you want to redirect unauthenticated users
    return NextResponse.redirect(url);
  }
  else if(token && req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = '/dashboard'; // The page to which you want to redirect logged-in users
    return NextResponse.redirect(url);
  }

  // Allows access if the user is logged in or if they are not on a protected page
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/'], // Applies the middleware to all routes under /dashboard
};