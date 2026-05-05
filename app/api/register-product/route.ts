import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase/admin-auth';

export async function POST(request: NextRequest) {
  try {
    // Get uid from session cookie
    const sessionCookie = request.cookies.get('xyra_session')?.value;
    
    let uid;
    if (sessionCookie) {
      const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie);
      uid = decodedClaims.uid;
    } else {
      // Fallback to body
      const body = await request.json();
      uid = body.uid;
    }

    const accountsUrl = process.env.NEXT_PUBLIC_XYRA_ACCOUNTS_URL || 'http://localhost:3000';
    
    const response = await fetch(`${accountsUrl}/api/users/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: 'xyra-ai', uid }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Register error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}