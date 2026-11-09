import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { cn } from "~/lib/utils";

type CourseCardConfig = {
  badge: string;
  title: string;
  cta: string;
  href: string;
  featured?: boolean;
  image?: { src: string; alt: string };
  bgVar?: `--charla-${"yellow" | "red" | "orange" | "light-blue" | "lime"}`;
  layoutClass: string;
};

const courses: CourseCardConfig[] = [
  {
    badge: "Kids · Ages 6–12",
    title: "Playful Spanish through games, stories, and patient teachers who keep young learners motivated.",
    cta: "Start Kids Program",
    href: "/register",
    featured: true,
    image: {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      alt: "Children learning together in a bright classroom",
    },
    bgVar: "--charla-orange",
    layoutClass: "md:col-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    badge: "Teens · Starter",
    title: "Foundations for middle and high school students who want clear structure and speaking practice.",
    cta: "Start Teens",
    href: "/register",
    bgVar: "--charla-yellow",
    layoutClass: "lg:col-start-2 lg:row-start-1",
  },
  {
    badge: "Teens · Advanced",
    title: "Culture, debate, and real topics that help teens speak Spanish with confidence.",
    cta: "Explore Teens Track",
    href: "/register",
    bgVar: "--charla-orange",
    layoutClass: "lg:col-start-2 lg:row-start-2",
  },
  {
    badge: "Adults · Conversation",
    title: "Everyday Spanish for travel, relocation, and connecting with people in real situations.",
    cta: "Start Adults",
    href: "/register",
    bgVar: "--charla-light-blue",
    layoutClass: "lg:col-start-3 lg:row-start-1",
  },
  {
    badge: "Adults · Career",
    title: "Meetings, presentations, and professional vocabulary tailored to your industry.",
    cta: "Start Professional Track",
    href: "/register",
    bgVar: "--charla-lime",
    layoutClass: "lg:col-start-3 lg:row-start-2",
  },
];

function CourseCard({ course }: { course: CourseCardConfig }) {
  const isFeatured = course.featured === true;

  return (
    <article
      className={cn(
        "group flex h-full min-h-[220px] flex-col justify-between gap-6 rounded-3xl border border-black/[0.08] p-7 transition-[background-color,box-shadow,border-color] duration-300 sm:min-h-[240px] sm:p-8",
        course.layoutClass,
        isFeatured
          ? "bg-[var(--charla-red)] shadow-[0_14px_44px_-16px_rgba(229,156,240,0.45)]"
          : "bg-white shadow-[0_8px_30px_-14px_rgba(6,6,6,0.1)] hover:border-transparent hover:bg-[var(--course-hover-bg)] hover:shadow-[var(--course-hover-shadow)]",
      )}
      style={
        !isFeatured && course.bgVar
          ? ({
              "--course-hover-bg": `var(${course.bgVar})`,
              "--course-hover-shadow": `0 18px 44px -14px color-mix(in srgb, var(${course.bgVar}) 50%, rgba(6, 6, 6, 0.12))`,
            } as CSSProperties)
          : undefined
      }
    >
      <div className="flex flex-col gap-5">
        <span
          className={cn(
            "charla-eyebrow inline-flex w-fit rounded-full border px-3 py-1 text-xs sm:text-sm",
            isFeatured
              ? "border-[var(--charla-black)]/10 bg-white/60 text-[var(--charla-black)]"
              : "border-black/[0.08] bg-[var(--charla-nav-pill-bg)] text-[var(--charla-black)]/80 group-hover:border-[var(--charla-black)]/10 group-hover:bg-white/50",
          )}
        >
          {course.badge}
        </span>

        <h3
          className={cn(
            "charla-eyebrow text-balance text-lg leading-snug sm:text-xl",
            "text-[var(--charla-black)]",
          )}
        >
          {course.title}
        </h3>
        {isFeatured && course.image ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <Image
              src={course.image.src}
              alt={course.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        ) : null}
      </div>

      <Link
        href={course.href}
        className={cn(
          "charla-eyebrow inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm transition-colors sm:text-[15px]",
          isFeatured
            ? "bg-[var(--charla-button-dark)] text-white hover:opacity-90"
            : "border border-black/15 bg-white text-[var(--charla-black)]/80 group-hover:border-[var(--charla-black)]/20 group-hover:bg-[var(--charla-button-dark)] group-hover:text-white",
        )}
      >
        {course.cta}
      </Link>
    </article>
  );
}

export function CoursesSection() {
  return (
    <section
      id="classes"
      className="scroll-mt-[88px] bg-[var(--charla-bg-sky)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="courses-heading"
    >
      <div className="charla-container">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 sm:px-4 sm:py-2">
            <span
              className="flex size-8 items-center justify-center rounded-full bg-[var(--charla-yellow)] text-[var(--charla-navy)] sm:size-9"
              aria-hidden
            >
              <GraduationCap className="size-4 sm:size-[18px]" strokeWidth={2} />
            </span>
            <span className="charla-eyebrow text-xs text-[var(--charla-black)] sm:text-sm">Course levels</span>
          </div>
          <h2
            id="courses-heading"
            className="charla-heading-xl mb-4 text-balance text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--charla-black)]"
          >
            <span className="text-[var(--charla-navy)]">Spanish courses </span>
            for every age and level
          </h2>
          <p className="charla-body mx-auto max-w-2xl text-pretty text-base leading-relaxed text-[var(--charla-black)]/85 sm:text-lg">
            Choose a track for kids, teens, or adults and move step-by-step with live teachers and materials matched to
            your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          {courses.map((course) => (
            <CourseCard key={course.badge} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
