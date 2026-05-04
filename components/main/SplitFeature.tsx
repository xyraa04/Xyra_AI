"use client";

import { Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplitFeature() {
  const lines = [
    "Initializing Xyra AI...",
    "✔ Parsing repository structure",
    "✔ Detecting tech stack: Next.js, Node",
    "✔ Mapping file dependencies",
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // 🔁 CLEAN LOOPED TYPING
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (lineIndex < lines.length) {
      const line = lines[lineIndex];

      if (charIndex < line.length) {
        timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + line[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 20);
      } else {
        timeout = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, line]);
          setCurrentLine("");
          setCharIndex(0);
          setLineIndex((prev) => prev + 1);
        }, 300);
      }
    } else {
      // pause then reset everything
      timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine("");
        setLineIndex(0);
        setCharIndex(0);
      }, 1800);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex]);

  return (
    <section className="relative px-6 py-32 overflow-hidden">

      {/* 🌌 stars */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.05]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >

          {/* 🎯 MOUSE GLOW */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(168,85,247,0.25),transparent_60%)]" />

          {/* floating card */}
          <motion.div
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty("--x", `${x}px`);
              e.currentTarget.style.setProperty("--y", `${y}px`);
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 overflow-hidden"
          >

            {/* 🟣 SCAN LINE */}
            <motion.div
              animate={{ y: ["-120%", "120%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-purple-500/15 to-transparent"
            />

            {/* header */}
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="ml-3 text-xs text-zinc-400">
                xyra://analysis-engine
              </span>
            </div>

            {/* 💻 TERMINAL */}
            <div className="space-y-2 text-xs font-mono text-zinc-400 min-h-[140px] relative z-10">

              {displayedLines.map((line, i) => (
                <p key={i} className="text-purple-400">{line}</p>
              ))}

              <p className="text-purple-400 flex items-center">
                {currentLine}
                <span className="ml-1 w-[6px] h-[12px] bg-purple-400 animate-pulse" />
              </p>

            </div>

            {/* blocks */}
            <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 relative z-10">
              <p className="text-white text-sm">/src/components</p>
              <p className="text-zinc-500 text-xs">→ UI Components detected</p>
            </div>

            <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/10 relative z-10">
              <p className="text-white text-sm">/api/routes</p>
              <p className="text-zinc-500 text-xs">→ Backend structure mapped</p>
            </div>

            {/* bottom */}
            <div className="mt-4 h-10 rounded-lg bg-purple-500/20 border border-purple-400/20 flex items-center px-3 relative z-10">
              <span className="text-purple-300 text-xs animate-pulse">
                Generating architecture...
              </span>
            </div>

          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Build & Understand{" "}
            <span className="text-purple-400">Code Instantly</span>
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-zinc-400 max-w-md"
          >
            Xyra helps you analyze codebases and turn ideas into full projects — in seconds.
          </motion.p>

          <div className="mt-10 space-y-6">
            {[
              "Analyze any repository",
              "Generate full project architecture",
              "Detect tech stack instantly",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center gap-3 text-white text-sm"
              >
                {i === 0 ? (
                  <Brain className="text-purple-400 w-5 h-5" />
                ) : (
                  <Sparkles className="text-purple-400 w-5 h-5" />
                )}
                {text}
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}