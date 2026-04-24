"use client";

export default function Showcase() {
  return (
<section className="relative px-6 pt-8 pb-20 -mt-14">
  <div className="max-w-7xl mx-auto text-center bg-transparent">
        
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-2">
          Product Preview
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          See Xyra in Action
        </h2>

        <p className="max-w-2xl mx-auto text-zinc-400 mb-10">
          Analyze repositories, generate ideas, and build faster with AI-powered workflows.
        </p>

        <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-[0_0_40px_rgba(168,85,247,0.12)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/fing.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
}