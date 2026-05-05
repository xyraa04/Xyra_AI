import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase/admin-auth';

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('xyra_session')?.value;
    
    if (!sessionCookie) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    // Verify session cookie
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
    const user = await adminAuth.getUser(decodedClaims.uid);

    return NextResponse.json({
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
    });

  } catch (error: any) {
    console.error('Session error:', error.message);
    
    // Return 401 but DON'T clear cookie here
    return NextResponse.json({ user: null }, { status: 401 });
  }
}