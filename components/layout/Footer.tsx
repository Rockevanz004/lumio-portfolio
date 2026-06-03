import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/lumio" },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@lumiosoftwaresolutions",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585716310269",
  },
];

export default function Footer() {
  return (
    <footer className="bg-void border-t border-gold-subtle">
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12 border-b border-gold-subtle">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 bg-gold flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <span className="font-accent font-bold text-void text-sm -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  L
                </span>
              </div>
              <span className="font-accent font-bold text-lg tracking-tight">
                LUM<span className="text-gold">IO</span>
              </span>
            </Link>
            <p className="font-sans text-sm text-secondary leading-relaxed max-w-xs">
              Architecting high-performance digital legacies for the world&apos;s
              most ambitious brands.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="font-accent text-[10px] tracking-[0.4em] uppercase text-gold mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-secondary hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 md:col-start-9">
            <p className="font-accent text-[10px] tracking-[0.4em] uppercase text-gold mb-5">
              Contact
            </p>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:lumiosoftwaresolutions@gmail.com"
                  className="flex items-center gap-2.5 font-sans text-sm text-secondary hover:text-gold transition-colors duration-300"
                >
                  <Mail size={13} className="text-gold/60" />
                  lumiosoftwaresolutions@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+94724142421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-sans text-sm text-secondary hover:text-gold transition-colors duration-300"
                >
                  <Phone size={13} className="text-gold/60" />
                  +94 72 414 2421
                </a>
              </li>
            </ul>
            <p className="font-accent text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
              Follow
            </p>
            <div className="flex gap-5">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-secondary hover:text-gold transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-accent text-[10px] tracking-[0.3em] uppercase text-muted-text">
            © 2026 Lumio Masterpieces. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#privacy"
              className="font-sans text-xs text-muted-text hover:text-secondary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="font-sans text-xs text-muted-text hover:text-secondary transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
