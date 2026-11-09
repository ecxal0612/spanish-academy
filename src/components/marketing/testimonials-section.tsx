"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { cn } from "~/lib/utils";

const testimonials = [
  {
    quote:
      "Charla Academy helped me speak Spanish confidently within a few months. The live teachers make every session feel personal.",
    name: "Sofia",
  },
  {
    quote:
      "I booked classes around my work schedule and finally stopped translating in my head. The PDFs and Meet sessions are seamless.",
    name: "Marcus",
  },
  {
    quote:
      "Our teen improved two school grades after joining the Teens track. Teachers are patient, clear, and genuinely encouraging.",
    name: "Elena",
  },
  {
    quote:
      "As a complete beginner, I needed structure. The step-by-step path and small-group conversation classes were exactly right.",
    name: "James",
  },
  {
    quote:
      "Traveling in Latin America felt different once I could handle real conversations. Charla's method focuses on what you use daily.",
    name: "Yuki",
  },
] as const;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function TestimonialCard({
  quote,
  name,
  variant,
  className,
}: {
  quote: string;
  name: string;
  variant: "active" | "peek";
  className?: string;
}) {
  const isActive = variant === "active";
  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col justify-between rounded-3xl border border-black/[0.06] bg-white",
        isActive
          ? "min-h-[260px] shadow-[0_20px_50px_-20px_rgba(6,6,6,0.22)] sm:min-h-[280px]"
          : "pointer-events-none min-h-[200px] scale-[0.88] opacity-45 shadow-[0_8px_24px_-12px_rgba(6,6,6,0.12)] sm:min-h-[220px]",
        className,
      )}
      aria-hidden={!isActive}
    >
      <div className={cn("flex flex-1 flex-col justify-between", isActive ? "gap-8 p-8 sm:p-10" : "gap-4 p-6")}>
        <blockquote
          className={cn(
            "charla-body text-[var(--charla-black)]",
            isActive ? "text-base leading-relaxed sm:text-lg" : "line-clamp-4 text-sm leading-relaxed",
          )}
        >
          <span className="text-[var(--charla-black)]/90">&ldquo;{quote}&rdquo;</span>
        </blockquote>
        <p
          className={cn(
            "charla-eyebrow text-right text-[var(--charla-black)]",
            isActive ? "text-sm sm:text-base" : "text-xs",
          )}
        >
          {name}
        </p>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const count = testimonials.length;

  const goPrev = useCallback(() => {
    setDirection("prev");
    setIndex((i) => mod(i - 1, count));
  }, [count]);

  const goNext = useCallback(() => {
    setDirection("next");
    setIndex((i) => mod(i + 1, count));
  }, [count]);

  const active = testimonials[index]!;
  const prev = testimonials[mod(index - 1, count)]!;
  const next = testimonials[mod(index + 1, count)]!;

  return (
    <section
      id="testimonials"
      className="scroll-mt-[88px] bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="charla-container flex flex-col gap-10 sm:gap-12">
        <header className="max-w-xl text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 sm:px-4 sm:py-2">
            <span
              className="flex size-8 items-center justify-center rounded-full bg-[var(--charla-yellow)] text-[var(--charla-navy)] sm:size-9"
              aria-hidden
            >
              <MessageCircle className="size-4 sm:size-[18px]" strokeWidth={2} />
            </span>
            <span className="charla-eyebrow text-xs text-[var(--charla-black)] sm:text-sm">Testimonials</span>
          </div>
          <h2
            id="testimonials-heading"
            className="charla-heading-xl mb-4 text-balance text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--charla-black)]"
          >
            <span className="text-[var(--charla-red)]">Reviews</span> from our learners
          </h2>
          <p className="charla-body text-base leading-relaxed text-[var(--charla-black)]/80 sm:text-lg">
            Real stories from kids, teens, and adults who built confidence in Spanish with live teachers and a flexible
            schedule.
          </p>
        </header>

        <div className="relative w-full min-w-0">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-[18%] z-20 hidden size-11 cursor-pointer items-center justify-center rounded-full bg-[var(--charla-navy)] text-white shadow-md transition-opacity hover:opacity-90 sm:left-4 sm:flex sm:size-12 md:left-8 lg:left-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-5 sm:size-6" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute bottom-[18%] right-0 z-20 hidden size-11 cursor-pointer items-center justify-center rounded-full bg-[var(--charla-navy)] text-white shadow-md transition-opacity hover:opacity-90 sm:right-4 sm:flex sm:size-12 md:right-8 lg:right-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-5 sm:size-6" strokeWidth={2} />
          </button>

          <div className="overflow-hidden px-0 sm:px-14 md:px-20 lg:px-24">
            <div
              key={index}
              className={cn(
                "grid w-full grid-cols-1 items-center gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)] sm:gap-5",
                direction === "next" ? "testimonial-slide-next" : "testimonial-slide-prev",
              )}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="order-2 hidden sm:order-1 sm:block">
                <TestimonialCard quote={prev.quote} name={prev.name} variant="peek" />
              </div>

              <div className="order-1 sm:order-2">
                <TestimonialCard quote={active.quote} name={active.name} variant="active" />
              </div>

              <div className="order-3 hidden sm:block">
                <TestimonialCard quote={next.quote} name={next.name} variant="peek" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={goPrev}
              className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-[var(--charla-navy)] text-white transition-opacity hover:opacity-90"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-[var(--charla-navy)] text-white transition-opacity hover:opacity-90"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-start sm:justify-end">
          <Link
            href="/register"
            className="charla-eyebrow inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--charla-button-dark)] px-8 text-sm text-white transition-opacity hover:opacity-90 sm:h-[52px] sm:w-auto sm:text-base"
          >
            Start Learning for Free
          </Link>
        </div>
      </div>
    </section>
  );
}
