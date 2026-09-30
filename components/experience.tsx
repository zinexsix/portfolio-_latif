import { experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-2xl">
        <Reveal className="mx-auto max-w-lg text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
            Journey
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Experience &amp; Involvement
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-border">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-1.5 border-b border-border py-6 sm:grid-cols-[140px_1fr] sm:gap-6">
                <p className="text-sm font-medium text-accent">{item.period}</p>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.org}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
