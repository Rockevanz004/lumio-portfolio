"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO",
    company: "FashionNova",
    quote:
      "The redesign didn't just look better—it literally doubled our conversion rate in the first month. A true visionary.",
  },
  {
    name: "Mark Thompson",
    role: "Founder",
    company: "TechFlow",
    quote:
      "Fast, professional, and incredibly skilled. The performance optimization alone was worth the investment.",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Zenith",
    quote:
      "The most seamless collaboration I've ever had. They understood our brand prestige perfectly.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      {/* Giant quote mark */}
      <div className="absolute top-0 left-10 font-display font-bold text-[320px] leading-none text-gold/5 select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="section-label justify-center mb-6">
            Voices of Success
          </div>
          <h2 className="font-display font-bold italic text-[clamp(44px,6vw,88px)] leading-[0.9] tracking-tight gold-gradient inline-block">
            TESTIMONIALS
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-8 bg-card border-gold-subtle hover:border-gold/25 transition-all duration-500 glow-gold-hover"
              style={{ border: "1px solid rgba(201,169,110,0.1)" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(5).fill(0).map((_, j) => (
                  <Star
                    key={j}
                    size={10}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-display font-light italic text-lg text-warm/80 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-6 border-t border-gold-subtle">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
                  <span className="font-accent font-bold text-xs text-gold">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-accent font-semibold text-xs text-warm">{t.name}</p>
                  <p className="font-sans text-[11px] text-muted-text">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
