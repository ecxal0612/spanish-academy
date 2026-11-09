import Image from "next/image";
import type { CSSProperties } from "react";
import { Briefcase } from "lucide-react";

const cards = [
  {
    title: "Learn from Real Situations",
    description:
      "Short, cinematic lessons inspired by everyday life, voiced by native speakers so you hear Spanish as it is really spoken.",
    image:
      "https://images.unsplash.com/photo-1758874572656-990c2f9ad129?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "People collaborating around a table with laptops",
    hoverBgVar: "--charla-yellow" as const,
  },
  {
    title: "Practice What You Learn",
    description:
      "Speaking, grammar, and vocabulary activities with clear feedback so mistakes become progress—not frustration.",
    image:
      "https://images.unsplash.com/photo-1623613406591-6f0ffe5b605c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Student studying with books in a bright library",
    hoverBgVar: "--charla-red" as const,
  },
  {
    title: "Learn with Live Teachers",
    description:
      "Join live sessions, ask questions in real time, and get guidance from teachers who adapt to your goals.",
    image:
      "https://images.unsplash.com/photo-1560483647-6a049edeef29?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Person smiling while working on a laptop",
    hoverBgVar: "--charla-orange" as const,
  },
  {
    title: "Track Your Progress",
    description:
      "Structured milestones and simple insights so you always know what you have mastered and what comes next.",
    image:
      "https://images.unsplash.com/photo-1651796699702-7d5a8b04209f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Students working together with notes and a tablet",
    hoverBgVar: "--charla-light-blue" as const,
  },
] as const;

export function WhyItWorksSection() {
  return (
    <section
      id="why-it-works"
      className="scroll-mt-[88px] bg-[var(--charla-bg-sky)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="why-it-works-heading"
    >
      <div className="charla-container">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 sm:px-4 sm:py-2">
            <span
              className="flex size-8 items-center justify-center rounded-full bg-[var(--charla-yellow)] text-[var(--charla-navy)] sm:size-9"
              aria-hidden
            >
              <Briefcase className="size-4 sm:size-[18px]" strokeWidth={2} />
            </span>
            <span className="charla-eyebrow text-xs text-[var(--charla-black)] sm:text-sm">Why It Works</span>
          </div>
          <h2
            id="why-it-works-heading"
            className="charla-heading-xl mb-4 text-balance text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--charla-black)]"
          >
            A Simple and Smart and Smart Way to Learn Spanish
          </h2>
          <p className="charla-body mx-auto max-w-2xl text-pretty text-base leading-relaxed text-[var(--charla-black)]/85 sm:text-lg">
            Our method combines real-life context, interactive practice, and live teacher support to give you a complete,
            immersive learning experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col overflow-hidden rounded-[1.25rem] border-0 bg-white shadow-none outline-none transition-[background-color,box-shadow] duration-300 ease-out hover:bg-[var(--card-hover-bg)] hover:shadow-[var(--card-hover-shadow)] sm:rounded-3xl"
              style={
                {
                  "--card-hover-bg": `var(${card.hoverBgVar})`,
                  "--card-hover-shadow": `0 22px 48px -12px color-mix(in srgb, var(${card.hoverBgVar}) 55%, rgba(6, 6, 6, 0.12))`,
                } as CSSProperties
              }
            >
              <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden bg-[var(--charla-nav-pill-bg)] transition-[background-color] duration-300 group-hover:bg-transparent">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative flex flex-1 flex-col gap-3 bg-transparent p-5 sm:p-6">
                <h3 className="charla-heading-xl text-lg leading-snug text-[var(--charla-black)] sm:text-xl">
                  {card.title}
                </h3>
                <p className="charla-body text-sm leading-relaxed text-[var(--charla-black)]/90 sm:text-[15px]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
