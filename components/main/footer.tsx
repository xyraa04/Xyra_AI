"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { MessageCircleMore } from "lucide-react";


export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-14">
      <div className="max-w-[92rem] mx-auto rounded-[2rem] border border-white/10 bg-black/70 backdrop-blur-xl px-8 md:px-10 py-6 md:py-7">

        {/* Top */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Xyra"
                width={54}
                height={54}
                className="object-contain"
              />

              <h2 className="text-white text-3xl font-bold tracking-tight">
                Xyra AI.
              </h2>
            </div>

            <p className="mt-5 max-w-xl text-zinc-400 text-base leading-relaxed">
              From understanding repositories to generating complete project
              blueprints, Xyra helps developers build faster and smarter.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-5">
              <Link
                href="#"
                className="text-zinc-300 hover:text-purple-400 transition"
              >
                <FaInstagram size={22} />
              </Link>

              <Link
                href="#"
                className="text-zinc-300 hover:text-purple-400 transition"
              >
                <FaGithub size={22} />
              </Link>

              <Link
                href="#"
                className="text-zinc-300 hover:text-purple-400 transition"
              >
                <FaLinkedin size={22} />
              </Link>

              <Link
                href="#"
                className="text-zinc-300 hover:text-purple-400 transition"
              >
                <MessageCircleMore size={22} />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">
                Product
              </h3>

              <div className="space-y-4 text-zinc-400 text-sm">
                <Link href="#" className="block hover:text-white transition">
                  Features
                </Link>
                <Link href="#" className="block hover:text-white transition">
                  Pricing
                </Link>
                <Link href="#" className="block hover:text-white transition">
                  Integrations
                </Link>
                <Link href="#" className="block hover:text-white transition">
                  Changelog
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">
                Resources
              </h3>

              <div className="space-y-4 text-zinc-400 text-sm">
                <Link href="#" className="block hover:text-white transition">
                  Documentation
                </Link>
                <Link href="#" className="block hover:text-white transition">
                  Tutorials
                </Link>
                <Link href="#" className="block hover:text-white transition">
                  Blog
                </Link>
                <Link href="#" className="block hover:text-white transition">
                  Support
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">
                Company
              </h3>

              <div className="space-y-4 text-zinc-400 text-sm">
                <Link href="#" className="block hover:text-white transition">
                  About
                </Link>
                <Link href="#" className="block hover:text-white transition">
                  Careers
                </Link>
                <Link href="#" className="block hover:text-white transition">
                  Contact
                </Link>
                <Link href="#" className="block hover:text-white transition">
                  Partners
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-zinc-500 text-base">
            © 2026 Xyra AI. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-12 text-base">
            <Link href="#" className="text-zinc-300 hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="#" className="text-zinc-300 hover:text-white transition">
              Terms & Conditions
            </Link>

            <Link href="#" className="text-zinc-300 hover:text-white transition">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}