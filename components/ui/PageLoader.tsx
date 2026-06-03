"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = ["L", "U", "M", "I", "O"];

export default function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage === "undefined") return;
    if (!sessionStorage.getItem("lumio-loaded")) {
      setVisible(true);
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
        sessionStorage.setItem("lumio-loaded", "1");
      }, 3200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-void flex flex-col items-center justify-center"
        >
          {/* Logo box */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-16 bg-gold flex items-center justify-center mb-10"
          >
            <motion.span
              initial={{ rotate: 45 }}
              animate={{ rotate: -12 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-accent font-bold text-void text-2xl block"
            >
              L
            </motion.span>
          </motion.div>

          {/* LUMIO letters */}
          <div className="flex items-center justify-center gap-0.5 mb-4 overflow-hidden">
            {letters.map((letter, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.07,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-accent font-bold text-5xl md:text-6xl tracking-[0.3em] text-warm block"
                >
                  {letter}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="font-accent text-[9px] tracking-[0.6em] uppercase text-secondary"
          >
            Software Solutions
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48"
          >
            <div className="h-px bg-warm/8 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 2.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-gold to-gold-light origin-left"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
