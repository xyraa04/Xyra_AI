"use client";

import LogoLoop from "@/components/LogoLoop";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

export default function LogoStrip() {
  const logos = [
    { node: <FaGithub /> },
    { node: <FaReact /> },
    { node: <SiNextdotjs /> },
    { node: <SiTypescript /> },
    { node: <SiTailwindcss /> },
    { node: <FaNodeJs /> },
    { node: <SiOpenai /> },
    { node: <FaFigma /> },
  ];

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-zinc-400 uppercase tracking-[0.28em] text-xs mb-8">
          POWERED BY MODERN TOOLS
        </p>

        <LogoLoop
          logos={logos}
          speed={70}
          logoHeight={34}
          gap={48}
          fadeOut
          scaleOnHover
          className="text-white/80"
        />
      </div>
    </section>
  );
}