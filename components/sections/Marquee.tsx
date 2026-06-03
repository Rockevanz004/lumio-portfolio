"use client";

import { motion } from "framer-motion";

const items = [
  "Full-Stack Mastery",
  "UI/UX Architecture",
  "Conversion Strategy",
  "Full-Stack Mastery",
  "UI/UX Architecture",
  "Conversion Strategy",
  "Full-Stack Mastery",
  "UI/UX Architecture",
  "Conversion Strategy",
  "Full-Stack Mastery",
  "UI/UX Architecture",
  "Conversion Strategy",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-surface border-y border-gold-subtle py-5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-8">
            <span className="font-accent text-xs tracking-[0.35em] uppercase text-secondary/70">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
