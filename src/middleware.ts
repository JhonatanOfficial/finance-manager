// middleware.ts ou middleware.js

import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Verifica se o usuário está logado
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  // Se o token não existir, redirecione para a página de login
  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    const url = req.nextUrl.clone();
    url.pathname = '/'; // A página para onde você deseja redirecionar usuários não logados
    return NextResponse.redirect(url);
  }
  else if(token && req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = '/dashboard'; // A página para onde você deseja redirecionar usuários não logados
    return NextResponse.redirect(url);
  }

  // Permite o acesso se o usuário estiver logado ou se não estiver na página protegida
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/'], // Aplica o middleware a todas as rotas sob /dashboard
};