import { services } from "@/lib/data";
import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";

export function Services() {
  return (
    <section id="services" className="border-t border-border px-6 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl">
        <Reveal className="mx-auto max-w-lg text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
            What I Do
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Services
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Beberapa layanan yang bisa saya bantu kerjakan, dari pengembangan
            website hingga desain antarmuka.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.1}>
              <div className="group h-full border border-border p-5 transition-all duration-300 hover:border-accent hover:bg-accent-soft">
                <div className="flex size-9 items-center justify-center rounded-md bg-accent-soft text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon name={service.icon as IconName} className="size-4" />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
