import { funFact } from "@/lib/data";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";

export function FunFact() {
  return (
    <div className="border-t border-border px-6 py-6">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-2.5 text-center sm:flex-row sm:text-left">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
          <Icon name="sparkles" className="size-3.5" />
        </span>
        <p className="text-sm leading-6 text-muted">
          <span className="font-semibold text-foreground">Fun fact: </span>
          {funFact}
        </p>
      </Reveal>
    </div>
  );
}
