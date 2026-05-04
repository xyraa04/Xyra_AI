"use client";

import { Brain, Sparkles } from "lucide-react";

export default function SplitFeature() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">
      
      {/* subtle grid continuation */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE — VISUAL */}
        <div className="relative">

          {/* glow */}
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,#7c3aed_0%,transparent_70%)] opacity-30 blur-3xl" />

          {/* main card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(168,85,247,0.1)]">

            {/* fake dashboard UI */}
            <div className="space-y-4">

              {/* header */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>

              {/* blocks */}
              <div className="h-24 rounded-xl bg-white/5 border border-white/10" />
              <div className="h-16 rounded-xl bg-white/5 border border-white/10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 rounded-xl bg-white/5 border border-white/10" />
                <div className="h-20 rounded-xl bg-white/5 border border-white/10" />
              </div>

              {/* bottom */}
              <div className="h-12 rounded-xl bg-purple-500/20 border border-purple-400/20" />

            </div>
          </div>
        </div>

        {/* RIGHT SIDE — CONTENT */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Understand Codebases{" "}
            <span className="text-purple-400">Like Never Before</span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
            Xyra AI breaks down complex repositories into clear, structured insights — helping you understand architecture, flow, and logic instantly.
          </p>

          {/* features */}
          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <Brain className="text-purple-400 w-6 h-6 mt-1" />
              <div>
                <p className="text-white font-medium">Deep Code Analysis</p>
                <p className="text-zinc-400 text-sm">
                  Instantly analyze any GitHub repository
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Sparkles className="text-purple-400 w-6 h-6 mt-1" />
              <div>
                <p className="text-white font-medium">AI-Powered Insights</p>
                <p className="text-zinc-400 text-sm">
                  Get summaries, structure & architecture instantly
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Sparkles className="text-purple-400 w-6 h-6 mt-1" />
              <div>
                <p className="text-white font-medium">Tech Stack Detection</p>
                <p className="text-zinc-400 text-sm">
                  Automatically identify frameworks & tools
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}