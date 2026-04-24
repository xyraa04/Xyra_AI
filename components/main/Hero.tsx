"use client";

import { Globe, Sparkles, Bug, Blocks } from "lucide-react";
import Shuffle from "@/components/Shuffle";
import { Press_Start_2P } from "next/font/google";
import { GridScan } from "@/components/main/GridScan";

const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const chips = [
    "Analyze GitHub Repo",
    "Build Project From Idea",
    "Fix Next.js Error",
    "Generate SaaS Architecture",
    "Understand MERN Backend",
    "Create APIs Instantly",
  ];

  return (
    <section className="relative min-h-screen px-6 pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 -z-10 overflow-hidden bg-[#05010d]">
  <GridScan
  scanColor="#a081e9"
  scanOpacity={0.16}
  scanGlow={0.18}
  scanDuration={5.5}
  scanDelay={2.5}
  linesColor="#1e1b2e"
  noiseIntensity={0.003}
  chromaticAberration={0}
  bloomIntensity={0.02}
/>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.18),transparent_35%)]" />

  <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[260px] bg-fuchsia-500/30 blur-[120px] rounded-full" />
</div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Tagline */}
        <p className="text-sm md:text-base tracking-[0.28em] text-zinc-400 uppercase mb-6">
          AI Powered Developer Platform
        </p>

        {/* Heading */}
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white max-w-5xl mx-auto">
  <span
    className={`${pixel.className} inline-block text-[22px] md:text-[34px] lg:text-[42px] mr-4 align-middle`}
  >
    <Shuffle
      text="Xyra AI"
      shuffleDirection="right"
      duration={0.35}
      animationMode="evenodd"
      shuffleTimes={1}
      ease="power3.out"
      stagger={0.03}
      threshold={0.1}
      triggerOnce={true}
      respectReducedMotion={true}
      loop={false}
    />
  </span>

<span className="text-purple-400 text-2xl md:text-3xl lg:text-5xl">
  builds ideas
</span>{" "}
<span className="text-2xl md:text-2xl lg:text-5xl">
  and understands code.
</span>
</h1>
        {/* Subtext */}
        <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed">
          Paste a GitHub repository to analyze any codebase, or describe your
          startup idea and let Xyra generate the project structure,
          architecture, and APIs instantly.
        </p>

        {/* Main Input Box */}
        <div className="mt-12 max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 md:p-5 shadow-[0_0_40px_rgba(168,85,247,0.08)]">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-3 w-full rounded-2xl bg-black/30 border border-white/10 px-5 py-4">
              <Globe className="text-zinc-400 w-5 h-5 shrink-0" />

              <input
                type="text"
                placeholder="Paste your GitHub repo ..."
                className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500"
              />
            </div>

            <button className="w-full md:w-auto h-16 px-8 rounded-2xl bg-purple-600 hover:bg-purple-500 transition text-white font-semibold text-lg shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              Run Xyra
            </button>
          </div>

          {/* Dual Feature Buttons */}
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white hover:border-purple-400 transition">
              <Globe className="w-4 h-4 text-purple-400" />
              Analyze Repository
            </button>

            <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white hover:border-purple-400 transition">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Create From Prompt
            </button>
          </div>
        </div>

        {/* Suggestion Chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {chips.map((chip, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-zinc-300 hover:text-white hover:border-purple-400 transition"
            >
              {chip}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}