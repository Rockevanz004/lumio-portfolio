"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep dive into your business model, competition, and target audience to find the 'unfair advantage'.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Architecting the roadmap. We define the tech stack, user flows, and conversion triggers.",
  },
  {
    num: "03",
    title: "Design",
    desc: "High-fidelity prototypes that focus on emotional resonance and psychological precision.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Clean, performant code built for speed, security, and infinite scalability.",
  },
  {
    num: "05",
    title: "Launch & Scale",
    desc: "Deployment with zero downtime and ongoing optimization to ensure market dominance.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-void relative overflow-hidden">
      {/* Number watermark */}
      <div className="absolute top-10 left-10 font-display font-bold text-[200px] leading-none text-stroke-gold opacity-30 select-none hidden lg:block">
        02
      </div>

      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="section-label mb-6">The Blueprint</div>
          <h2 className="font-display font-light text-[clamp(44px,6vw,88px)] leading-[0.9] tracking-tight">
            <span className="text-warm/90 block">THE</span>
            <span className="gold-gradient font-bold italic block">METHODOLOGY</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-[3.5rem] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex gap-8 md:gap-16 py-8 border-b border-gold-subtle last:border-b-0 hover:bg-surface/50 transition-colors duration-500 px-0 md:px-2 rounded-none"
              >
                {/* Step number */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="relative w-14 h-14 flex items-center justify-center border border-gold/15 group-hover:border-gold/40 transition-colors duration-300">
                    <span className="font-display font-light text-xl text-gold/60 group-hover:text-gold transition-colors duration-300">
                      {step.num}
                    </span>
                    {/* Dot on connector line */}
                    <div className="hidden lg:block absolute -left-[calc(3.5rem+8px)] w-2 h-2 rounded-full bg-void border border-gold/30 group-hover:bg-gold/20 group-hover:border-gold transition-all duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3">
                  <h3 className="font-accent font-semibold text-sm tracking-[0.2em] uppercase text-warm/80 group-hover:text-warm transition-colors duration-300 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-secondary leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="hidden lg:flex flex-shrink-0 items-center pr-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: 40 }}
                    className="h-px bg-gradient-to-r from-gold to-transparent"
                    style={{ width: 0 }}
                  />
                </div>

                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/0 to-transparent group-hover:via-gold/30 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
