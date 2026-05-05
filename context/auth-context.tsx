'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkSession = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/session', {
        credentials: 'include',
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Session check error:', error);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      // Check for token in URL
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      if (token) {
        window.history.replaceState({}, '', window.location.pathname);
        
        // Exchange token
        await fetch('/api/auth/exchange-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        // Register product
        await fetch('/api/register-product', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ uid: '' }), // Will be filled by server from cookie
        });
      }

      await checkSession();
      setLoading(false);
    };

    init();
  }, [checkSession]);

  const signOut = async () => {
    await fetch('/api/auth/signout', { method: 'POST', credentials: 'include' });
    setUser(null);
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}