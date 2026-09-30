import Image from "next/image";
import { site } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-4xl items-center gap-10 md:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-2 -z-10 border border-accent/30" />
          <div
            aria-hidden
            className="animate-blob pointer-events-none absolute -inset-4 -z-20 bg-gradient-to-br from-accent/10 to-accent-2/10 blur-2xl"
          />
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-surface">
            <Image
              src="/profile.jpg"
              alt={site.name}
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 320px, 100vw"
              priority
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
              Who I Am
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Bridging Design <span className="italic text-accent">and</span> Development
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <p>
                Saya M. Khairul Umardi Latif, Mahasiswa Diploma Tiga (D3)
                Manajemen Informatika dari Politeknik Negeri Padang. Saya
                memiliki ketertarikan pada bidang pengembangan perangkat
                lunak, pengembangan web, dan teknologi informasi.
              </p>
              <p>
                Saat di perkuliahan, saya mempelajari pemrograman, basis
                data, UI/UX, serta pengembangan aplikasi berbasis web dan
                mobile. Saya senang mempelajari teknologi baru, mampu
                bekerja sama dalam tim, dan berkomitmen untuk terus
                mengembangkan kemampuan agar dapat memberikan solusi
                digital yang bermanfaat.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
