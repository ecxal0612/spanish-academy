import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="charla-container">
        <div className="overflow-hidden rounded-[2rem] bg-[var(--charla-button-dark)] shadow-[0_28px_60px_-24px_rgba(6,6,6,0.45)] sm:rounded-[2.5rem] lg:rounded-[3rem]">
          <div className="grid gap-6 p-5 sm:gap-8 sm:p-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:p-10 xl:p-12">
            <div className="order-2 flex flex-col justify-center gap-6 lg:order-1 lg:py-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2">
                <span
                  className="flex size-8 items-center justify-center rounded-full bg-[var(--charla-yellow)] text-[var(--charla-navy)] sm:size-9"
                  aria-hidden
                >
                  <BadgeCheck className="size-4 sm:size-[18px]" strokeWidth={2} />
                </span>
                <span className="charla-eyebrow text-xs text-white sm:text-sm">
                  Ready to begin with Charla
                </span>
              </div>

              <h2
                id="cta-heading"
                className="charla-heading-xl max-w-md text-balance text-[clamp(1.75rem,4vw,2.65rem)] leading-tight text-white"
              >
                Start your Spanish journey today
              </h2>

              <p className="charla-body max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
                Join learners of all ages building real confidence in Spanish with live teachers, flexible booking, and a
                proven path from first words to fluent conversation.
              </p>

              <div className="pt-1">
                <Link
                  href="/register"
                  className="charla-eyebrow inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-white px-8 text-sm text-[var(--charla-black)] transition-opacity hover:opacity-90 sm:h-[52px] sm:text-base"
                >
                  Start Learning Free
                </Link>
              </div>
            </div>

            <div className="order-1 relative min-h-[240px] overflow-hidden rounded-2xl sm:min-h-[280px] sm:rounded-3xl lg:order-2 lg:h-full lg:min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1649767428212-7590dbf20116?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Smiling student with a laptop, ready to learn Spanish online"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
