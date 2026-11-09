import Link from "next/link";
import { BadgeDollarSign, Check } from "lucide-react";
import { cn } from "~/lib/utils";

const trustPoints = [
  "Switch or cancel anytime",
  "No hidden fees",
  "30-day money-back guarantee",
] as const;

const plans = [
  {
    ribbon: null as "most-popular" | "best-value" | null,
    classesLabel: "30 Classes",
    planName: "Starter Support",
    pricePerClass: 16,
    total: 480,
    highlights: [
      "Best for trying out live Spanish or getting targeted help in one area",
      "Great for light schedules or supplementing another Spanish program",
      "Monthly payment options available at checkout.",
    ],
  },
  {
    ribbon: "most-popular" as const,
    classesLabel: "60 Classes",
    planName: "Steady Progress",
    pricePerClass: 12,
    total: 720,
    highlights: [
      "Ideal for consistent practice 2 times per week so Spanish actually sticks",
      "Can sometimes work as a full school year's worth of classes for families going at a comfortable pace",
      "Monthly payment options available at checkout.",
    ],
  },
  {
    ribbon: "best-value" as const,
    classesLabel: "90 Classes",
    planName: "Fluency Builder",
    pricePerClass: 11,
    total: 990,
    highlights: [
      "Best for younger learners who need shorter, more frequent lessons",
      "Designed for fast progress with 3 classes per week and stronger fluency gains",
      "Monthly payment options available at checkout.",
    ],
  },
] as const;

function PricingCard({
  plan,
}: {
  plan: (typeof plans)[number];
}) {
  const isPopular = plan.ribbon === "most-popular";

  const cardBody = (
    <div
      className={cn(
        "flex flex-1 flex-col gap-5",
        isPopular ? "rounded-2xl bg-white p-6 sm:rounded-3xl sm:p-8" : "p-6 sm:p-8",
      )}
    >
        {plan.ribbon === "best-value" ? (
          <span className="charla-eyebrow inline-flex w-fit rounded-full border border-black/[0.1] bg-[var(--charla-nav-pill-bg)] px-3 py-1 text-xs text-[var(--charla-black)]">
            Best Value
          </span>
        ) : (
          <span className="sr-only">Standard plan</span>
        )}

        <div className="space-y-1">
          <p className="charla-heading-xl text-xl text-[var(--charla-navy)] sm:text-2xl">{plan.classesLabel}</p>
          <p className="charla-eyebrow text-sm text-[var(--charla-black)]/70 sm:text-base">{plan.planName}</p>
        </div>

        <div className="space-y-2">
          <p className="charla-heading-xl text-[var(--charla-black)]">
            <span className="text-3xl sm:text-[2rem]">${plan.pricePerClass}</span>
            <span className="charla-body text-base font-normal text-[var(--charla-black)]/70"> /Class</span>
          </p>
          <p className="charla-eyebrow text-sm text-[var(--charla-black)] sm:text-base">Total: ${plan.total}</p>
        </div>

        <hr className="border-black/[0.08]" />

        <ul className="flex flex-1 flex-col gap-3" role="list">
          {plan.highlights.map((line) => (
            <li key={line} className="charla-body flex gap-2.5 text-sm leading-relaxed text-[var(--charla-black)]/90 sm:text-[15px]">
              <span
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-black/15 bg-[var(--charla-nav-pill-bg)] text-[var(--charla-black)]"
                aria-hidden
              >
                <Check className="size-3" strokeWidth={2.5} />
              </span>
              {line}
            </li>
          ))}
        </ul>

        <Link
          href="/register"
          className={cn(
            "charla-eyebrow mt-2 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm transition-colors sm:text-[15px]",
            isPopular
              ? "bg-[var(--charla-button-dark)] text-white hover:opacity-90"
              : "border border-black/15 bg-white text-[var(--charla-black)] hover:bg-[var(--charla-nav-pill-bg)]",
          )}
        >
          Build a Quote Now
        </Link>
    </div>
  );

  if (isPopular) {
    return (
      <article className="flex h-full flex-col rounded-3xl bg-[var(--charla-red)] p-1.5 shadow-[0_8px_32px_-16px_rgba(255,153,96,0.35)]">
        <div className="charla-eyebrow px-2 py-2 text-center text-xs tracking-wide text-[var(--charla-black)] sm:text-sm">
          ★ Most Popular ★
        </div>
        {cardBody}
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-[0_8px_32px_-16px_rgba(6,6,6,0.12)]">
      {cardBody}
    </article>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-[88px] bg-[var(--charla-bg-sky)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="pricing-heading"
    >
      <div className="charla-container">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 sm:px-4 sm:py-2">
            <span
              className="flex size-8 items-center justify-center rounded-full bg-[var(--charla-yellow)] text-[var(--charla-navy)] sm:size-9"
              aria-hidden
            >
              <BadgeDollarSign className="size-4 sm:size-[18px]" strokeWidth={2} />
            </span>
            <span className="charla-eyebrow text-xs text-[var(--charla-black)] sm:text-sm">Pricing</span>
          </div>
          <h2
            id="pricing-heading"
            className="charla-heading-xl mb-4 text-balance text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--charla-black)]"
          >
            <span className="text-[var(--charla-navy)]">Choose the plan</span> that works for you
          </h2>
          <p className="charla-body mx-auto mb-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--charla-black)]/85 sm:text-lg">
            Live one-to-one Spanish with certified teachers. Pick a class bundle that matches your family&apos;s
            schedule and goals.
          </p>

          <ul
            className="charla-body mx-auto flex max-w-xl flex-col gap-2 text-sm text-[var(--charla-black)]/90 sm:text-base"
            role="list"
          >
            <li>1 student per teacher in the class</li>
            <li>1 on 1 — 25 min. classes</li>
          </ul>
        
        </div>

        <div className="rounded-[1.75rem] bg-white p-4 sm:rounded-[2rem] sm:p-6 lg:p-8">
          <p className="charla-body mx-auto mb-6 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--charla-black)]/80 sm:text-base">
            Most homeschool families choose the 60 or 90-class plan to give their child a full year of consistent, live
            Spanish instruction with 2–3 short 25-minute lessons per week.
          </p>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
            {plans.map((plan) => (
              <PricingCard key={plan.classesLabel} plan={plan} />
            ))}
          </div>

        </div>
          <ul
            className="mt-8 flex flex-col items-start gap-4 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-3"
            role="list"
          >
            {trustPoints.map((point) => (
              <li key={point} className="charla-body flex items-center gap-2.5 text-sm text-[var(--charla-black)] sm:text-[15px]">
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded border border-[var(--charla-black)] bg-[var(--charla-black)] text-white"
                  aria-hidden
                >
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
      </div>
    </section>
  );
}
