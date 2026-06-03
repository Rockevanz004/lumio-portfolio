"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-20% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          scrolled ? "glass-dark py-4 shadow-[0_1px_0_rgba(201,169,110,0.08)]" : "py-6"
        )}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" data-hover>
            <div className="w-8 h-8 bg-gold flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300">
              <span className="font-accent font-bold text-void text-sm -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                L
              </span>
            </div>
            <span className="font-accent font-bold text-lg tracking-tight">
              LUM<span className="text-gold">IO</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative font-accent text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 group",
                    isActive ? "text-gold" : "text-secondary hover:text-gold"
                  )}
                  data-hover
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-5">
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 border border-gold/30 text-gold font-accent text-[11px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-gold hover:text-void transition-all duration-300"
              data-hover
            >
              Let&apos;s Talk
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-warm/70 hover:text-warm transition-colors"
              aria-label="Open menu"
              data-hover
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] glass-dark flex flex-col"
          >
            <div className="container-luxury py-6 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-gold flex items-center justify-center rotate-12">
                  <span className="font-accent font-bold text-void text-sm -rotate-12">L</span>
                </div>
                <span className="font-accent font-bold text-lg tracking-tight">
                  LUM<span className="text-gold">IO</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="text-warm/70 hover:text-warm transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-light text-warm/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.08, duration: 0.5 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex border border-gold/30 text-gold font-accent text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold hover:text-void transition-all duration-300"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
