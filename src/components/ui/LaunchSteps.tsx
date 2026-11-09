import { cn } from "@/lib/utils";

export interface LaunchStep {
  title: string;
  text: string;
}

export function LaunchSteps({ steps, compact = false }: { steps: readonly LaunchStep[]; compact?: boolean }) {
  return (
    <ol role="list" className={cn("grid gap-3 sm:grid-cols-2 sm:gap-4", !compact && "lg:grid-cols-4")}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "grid grid-cols-[auto_minmax(0,1fr)] content-start items-start gap-3 rounded-xl border border-line bg-wash/40 p-4",
            !compact && "sm:grid-cols-1 sm:gap-4 sm:p-5",
          )}
        >
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-full border border-line bg-paper font-mono text-xs font-semibold text-accent">
            {index + 1}
          </span>
          <div>
            <h3 className="text-base font-semibold leading-snug tracking-tight text-ink">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
