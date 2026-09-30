"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Cta() {
  return (
    <section className="border-t border-border px-6 py-16">
      <Reveal className="mx-auto w-full max-w-4xl">
        <div className="relative overflow-hidden border border-accent/60 bg-accent-soft px-6 py-12 text-center sm:py-14">
          <div
            aria-hidden
            className="animate-blob pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-accent/10 blur-[70px]"
          />

          <h2 className="relative text-balance font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Punya proyek atau ide{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text italic text-transparent">
              kolaborasi
            </span>
            ?
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
            Yuk diskusikan kebutuhan Anda — saya terbuka untuk kolaborasi
            proyek, baik individu maupun tim, di bidang web development
            maupun UI/UX design. Saya juga berpengalaman bekerja sama dalam
            tim pengembangan.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/15"
          >
            Apply For Meeting
            <ArrowRight className="size-4" />
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
