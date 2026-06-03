"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, X } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const benefits = [
  "Conversion Rate Optimization Analysis",
  "UI/UX Friction Point Identification",
  "Performance & Speed Audit",
  "Growth Strategy Roadmap",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", website: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const msg = encodeURIComponent(
        `*New Audit Request*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Website:* ${form.website}\n*Message:* ${form.message}`
      );
      window.open(`https://wa.me/+94724142421?text=${msg}`, "_blank");
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const inputClass =
    "w-full bg-void border border-gold/10 text-warm text-sm font-sans px-4 py-3.5 placeholder:text-muted-text/50 focus:outline-none focus:border-gold/40 transition-colors duration-300";

  return (
    <section id="contact" className="section-pad bg-void relative overflow-hidden">
      {/* Number watermark */}
      <div className="absolute top-10 left-10 font-display font-bold text-[200px] leading-none text-stroke-gold opacity-30 select-none hidden lg:block">
        07
      </div>

      {/* Gold orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)" }}
      />

      <div className="container-luxury">
        <div id="audit" className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label mb-6">Free Strategy Session</div>
            <h2 className="font-display font-light text-[clamp(38px,5vw,72px)] leading-[0.9] tracking-tight mb-6">
              <span className="text-warm/90 block">STOP</span>
              <span className="text-warm/90 block">LOSING</span>
              <span className="gold-gradient font-bold italic block">CUSTOMERS</span>
            </h2>
            <p className="font-sans text-sm text-secondary leading-relaxed mb-10 max-w-sm">
              Most websites are digital paperweights. I&apos;ll show you exactly where
              your site is leaking revenue and provide a roadmap to digital dominance.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-sm text-secondary">{b}</span>
                </li>
              ))}
            </ul>

            {/* Trust signal */}
            <div className="flex items-center gap-3 p-4 border border-gold/10 bg-card/50">
              <div className="w-1.5 h-8 bg-gradient-to-b from-gold to-gold/30" />
              <p className="font-sans text-xs text-secondary/70">
                100% free. No strings attached. Just pure value.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 border-gold-subtle"
                  style={{ border: "1px solid rgba(201,169,110,0.15)" }}
                >
                  <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                    <CheckCircle2 size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display font-bold italic text-3xl gold-gradient mb-3">
                    Strategy Secured
                  </h3>
                  <p className="font-sans text-sm text-secondary">
                    I&apos;ll review your site and reach out within 24 hours.
                  </p>
                </motion.div>
              ) : isOpen ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 border-gold-subtle p-8"
                  style={{ border: "1px solid rgba(201,169,110,0.15)" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-accent text-xs tracking-[0.3em] uppercase text-gold/70">
                      Claim Your Audit
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="text-muted-text hover:text-warm transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      className={inputClass}
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      required
                      type="email"
                      className={inputClass}
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <input
                    className={inputClass}
                    placeholder="Website URL (optional)"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                  />
                  <textarea
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <MagneticButton
                    type="submit"
                    variant="gold"
                    disabled={loading}
                    className="w-full justify-center"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={14} />
                        Claim My Free Audit
                      </>
                    )}
                  </MagneticButton>
                </motion.form>
              ) : (
                <motion.div
                  key="cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <MagneticButton
                    onClick={() => setIsOpen(true)}
                    variant="gold"
                    className="w-full justify-center py-5 text-sm"
                  >
                    Claim My Free Audit
                  </MagneticButton>
                  <MagneticButton
                    href="https://wa.me/+94724142421"
                    variant="whatsapp"
                    className="w-full justify-center py-5 text-sm"
                  >
                    WhatsApp Me
                  </MagneticButton>
                  <p className="font-sans text-xs text-muted-text/60 text-center">
                    Or email us at{" "}
                    <a
                      href="mailto:lumiosoftwaresolutions@gmail.com"
                      className="text-gold/60 hover:text-gold transition-colors"
                    >
                      lumiosoftwaresolutions@gmail.com
                    </a>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
