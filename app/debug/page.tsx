'use client';

import { useEffect, useState } from 'react';

export default function DebugPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const [token, setToken] = useState('');

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`]);
  };

  useEffect(() => {
    // Check URL for token
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    addLog(`URL token: ${urlToken ? 'Found ✅' : 'Not found ❌'}`);
    if (urlToken) {
      setToken(urlToken);
      // Clean URL
      window.history.replaceState({}, '', '/debug');
    }

    // Check localStorage
    const storedToken = localStorage.getItem('xyra_auth_token');
    addLog(`Stored token: ${storedToken ? 'Found ✅' : 'Not found ❌'}`);

    // Check cookies
    addLog(`Cookies: ${document.cookie || 'None'}`);
  }, []);

  const handleExchangeToken = async () => {
    addLog('📤 Sending token to exchange endpoint...');
    
    try {
      const response = await fetch('/api/auth/exchange-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
        credentials: 'include',
      });

      const data = await response.json();
      addLog(`Exchange response: ${response.status} - ${JSON.stringify(data)}`);
      
      if (response.ok) {
        addLog('✅ Token exchanged! Cookie should be set now');
        
        // Now check session
        const sessionRes = await fetch('/api/auth/session', { credentials: 'include' });
        const sessionData = await sessionRes.json();
        addLog(`Session check: ${sessionRes.status} - ${JSON.stringify(sessionData)}`);
      }
    } catch (err: any) {
      addLog(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-6">🔍 Xyra AI Auth Debug</h1>

      <div className="mb-8">
        <h2 className="text-lg mb-2">Token Input</h2>
        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full h-24 bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-sm font-mono"
          placeholder="Paste your Firebase ID token here..."
        />
        <button
          onClick={handleExchangeToken}
          disabled={!token}
          className="mt-3 px-6 py-3 bg-green-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Exchange Token
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-lg mb-2">Session Check</h2>
        <button
          onClick={async () => {
            addLog('🔍 Checking session...');
            const res = await fetch('/api/auth/session', { credentials: 'include' });
            const data = await res.json();
            addLog(`Session: ${res.status} - ${JSON.stringify(data)}`);
          }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Check Session
        </button>
      </div>

      <div>
        <h2 className="text-lg mb-2">Logs</h2>
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm space-y-1">
          {logs.map((log, i) => (
            <div key={i} className="text-zinc-300">{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}