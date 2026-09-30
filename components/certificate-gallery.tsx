"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, FolderOpen, X } from "lucide-react";
import { certificateCategories } from "@/lib/data";
import { Icon, type IconName } from "@/components/icon";

export function CertificateGallery({
  name,
  description,
  icon,
}: {
  name: string;
  description?: string;
  icon: IconName;
}) {
  const [open, setOpen] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [index, setIndex] = useState(0);

  if (certificateCategories.length === 0) return null;

  const category = certificateCategories[categoryIndex];
  const items = category.items;
  const active = items[index];
  const hasMultiple = items.length > 1;

  function selectCategory(i: number) {
    setCategoryIndex(i);
    setIndex(0);
  }

  function prev() {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }

  function next() {
    setIndex((i) => (i + 1) % items.length);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex h-full w-full flex-col border border-border p-5 text-left transition-all duration-300 hover:border-accent hover:bg-accent-soft"
      >
        <div className="flex size-9 items-center justify-center rounded-md bg-accent-soft text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon name={icon} className="size-4" />
        </div>
        <h3 className="mt-4 text-sm font-semibold text-foreground">{name}</h3>
        {description && (
          <p className="mt-1.5 flex-1 text-xs leading-5 text-muted">{description}</p>
        )}
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent">
          Buka
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup"
              className="absolute right-4 top-4 flex size-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-white"
            >
              <X className="size-5" />
            </button>

            <div
              className="relative flex w-full max-w-2xl flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex w-full flex-wrap justify-center gap-2">
                {certificateCategories.map((cat, i) => (
                  <button
                    key={cat.category}
                    type="button"
                    onClick={() => selectCategory(i)}
                    className={`border px-3 py-1.5 text-xs font-medium transition-colors ${
                      i === categoryIndex
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                    }`}
                  >
                    {cat.category}
                    <span className="ml-1.5 opacity-70">({cat.items.length})</span>
                  </button>
                ))}
              </div>

              {items.length === 0 ? (
                <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 border border-dashed border-white/20 text-white/50">
                  <FolderOpen className="size-8" />
                  <p className="text-sm">Belum ada sertifikat di kategori ini.</p>
                </div>
              ) : (
                <motion.div
                  key={active.image}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex w-full flex-col items-center gap-4"
                >
                  <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-white/10 bg-black/40">
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 640px, 100vw"
                    />
                    {hasMultiple && (
                      <>
                        <button
                          type="button"
                          onClick={prev}
                          aria-label="Sertifikat sebelumnya"
                          className="absolute left-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center bg-black/50 text-white transition-colors hover:bg-black/70"
                        >
                          <ChevronLeft className="size-5" />
                        </button>
                        <button
                          type="button"
                          onClick={next}
                          aria-label="Sertifikat berikutnya"
                          className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center bg-black/50 text-white transition-colors hover:bg-black/70"
                        >
                          <ChevronRight className="size-5" />
                        </button>
                      </>
                    )}
                  </div>

                  <p className="text-center text-sm font-medium text-white">{active.title}</p>

                  {hasMultiple && (
                    <div className="flex flex-wrap justify-center gap-2">
                      {items.map((cert, i) => (
                        <button
                          key={cert.image}
                          type="button"
                          onClick={() => setIndex(i)}
                          aria-label={cert.title}
                          className={`relative size-14 shrink-0 overflow-hidden border transition-colors ${
                            i === index ? "border-accent" : "border-white/20 hover:border-white/50"
                          }`}
                        >
                          <Image src={cert.image} alt={cert.title} fill className="object-cover" sizes="56px" />
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
