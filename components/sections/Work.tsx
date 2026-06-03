"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Ecommerce Revolution",
    title: "Luxe Commerce",
    desc: "A high-end fashion marketplace that redefined digital shopping through immersive 3D interactions and sub-second performance.",
    before: ["2.1% Conv. Rate", "4s Load Time"],
    after: ["7.4% Conv. Rate", "0.8s Load Time"],
    tech: ["Next.js", "Three.js", "Stripe", "Tailwind"],
    image: "https://picsum.photos/seed/lux/1200/800",
    imageAlt: "Luxe Commerce project",
  },
  {
    tag: "Product Design",
    title: "Nova SaaS",
    desc: "An enterprise analytics dashboard that turns complex data into actionable visual narratives.",
    before: ["High Churn", "Confusing UX"],
    after: ["40% Retention Up", "98% CSAT"],
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://picsum.photos/seed/nova/1200/800",
    imageAlt: "Nova SaaS project",
  },
  {
    tag: "Brand Evolution",
    title: "Zenith Corp",
    desc: "A complete digital overhaul for a Fortune 500 company, focusing on authority and modern prestige.",
    before: ["Legacy 2012 UI", "Mobile Broken"],
    after: ["Modern Web 3.0", "100% Responsive"],
    tech: ["TypeScript", "Framer Motion", "Vite", "AWS"],
    image: "https://picsum.photos/seed/zen/1200/800",
    imageAlt: "Zenith Corp project",
  },
];

export default function Work() {
  return (
    <section id="work" className="section-pad bg-deep relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-bold text-[18vw] leading-none text-stroke-gold opacity-[0.04] whitespace-nowrap">
          PORTFOLIO
        </span>
      </div>

      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="section-label mb-6">Selected Works</div>
            <h2 className="font-display font-light text-[clamp(44px,6vw,88px)] leading-[0.9] tracking-tight">
              <span className="text-warm/90 block">THE</span>
              <span className="gold-gradient font-bold italic block">GALLERY</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-secondary max-w-xs">
            03 projects that changed the trajectory of ambitious businesses.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-gold-subtle overflow-hidden"
              style={{ border: "1px solid rgba(201,169,110,0.1)" }}
            >
              <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
                  {/* Tag */}
                  <div className="absolute top-5 left-5">
                    <span className="font-accent text-[9px] tracking-[0.4em] uppercase text-gold bg-void/70 backdrop-blur-sm px-3 py-1.5 border border-gold/20">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`bg-card p-8 md:p-12 flex flex-col justify-between ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <h3 className="font-display font-bold italic text-[clamp(32px,3vw,52px)] leading-none text-warm mb-5 group-hover:gold-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-secondary leading-relaxed mb-8 max-w-sm">
                      {project.desc}
                    </p>

                    {/* Before / After */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 border border-red-500/10 bg-red-500/3">
                        <p className="font-accent text-[8px] tracking-[0.4em] uppercase text-red-400/60 mb-2">
                          The Past
                        </p>
                        {project.before.map((b) => (
                          <p key={b} className="font-sans text-xs text-secondary/70">{b}</p>
                        ))}
                      </div>
                      <div className="p-4 border border-emerald-500/15 bg-emerald-500/3">
                        <p className="font-accent text-[8px] tracking-[0.4em] uppercase text-emerald-400/60 mb-2">
                          The Future
                        </p>
                        {project.after.map((a) => (
                          <p key={a} className="font-sans text-xs text-warm/80">{a}</p>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-accent text-[9px] tracking-[0.2em] uppercase text-muted-text border border-gold/8 px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex items-center gap-3 font-accent text-xs tracking-[0.25em] uppercase text-gold/50 group-hover:text-gold transition-colors duration-300 cursor-pointer">
                    <span>View Case Study</span>
                    <motion.div
                      className="border border-gold/20 p-1 group-hover:border-gold transition-colors duration-300"
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight size={12} />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold via-gold-light to-transparent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
