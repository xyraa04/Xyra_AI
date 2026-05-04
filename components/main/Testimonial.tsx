"use client";

import { Sparkles } from "lucide-react";
import React, { useRef } from "react";
import TestiRow from "@/components/TestiRow";
import { testimonials } from "@/constant/constant";
import { useScroll, useTransform, motion } from "framer-motion";

const Testimonial = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      ref={sectionRef}
      className="py-28 overflow-hidden relative"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[#05010d]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.25),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-y-6">

          {/* ✨ Tag */}
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-4 py-1 text-sm text-zinc-300">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Testimonials</span>
          </div>

          {/* 🧠 Heading */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Loved By{" "}
              <span className="text-purple-400">Developers</span>
            </h2>

            <p className="text-sm md:text-lg mt-3 text-zinc-400 max-w-xl">
              See how developers are using Xyra to understand code,
              build faster, and ship smarter.
            </p>
          </div>

          {/* 🎬 Testimonial Rows */}
          <div
            className="relative h-[500px] w-full overflow-hidden 
            [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
            px-2 md:px-6 flex flex-col gap-10 mt-10"
          >
            {/* Row 1 */}
            <TestiRow data={testimonials} />

            {/* Row 2 */}
            <TestiRow data={testimonials} reverse />
          </div>

          {/* 🌌 Floating Glow Element */}
          <motion.div
            style={{ translateY }}
            className="hidden md:block absolute right-20 top-10 w-[220px] h-[220px] bg-purple-500/20 blur-[120px] rounded-full"
          />

        </div>
      </div>
    </section>
  );
};

export default Testimonial;