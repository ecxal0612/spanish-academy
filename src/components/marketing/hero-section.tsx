import Image from "next/image";
import Link from "next/link";
import { BookOpen, GraduationCap, MonitorPlay } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-[var(--charla-bg-page)] pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24 lg:pt-8">
      <div className="charla-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex max-w-xl flex-col gap-6 lg:max-w-none">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-[var(--charla-yellow)] text-[var(--charla-navy)] sm:size-9">
                <BookOpen className="size-4 sm:size-[18px]" strokeWidth={2} aria-hidden />
              </span>
              <span className="charla-eyebrow text-xs text-[var(--charla-black)] sm:text-sm">
                Spanish courses for every level &amp; goal
              </span>
            </div>

            <h1 className="charla-heading-xl text-[clamp(2rem,5vw,3.25rem)] text-[var(--charla-navy)]">
              <span className="text-[var(--charla-black)]">Learn </span>
              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Spanish</span>
              </span>
              <br />
              <span className="text-[var(--charla-red)]">Online </span>
              <span className="text-[var(--charla-black)]">with Real Teachers</span>
            </h1>

            <p className="charla-body max-w-[34ch] text-base leading-relaxed text-[var(--charla-black)] sm:max-w-prose sm:text-lg">
              Improve your speaking, grammar, and confidence with interactive lessons, live sessions, and a learning
              method based on real-life situations.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/register"
                className="charla-eyebrow inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-[var(--charla-button-dark)] px-7 text-sm text-white transition-opacity hover:opacity-90 sm:h-[52px] sm:text-base"
              >
                Start Learning for Free
              </Link>
              <Link
                href="/#how-it-works"
                className="charla-eyebrow inline-flex h-12 min-w-[200px] items-center justify-center rounded-full border border-black/15 bg-white px-7 text-sm text-[var(--charla-text-primary)] transition-colors hover:bg-[var(--charla-nav-pill-bg)] sm:h-[52px] sm:text-base"
              >
                Explore the Method
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[var(--charla-light-blue)] shadow-[0_24px_60px_-12px_rgba(47,88,79,0.22)] sm:aspect-[5/6] sm:rounded-[2.25rem] lg:aspect-[536/628]">
              <Image
                src="https://images.unsplash.com/photo-1649768370771-aef354bd4636?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Student learning online with a laptop, smiling"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Floating badges */}
            <div
              className="absolute -left-2 top-[10%] flex size-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-black/5 sm:left-[-20px] sm:size-14 md:size-16"
              aria-hidden
            >
              <MonitorPlay className="size-6 text-[var(--charla-red)] sm:size-7" strokeWidth={1.75} />
            </div>

            <div className="absolute bottom-[12%] left-0 max-w-[min(58vw,240px)] sm:bottom-[20px] sm:left-[20px] sm:max-w-[260px]">
              <div className="charla-eyebrow flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3 py-2 text-[11px] text-[var(--charla-text-primary)] sm:px-4 sm:py-2.5 sm:text-xs">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--charla-yellow)] text-[var(--charla-navy)] sm:size-8">
                  <MonitorPlay className="size-3.5 sm:size-4" strokeWidth={2} />
                </span>
                Learn anytime, on any device
              </div>
            </div>

            <div
              className="absolute bottom-[6%] right-2 flex size-14 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/5 sm:bottom-[28%] sm:right-[-20px] sm:size-16"
              aria-hidden
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-[var(--charla-light-blue)] from-[var(--charla-orange)] to-[var(--charla-light-blue)] sm:size-12">
                <GraduationCap className="size-6 text-[var(--charla-navy)] sm:size-7" strokeWidth={1.75} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
