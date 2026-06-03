"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most high-performance sites take 4-8 weeks from discovery to launch, depending on complexity and integrations.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. I offer monthly maintenance and growth retainers to ensure your site continues to dominate as technology evolves.",
  },
  {
    q: "Will my site be mobile-friendly?",
    a: "Absolutely. I follow a mobile-first architecture, ensuring your site looks and performs perfectly on every device.",
  },
  {
    q: "What tech stack do you use?",
    a: "I specialize in the 'Modern Web' stack: React, Next.js, TypeScript, and Tailwind CSS for speed and scalability.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-deep relative overflow-hidden">
      {/* Number watermark */}
      <div className="absolute top-10 right-10 font-display font-bold text-[200px] leading-none text-stroke-gold opacity-30 select-none hidden lg:block">
        06
      </div>

      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label mb-6">Clarification</div>
            <h2 className="font-display font-light text-[clamp(38px,5vw,72px)] leading-[0.9] tracking-tight">
              <span className="text-warm/90 block">FREQUENTLY</span>
              <span className="text-warm/90 block">ASKED</span>
              <span className="gold-gradient font-bold italic block">QUESTIONS</span>
            </h2>
            <p className="font-sans text-sm text-secondary mt-8 max-w-xs leading-relaxed">
              Everything you need to know before we start building your digital legacy.
            </p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-0"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-gold-subtle last:border-b-0"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  data-hover
                >
                  <span className="font-accent font-semibold text-xs tracking-[0.15em] uppercase text-warm/80 group-hover:text-warm transition-colors duration-300 pr-8">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-7 h-7 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-300"
                  >
                    {open === i ? (
                      <Minus size={12} className="text-gold" />
                    ) : (
                      <Plus size={12} className="text-gold/50 group-hover:text-gold transition-colors duration-300" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-sm text-secondary leading-relaxed pb-6 max-w-lg">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
