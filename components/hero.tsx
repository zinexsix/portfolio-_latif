"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site, workedWith } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { TechIcon, type TechIconName } from "@/components/icon";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-20 sm:py-28">
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-24 left-1/4 size-56 rounded-full bg-accent/10 blur-[90px]"
      />
      <div
        aria-hidden
        className="animate-blob animation-delay-3000 pointer-events-none absolute -bottom-16 right-1/4 size-56 rounded-full bg-accent-2/10 blur-[90px]"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 border border-border px-3.5 py-1 text-xs font-medium text-muted">
            Hey, I&apos;m {site.name}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-5 font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {site.role.split(" & ")[0]} &amp;<br />
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text italic text-transparent">
              {site.role.split(" & ")[1]}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 max-w-lg text-balance text-sm leading-6 text-muted sm:text-base">
            {site.university}, {site.program}. Fokus membangun website yang
            rapi, cepat, dan enak dipakai — sekaligus mendesain antarmuka
            yang ramah pengguna.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/15"
            >
              Get In Touch
              <ArrowRight className="size-4" />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View Project
              <ArrowUpRight className="size-4" />
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.4} className="mt-14 w-full border-t border-border pt-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Worked With
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            {workedWith.map((tool) => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <TechIcon
                  name={tool.icon as TechIconName}
                  color={"color" in tool ? tool.color : undefined}
                  className="size-3.5"
                />
                {tool.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
