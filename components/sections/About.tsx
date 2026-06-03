"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useCountUp } from "@/lib/hooks";

const stats = [
  { num: 50, suffix: "+", label: "Projects Delivered" },
  { num: 99, suffix: "%", label: "Client Satisfaction" },
];

function StatCounter({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(num, 2200);
  return (
    <div ref={ref}>
      <p className="font-display font-bold text-[clamp(36px,4vw,56px)] leading-none gold-gradient mb-1">
        {count}{suffix}
      </p>
      <p className="font-accent text-[9px] tracking-[0.3em] uppercase text-muted-text">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad bg-void relative overflow-hidden">
      {/* Number watermark */}
      <div className="absolute top-10 right-10 font-display font-bold text-[200px] leading-none text-stroke-gold opacity-30 select-none hidden lg:block">
        04
      </div>

      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/dev/800/800"
                alt="The Architect"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-void/50 to-transparent" />
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 glass-luxury p-6 min-w-[140px]"
            >
              <p className="font-display font-bold text-4xl gold-gradient leading-none mb-1">
                2+
              </p>
              <p className="font-accent text-[9px] tracking-[0.3em] uppercase text-secondary">
                Years of Mastery
              </p>
            </motion.div>

            {/* Vertical gold line */}
            <div className="hidden lg:block absolute -right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label mb-6">The Architect</div>
            <h2 className="font-display font-light text-[clamp(38px,5vw,72px)] leading-[0.9] tracking-tight mb-8">
              <span className="text-warm/90 block">RESULTS</span>
              <span className="font-bold italic block">OVER</span>
              <span className="gold-gradient font-bold italic block">RESOURCES</span>
            </h2>

            <div className="space-y-5 mb-10">
              <p className="font-sans text-base text-secondary leading-relaxed">
                I don&apos;t just write code; I build business engines. My philosophy is
                simple: if your website isn&apos;t making you money, it&apos;s failing.
              </p>
              <p className="font-sans text-base text-secondary leading-relaxed">
                With a background in both high-end UI/UX architecture and complex
                full-stack engineering, I bridge the gap between &ldquo;pretty&rdquo; and
                &ldquo;profitable.&rdquo; I&apos;ve helped startups and established brands scale
                their digital presence through strategic design and bulletproof
                technology.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mb-10 pb-10 border-b border-gold-subtle">
              {stats.map((s) => (
                <StatCounter key={s.label} num={s.num} suffix={s.suffix} label={s.label} />
              ))}
            </div>

            {/* CTA */}
            <Link
              href="#process"
              className="inline-flex items-center gap-3 font-accent text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-light transition-colors duration-300 group"
              data-hover
            >
              <span>Learn My Process</span>
              <motion.div
                className="border border-gold/30 p-1.5 group-hover:border-gold transition-colors duration-300"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight size={12} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
