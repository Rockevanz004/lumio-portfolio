"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { useCountUp } from "@/lib/hooks";

const stats = [
  { num: 50, suffix: "+", label: "Projects Delivered" },
  { num: 99, suffix: "%", label: "Client Satisfaction" },
  { num: 2, suffix: "+", label: "Years of Mastery" },
];

function StatCounter({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(num, 2000);
  return (
    <div ref={ref}>
      <p className="font-display font-bold text-3xl gold-gradient leading-none mb-1">
        {count}{suffix}
      </p>
      <p className="font-accent text-[9px] tracking-[0.3em] uppercase text-muted-text">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-void">
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient blobs */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" }}
        animate={{ scale: [1.1, 1, 1.1], rotate: [45, 0, 45] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.03) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="container-luxury relative z-10 pt-28 pb-20 w-full"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px w-10 bg-gradient-to-r from-gold to-transparent" />
              <span className="font-accent text-[10px] tracking-[0.5em] uppercase text-gold">
                Digital Architect &amp; Visionary
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-light text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight text-warm/90"
              >
                CRAFTING
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.65, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold italic text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight gold-gradient"
              >
                LEGACIES
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="font-sans text-lg text-secondary leading-relaxed max-w-lg mb-12"
            >
              I engineer high-performance digital ecosystems that don&apos;t just
              exist—they breathe, convert, and dominate.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton href="#audit" variant="gold">
                Start Your Audit
              </MagneticButton>
              <MagneticButton href="#work" variant="outline">
                View Masterpieces
              </MagneticButton>
            </motion.div>
          </div>

          {/* Geometric ornament */}
          <div className="lg:col-span-5 xl:col-span-4 hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-72 h-72 xl:w-96 xl:h-96"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full"
                  style={{
                    inset: `${i * 10}%`,
                    border: `1px solid rgba(201,169,110,${0.18 - i * 0.03})`,
                  }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 18 + i * 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-4 h-4 rounded-full bg-gold"
                  style={{ boxShadow: "0 0 30px rgba(201,169,110,0.6), 0 0 60px rgba(201,169,110,0.2)" }}
                />
              </div>
              {/* Cross lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
                <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-20 pt-8 border-t border-gold-subtle grid grid-cols-3 gap-8 max-w-sm"
        >
          {stats.map((s) => (
            <StatCounter key={s.label} num={s.num} suffix={s.suffix} label={s.label} />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-accent text-[9px] tracking-[0.4em] uppercase text-muted-text">
          Scroll to Explore
        </span>
        <div className="relative w-px h-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gold to-transparent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
