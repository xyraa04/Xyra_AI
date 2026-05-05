import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase/admin-auth';

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('xyra_session')?.value;
    
    if (!sessionCookie) {
      return NextResponse.json({ valid: false, reason: 'No session' }, { status: 401 });
    }

    // Verify session cookie directly (not verifyIdToken)
    let decodedClaims;
    try {
      decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
    } catch (error: any) {
      // Session expired or invalid
      return NextResponse.json({ valid: false, reason: 'Session expired' }, { status: 401 });
    }

    const uid = decodedClaims.uid;
    console.log('✅ Session valid for:', uid);

    // Now check if product access was revoked
    const accountsUrl = process.env.NEXT_PUBLIC_XYRA_ACCOUNTS_URL || 'http://localhost:3000';
    
    try {
      const accessResponse = await fetch(`${accountsUrl}/api/users/validate-product-access`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, productId: 'xyra-ai' }),
      });

      const accessData = await accessResponse.json();

      if (!accessData.hasAccess) {
        console.log('🚫 Product access revoked for:', uid);
        
        const response = NextResponse.json(
          { valid: false, reason: 'Access revoked', shouldLogout: true },
          { status: 403 }
        );
        
        // Clear the session cookie
        response.cookies.set('xyra_session', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 0,
          path: '/',
        });

        return response;
      }

      return NextResponse.json({ 
        valid: true,
        uid: uid 
      });

    } catch (fetchError: any) {
      // If accounts.xyra is unreachable, still allow access
      console.error('Could not check product access:', fetchError.message);
      return NextResponse.json({ valid: true, uid: uid, warning: 'Could not verify product access' });
    }

  } catch (error: any) {
    console.error('Validate access error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}