"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTA() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-luxury relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label justify-center mb-8">Ready?</div>

          <h2 className="font-display font-light text-[clamp(56px,9vw,130px)] leading-[0.88] tracking-tight mb-6">
            <span className="text-warm/90 block">READY TO</span>
            <span className="gold-gradient font-bold italic block">DOMINATE?</span>
          </h2>

          <p className="font-sans text-base text-secondary max-w-md mx-auto mb-12 leading-relaxed">
            Your competition is already evolving. Don&apos;t get left behind in the
            digital dark ages.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton
              href="mailto:lumiosoftwaresolutions@gmail.com"
              variant="gold"
              className="px-12 py-5"
            >
              Start a Project
            </MagneticButton>
            <MagneticButton
              href="https://wa.me/+94724142421"
              variant="whatsapp"
              className="px-12 py-5"
            >
              WhatsApp Me
            </MagneticButton>
          </div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
