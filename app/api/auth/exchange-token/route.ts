import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase/admin-auth';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    console.log('📥 [exchange-token] Called, token exists:', !!token);

    if (!token) {
      return NextResponse.json({ error: 'Missing token' }, { status: 400 });
    }

    // Verify the ID token from accounts.xyra
    const decodedToken = await adminAuth.verifyIdToken(token);
    console.log('✅ [exchange-token] Token verified for:', decodedToken.uid);

    // Create a session cookie (lasts 7 days)
    const expiresIn = 60 * 60 * 24 * 7 * 1000;
    const sessionCookie = await adminAuth.createSessionCookie(token, { expiresIn });

    // Create response and set cookie
    const response = NextResponse.json({
      success: true,
      uid: decodedToken.uid,
    });

    response.cookies.set('xyra_session', sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
      path: '/',
    });

    console.log('🍪 [exchange-token] Session cookie set');
    return response;

  } catch (error: any) {
    console.error('❌ [exchange-token] Error:', error.message);
    return NextResponse.json(
      { error: error.message || 'Token exchange failed' },
      { status: 401 }
    );
  }
}