import { ArrowUpRight } from "lucide-react";
import { docsLinks } from "@/lib/data";
import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CertificateGallery } from "@/components/certificate-gallery";

export function Docs() {
  return (
    <section id="docs" className="border-t border-border px-6 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl">
        <Reveal className="mx-auto max-w-lg text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
            Documents
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Docs &amp; Credentials
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Kumpulan dokumen pendukung — CV, sertifikat, dan tautan sosial
            media — untuk memudahkan proses rekrutmen.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {docsLinks.map((doc, i) => {
            if (doc.type === "gallery") {
              return (
                <Reveal key={doc.name} delay={i * 0.08}>
                  <CertificateGallery
                    name={doc.name}
                    description={doc.description}
                    icon={doc.icon as IconName}
                  />
                </Reveal>
              );
            }

            const external = doc.href.startsWith("/") || doc.href.startsWith("http");
            return (
              <Reveal key={doc.name} delay={i * 0.08}>
                <a
                  href={doc.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col border border-border p-5 transition-all duration-300 hover:border-accent hover:bg-accent-soft"
                >
                  <div className="flex size-9 items-center justify-center rounded-md bg-accent-soft text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon name={doc.icon as IconName} className="size-4" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    {doc.name}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs leading-5 text-muted">
                    {doc.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                    Buka
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
