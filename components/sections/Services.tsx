"use client";

import { motion } from "framer-motion";
import { Layers, Server, Zap, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Layers,
    title: "UI/UX Architecture",
    desc: "Immersive interfaces designed with psychological precision to guide user behavior and evoke emotion.",
    span: "lg:col-span-8",
    bg: "rgba(59,130,246,0.03)",
  },
  {
    num: "02",
    icon: Server,
    title: "Full-Stack Mastery",
    desc: "Bulletproof backends and fluid frontends built for infinite scale.",
    span: "lg:col-span-4",
    bg: "rgba(139,92,246,0.03)",
  },
  {
    num: "03",
    icon: Zap,
    title: "Speed Ops",
    desc: "Sub-second load times that crush the competition and maximize every conversion.",
    span: "lg:col-span-4",
    bg: "rgba(201,169,110,0.03)",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Growth Strategy",
    desc: "Data-driven redesigns that multiply revenue through strategic UX and performance.",
    span: "lg:col-span-8",
    bg: "rgba(16,185,129,0.03)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-pad bg-deep relative overflow-hidden">
      {/* Section number watermark */}
      <div className="absolute top-10 right-10 font-display font-bold text-[200px] leading-none text-stroke-gold opacity-30 select-none hidden lg:block">
        01
      </div>

      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="section-label mb-6">Capabilities</div>
          <h2 className="font-display font-light text-[clamp(44px,6vw,88px)] leading-[0.9] tracking-tight">
            <span className="text-stroke-gold block">ENGINEERING</span>
            <span className="gold-gradient block font-bold italic">SUPERIORITY</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                variants={itemVariants}
                className={`${s.span} relative group border-gold-subtle rounded-none p-8 md:p-10 transition-all duration-500 glow-gold-hover overflow-hidden`}
                style={{ background: s.bg, border: "1px solid rgba(201,169,110,0.1)" }}
              >
                {/* Ghost number */}
                <span className="absolute bottom-4 right-6 font-display font-bold text-[80px] leading-none text-stroke-gold opacity-20 select-none transition-opacity duration-300 group-hover:opacity-40">
                  {s.num}
                </span>

                {/* Top row */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-300">
                    <Icon size={16} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <motion.div
                    className="text-gold/40 group-hover:text-gold transition-colors duration-300"
                    whileHover={{ rotate: -45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="font-accent font-semibold text-sm tracking-[0.15em] uppercase text-warm mb-3">
                  {s.title}
                </h3>
                <p className="font-sans text-sm text-secondary leading-relaxed relative z-10">
                  {s.desc}
                </p>

                {/* Bottom CTA */}
                <div className="mt-8 flex items-center gap-2 font-accent text-[10px] tracking-[0.3em] uppercase text-gold/50 group-hover:text-gold transition-colors duration-300">
                  <span>Explore Service</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>

                {/* Bottom gold line on hover */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
