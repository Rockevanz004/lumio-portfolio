"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    items: [
      "At LUMIO, we respect your privacy and are committed to protecting your personal data. This policy outlines how we handle information collected through our website.",
      "We collect information that you provide directly to us, such as when you request an audit or contact us via email. This may include your name, email address, and website URL.",
      "Your data is used solely to provide our services, communicate with you, and improve our website performance. We never sell your personal information to third parties.",
      "We implement industry-standard security measures to protect your data from unauthorized access or disclosure.",
    ],
  },
  {
    id: "terms",
    title: "Terms of Service",
    items: [
      "By accessing the LUMIO website, you agree to comply with these terms of service and all applicable laws and regulations.",
      "The content on this website, including text, graphics, and code, is the property of LUMIO and is protected by copyright laws.",
      "Our free audit service is provided for informational purposes and does not constitute a binding contract for further development services.",
      "LUMIO shall not be liable for any damages arising from the use or inability to use the materials on this website.",
    ],
  },
];

export default function Legal() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="bg-void border-t border-gold-subtle py-16">
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 gap-4">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-gold-subtle"
              style={{ border: "1px solid rgba(201,169,110,0.1)" }}
            >
              <button
                onClick={() => setOpen(open === section.id ? null : section.id)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-accent font-semibold text-xs tracking-[0.25em] uppercase text-warm/70 group-hover:text-warm transition-colors duration-300">
                  {section.title}
                </span>
                <motion.div
                  animate={{ rotate: open === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-colors duration-300",
                      open === section.id ? "text-gold" : "text-muted-text"
                    )}
                  />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={
                  open === section.id
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ol className="px-6 pb-6 space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-accent text-[10px] text-gold/40 mt-0.5 flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-sans text-xs text-secondary leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
