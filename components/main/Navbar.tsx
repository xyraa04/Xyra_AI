"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.15)]">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-widest text-white">
          XYRA<span className="text-purple-400">.AI</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <Link href="#">Features</Link>
          <Link href="#">How It Works</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Docs</Link>
        </div>

        {/* Button */}
        <button className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-sm font-medium shadow-lg shadow-purple-500/30">
          Launch App
        </button>

      </nav>
    </header>
  );
}