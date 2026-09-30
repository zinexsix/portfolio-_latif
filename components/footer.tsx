import { Mail, MapPin, Phone } from "lucide-react";
import { site, socials } from "@/lib/data";
import { BrandIcon, type BrandIconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 pb-8 pt-16 sm:pt-20">
      <div className="mx-auto w-full max-w-4xl">
        <Reveal className="mx-auto max-w-lg text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
            Get In Touch
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Terbuka untuk diskusi seputar proyek, kolaborasi, atau sekadar
            berbincang soal web development &amp; design.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <div className="group flex items-center gap-3.5 border border-border px-4 py-3.5 transition-all duration-300 hover:border-accent hover:bg-accent-soft">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
              <MapPin className="size-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Location</p>
              <p className="text-xs text-muted">{site.location}</p>
            </div>
          </div>
          <div className="group flex items-center gap-3.5 border border-border px-4 py-3.5 transition-all duration-300 hover:border-accent hover:bg-accent-soft">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
              <Phone className="size-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Phone</p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-xs text-muted hover:text-accent">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="group flex items-center gap-3.5 border border-border px-4 py-3.5 transition-all duration-300 hover:border-accent hover:bg-accent-soft">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
              <Mail className="size-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Email</p>
              <a href={`mailto:${site.email}`} className="text-xs text-muted hover:text-accent">
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex size-9 items-center justify-center rounded-md border border-border text-foreground/70 transition-all duration-300 hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              <BrandIcon name={social.icon as BrandIconName} className="size-4" />
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="hover:text-accent">Terms</a>
            <a href="#" className="hover:text-accent">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
