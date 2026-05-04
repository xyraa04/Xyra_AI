"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      title: "Input",
      desc: "Paste repo or describe idea",
      ui: [
        "repo: github.com/user/app",
        "mode: analyze",
      ],
    },
    {
      title: "AI Processing",
      desc: "Xyra analyzes & builds system",
      ui: [
        "scanning files...",
        "detecting stack: Next.js",
      ],
    },
    {
      title: "Output",
      desc: "Get architecture, APIs & insights",
      ui: [
        "api: /auth /users /data",
        "architecture ready ✓",
      ],
    },
  ];

  return (
    <section className="relative px-6 py-36 overflow-hidden">

      {/* 🌌 background */}
      <div className="absolute inset-0 -z-10 bg-[#05010d]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(168,85,247,0.25),transparent_40%)]" />

      {/* glow orbs */}
      <div className="absolute top-20 left-1/3 w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-fuchsia-500/20 blur-[120px] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl md:text-6xl font-bold text-white">
          How Xyra Works
        </h2>

        <p className="mt-4 text-zinc-400">
          From idea → to full system in seconds
        </p>

        {/* beam */}
        <div className="relative mt-24">

          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10" />

          <motion.div
            initial={{ x: "-20%" }}
            animate={{ x: "120%" }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute top-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-sm"
          />

          {/* cards */}
          <div className="grid md:grid-cols-3 gap-10 relative">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i)}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >

                {/* node */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.9)] animate-pulse" />

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">

                  <div className="text-purple-400 text-xs tracking-widest mb-2">
                    0{i + 1}
                  </div>

                  <h3 className="text-white text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mt-2">
                    {step.desc}
                  </p>

                  {/* 💻 UI Preview */}
                  <div className="mt-6 rounded-xl bg-black/40 border border-white/10 p-4 space-y-3 font-mono text-xs">

                    {/* animated lines with REAL TEXT */}
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-purple-300"
                    >
                      {step.ui[0]}
                    </motion.div>

                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                      className="text-zinc-400"
                    >
                      {step.ui[1]}
                    </motion.div>

                    {/* blocks */}
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="h-16 bg-purple-500/20 rounded-lg flex items-center justify-center text-[10px] text-purple-200">
                        modules
                      </div>
                      <div className="h-16 bg-purple-500/20 rounded-lg flex items-center justify-center text-[10px] text-purple-200">
                        routes
                      </div>
                    </div>

                    {/* status bar */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="h-10 bg-purple-500/30 rounded-lg mt-2 flex items-center px-3 text-[10px] text-purple-100"
                    >
                      processing...
                    </motion.div>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}