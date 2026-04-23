"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

import Image from "next/image";
import Link from "next/link";

export default function MainNavbar() {
  const navItems = [
    { name: "About", link: "/about" },
    { name: "Technology", link: "/technology" },
    { name: "Products", link: "/products" },
    { name: "Docs", link: "/docs" },
  ];

  return (
    <Navbar className="top-5">
      <NavBody className="h-14 px-5 rounded-full bg-black/55 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">

        {/* Logo */}
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

        {/* Nav */}
        <NavItems
          items={navItems}
          className="text-sm text-white/75 gap-8"
        />

        {/* CTA */}
        <div className="flex items-center shrink-0">
          <NavbarButton
            variant="primary"
            className="h-9 px-4 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_18px_rgba(168,85,247,0.35)] transition-all duration-300"
          >
            Launch App
          </NavbarButton>
        </div>

      </NavBody>
    </Navbar>
  );
}