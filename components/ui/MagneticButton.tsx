"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "outline" | "ghost" | "whatsapp";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "gold",
  className,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const baseClass = cn(
    "relative inline-flex items-center justify-center gap-2 font-accent text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300 overflow-hidden group",
    variant === "gold" &&
      "bg-gold text-void hover:bg-gold-light",
    variant === "outline" &&
      "border border-gold/40 text-gold hover:border-gold hover:bg-gold/8",
    variant === "ghost" &&
      "text-warm/60 hover:text-warm",
    variant === "whatsapp" &&
      "bg-whatsapp text-white hover:opacity-90",
    disabled && "opacity-40 pointer-events-none",
    className
  );

  const inner = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseClass}
      data-hover
    >
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block">
      {inner}
    </button>
  );
}
