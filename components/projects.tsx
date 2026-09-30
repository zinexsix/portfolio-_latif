"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projectCategories, projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { BrandIcon } from "@/components/icon";

export function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="border-t border-border px-6 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl">
        <Reveal className="mx-auto max-w-lg text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
            My Work
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Recent Projects
          </h2>
        </Reveal>

        <div className="mt-6 flex flex-wrap justify-center gap-5 border-b border-border">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`relative px-1 pb-3 text-sm font-medium transition-colors ${
                active === category ? "text-accent" : "text-muted hover:text-accent"
              }`}
            >
              {category}
              {active === category && (
                <motion.span
                  layoutId="active-category"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-gradient-to-r from-accent to-accent-2"
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.1}>
              <div className="group flex h-full flex-col border border-border transition-all duration-300 hover:border-accent hover:bg-accent-soft">
                <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-surface">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <span className="font-serif text-sm italic text-accent/70">
                      {project.category}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  {project.note && (
                    <span className="mb-2 inline-flex w-fit items-center gap-1 border border-accent/30 bg-accent-soft px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent">
                      {project.note}
                    </span>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="bg-accent-2-soft px-2 py-0.5 text-xs font-medium text-accent-2"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 font-serif text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-6 text-muted">
                    {project.description}
                  </p>
                  <a
                    href={project.href ?? "#"}
                    target={project.href ? "_blank" : undefined}
                    rel={project.href ? "noopener noreferrer" : undefined}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                  >
                    Lihat Detail
                    {project.href?.includes("github.com") ? (
                      <BrandIcon
                        name="github"
                        className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    ) : (
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
