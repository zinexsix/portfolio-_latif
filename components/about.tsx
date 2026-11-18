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
          <div className="relative aspect-[9/16] w-full overflow-hidden border border-border bg-surface">
            <Image
              src="/profile-latif.jpg"
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
              Building the Logic <span className="italic text-accent">Behind</span> the Screen
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <p>
                Halo, saya Latif, mahasiswa D3 Manajemen Informatika,
                Politeknik Negeri Padang, dengan fokus di bidang backend
                development.
              </p>
              <p>
                Didorong oleh komitmen untuk terus belajar, ketekunan, dan
                rasa tanggung jawab yang tinggi, saya memiliki semangat besar
                dalam mempelajari teknologi terkini. Minat saya di bidang
                rekayasa perangkat lunak meliputi backend development,
                perancangan basis data, pembangunan REST API, autentikasi dan
                keamanan aplikasi, serta deployment sistem.
              </p>
              <p>
                Pengalaman saya dalam berorganisasi juga dapat diterapkan di
                dunia industri, karena saya terbiasa bekerja dalam tim serta
                memimpin sebuah kegiatan. Dengan pendekatan proaktif dalam
                memecahkan masalah dan dedikasi untuk selalu mengikuti
                perkembangan industri, saya siap berkontribusi secara efektif
                dalam proyek-proyek yang dinamis dan inovatif.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
