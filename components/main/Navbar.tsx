"use client";

import { Navbar, NavBody, NavItems, NavbarButton } from "@/components/ui/resizable-navbar";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";

export default function MainNavbar() {
  const { user, signOut, loading } = useAuth();
  const accountsUrl = process.env.NEXT_PUBLIC_XYRA_ACCOUNTS_URL || "http://localhost:3000";

  const navItems = [
    { name: "ABOUT", link: "/about" },
    { name: "Technology", link: "/technology" },
    { name: "Products", link: "/products" },
    { name: "Docs", link: "/docs" },
  ];

const handleAuthClick = () => {
  const accountsUrl = process.env.NEXT_PUBLIC_XYRA_ACCOUNTS_URL || "http://localhost:3000";
  const params = new URLSearchParams({
    client_id: "xyra-ai",
    redirect_uri: `${window.location.origin}/auth/callback`,
    scope: "identity email profile",
    state: Math.random().toString(36).substring(7), // CSRF protection
  });
  window.location.href = `${accountsUrl}/consent?${params.toString()}`;
};

  return (
    <Navbar className="top-0 pt-4 bg-transparent border-none shadow-none">
      <NavBody>
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer select-none relative z-50 shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Xyra"
            width={42}
            height={42}
            priority
            className="w-[42px] h-[42px] object-contain pointer-events-none"
          />
          <span className="text-white text-base tracking-[0.22em] font-medium">
            XYRA
          </span>
        </Link>

        <NavItems
          items={navItems}
          className="text-[10px] tracking-[0.24em] font-medium uppercase"
        />

        <div className="flex items-center shrink-0 gap-3">
          {loading ? (
            <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
          ) : user ? (
            <>
              <div className="hidden sm:flex items-center gap-2">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" className="w-7 h-7 rounded-full" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-xs text-white font-medium">
                    {user.displayName?.[0] || user.email?.[0] || "U"}
                  </div>
                )}
                <span className="text-sm text-zinc-300 hidden lg:inline">
                  {user.displayName || user.email?.split("@")[0]}
                </span>
              </div>
              <NavbarButton
                variant="primary"
                className="h-9 px-4 text-sm font-medium rounded-lg bg-red-600 hover:bg-red-500 text-white transition-all duration-300"
                onClick={signOut}
              >
                Sign Out
              </NavbarButton>
            </>
          ) : (
            <NavbarButton
              variant="primary"
              className="h-9 px-4 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_18px_rgba(168,85,247,0.35)] transition-all duration-300"
              onClick={handleAuthClick}
            >
              Get Started 🚀
            </NavbarButton>
          )}
        </div>
      </NavBody>
    </Navbar>
  );
}