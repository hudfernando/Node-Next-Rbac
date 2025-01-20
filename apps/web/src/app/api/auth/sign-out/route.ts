import { NextRequest, NextResponse } from 'next/server'

export function GET(request: NextRequest) {
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = '/auth/sign-in';

  const response = NextResponse.redirect(redirectUrl);
  response.cookies.delete('token');

  return response;
}