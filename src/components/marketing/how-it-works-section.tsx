import Image from "next/image";
import Link from "next/link";
import { Check, ListOrdered } from "lucide-react";

const steps = [
  {
    title: "Create an Account",
    body:
      "Choose your class length and how many sessions you want, then follow the guided steps to create your account before you complete payment.",
    cta: "Create it here!",
    href: "/register",
  },
  {
    title: "Schedule Your Classes",
    body:
      "Log in, review your teacher’s open slots, and book classes that match your routine—whether you prefer mornings, evenings, or weekends.",
    cta: "Learn more about availability here.",
    href: "/#classes",
  },
  {
    title: "Connect to Your Certified Teacher",
    body:
      "Join each lesson on Google Meet with your certified teacher and download your free PDF class materials anytime from your dashboard.",
    cta: "Learn more about classes",
    href: "/#classes",
  },
] as const;

const highlights = [
  "Secure checkout and instant confirmation",
  "Calendar sync–friendly booking",
  "PDF materials included with every session",
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-[88px] bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="charla-container">
        <div className="overflow-hidden rounded-[1.25rem] bg-[var(--charla-navy)] shadow-[0_24px_50px_-20px_rgba(47,88,79,0.45)] sm:rounded-3xl">
          <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
            {/* Visual — matches right column height on large screens */}
            <div className="flex min-h-[280px] flex-col p-5 sm:min-h-[320px] lg:h-full lg:min-h-0">
              <div className="relative min-h-[240px] w-full flex-1 overflow-hidden rounded-2xl bg-[var(--charla-yellow)] shadow-inner lg:min-h-0">
                <Image
                  src="https://images.unsplash.com/photo-1588702547954-4800ead296ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Student using a smartphone to learn online"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="flex flex-col justify-center gap-8 p-5">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/35 bg-white/5 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
                <span
                  className="flex size-8 items-center justify-center rounded-full bg-[var(--charla-yellow)] text-[var(--charla-navy)] sm:size-9"
                  aria-hidden
                >
                  <ListOrdered className="size-4 sm:size-[18px]" strokeWidth={2} />
                </span>
                <span className="charla-eyebrow text-xs text-white sm:text-sm">How It Works</span>
              </div>

              <div className="space-y-3">
                <h2
                  id="how-it-works-heading"
                  className="charla-heading-xl text-balance text-[clamp(1.65rem,4vw,2.35rem)] text-white"
                >
                  <span className="text-[var(--charla-red)]">Learn Spanish </span> 
                  anytime, anywhere
                </h2>
                <p className="charla-body max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
                  Three simple steps—from signup to your first live session. Take your lessons on the go and build a
                  rhythm that fits your life.
                </p>
              </div>

              <ul className="grid gap-2 sm:grid-cols-1" role="list">
                {highlights.map((item) => (
                  <li key={item} className="charla-body flex items-start gap-2.5 text-sm text-white/90 sm:text-[15px]">
                    <span
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-white/40 bg-white/10 text-white"
                      aria-hidden
                    >
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <ol className="flex flex-col gap-8 border-t border-white/20 pt-8" role="list">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="charla-eyebrow text-sm text-[var(--charla-yellow)] sm:text-base">
                        {index + 1}.
                      </span>
                      <h3 className="charla-heading-xl text-lg text-white sm:text-xl">{step.title}</h3>
                    </div>
                    <p className="charla-body max-w-lg text-sm leading-relaxed text-white/85 sm:text-[15px]">{step.body}</p>
                    <Link
                      href={step.href}
                      className="charla-eyebrow inline-flex w-fit rounded-full border border-white/45 bg-transparent px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10 sm:py-3"
                    >
                      {step.cta}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
