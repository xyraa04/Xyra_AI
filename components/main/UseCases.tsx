"use client";

import { motion } from "framer-motion";

export default function UseCases() {
  const cases = [
    {
      title: "Understand Any Codebase",
      desc: "Paste a GitHub repo and instantly get structure, flow & insights.",
      preview: ["repo loaded ✓", "structure mapped", "components detected"],
    },
    {
      title: "Turn Ideas Into Systems",
      desc: "Describe your idea and generate full architecture instantly.",
      preview: ["idea received...", "generating APIs", "system ready ✓"],
    },
    {
      title: "Fix Bugs Faster",
      desc: "Paste errors and get clear explanations with solutions.",
      preview: ["error detected", "root cause found", "fix suggested ✓"],
    },
    {
      title: "Learn New Tech Faster",
      desc: "Break down unfamiliar stacks into simple explanations.",
      preview: ["analyzing stack...", "explaining modules", "done ✓"],
    },
  ];

  return (
    <section className="relative px-6 py-32 overflow-hidden">

      {/* 🌌 background */}
      <div className="absolute inset-0 -z-10 bg-[#05010d]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.25),transparent_40%)]" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What You Can Do With Xyra
          </h2>
          <p className="mt-4 text-zinc-400">
            Built for real developer workflows
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 overflow-hidden"
            >

              {/* ✨ glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_70%)]" />

              {/* Title */}
              <h3 className="text-white text-lg font-semibold">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-zinc-400 text-sm mt-2 max-w-md">
                {item.desc}
              </p>

              {/* 💻 preview UI */}
              <div className="mt-6 rounded-xl bg-black/40 border border-white/10 p-4 space-y-2 font-mono text-xs">

                {item.preview.map((line, j) => (
                  <motion.div
                    key={j}
                    animate={{ opacity: [0.5, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2, delay: j * 0.3 }}
                    className="text-purple-300"
                  >
                    {line}
                  </motion.div>
                ))}

                {/* fake blocks */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="h-10 bg-purple-500/20 rounded-md" />
                  <div className="h-10 bg-purple-500/20 rounded-md" />
                  <div className="h-10 bg-purple-500/20 rounded-md" />
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}