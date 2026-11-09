import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Users,
  Youtube,
} from "lucide-react";
import { env } from "~/env";

const appName = env.NEXT_PUBLIC_APP_NAME;

const linkClass =
  "charla-body text-sm text-[var(--charla-text-muted)] transition-colors hover:text-[var(--charla-text-primary)]";

const columnTitleClass = "charla-eyebrow mb-4 text-sm text-[var(--charla-black)]";

const highlights = [
  {
    icon: Users,
    title: "Live certified teachers",
    body: "Practice Spanish with real instructors in every session—not pre-recorded drills.",
  },
  {
    icon: CalendarDays,
    title: "Flexible scheduling",
    body: "Choose 30-, 60-, or 90-minute classes and book slots that fit your week.",
  },
  {
    icon: FileText,
    title: "Materials included",
    body: "Download PDF lesson guides from your dashboard before each Google Meet class.",
  },
] as const;

const footerColumns = [
  {
    title: "About",
    links: [
      { href: "/#why-it-works", label: "Why Charla works" },
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#testimonials", label: "Student stories" },
      { href: "/#become-a-teacher", label: "Become a teacher" },
    ],
  },
  {
    title: "Courses",
    links: [
      { href: "/#classes", label: "All class levels" },
      { href: "/register", label: "Kids & teens" },
      { href: "/register", label: "Adults & travelers" },
      { href: "/register", label: "Business Spanish" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "mailto:support@charla.academy", label: "Contact us" },
      { href: "/#how-it-works", label: "Getting started" },
      { href: "/#pricing", label: "Plans & pricing" },
      { href: "/login", label: "Student login" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/#", label: "Terms of use" },
      { href: "/#", label: "Privacy policy" },
      { href: "/#", label: "Cookies" },
    ],
  },
] as const;

const startLinks = [
  { href: "/register", label: "Create free account", primary: true },
  { href: "/#pricing", label: "Compare lesson plans", primary: false },
  { href: "/#classes", label: "Explore course tracks", primary: false },
  { href: "/login", label: "Sign in to dashboard", primary: false },
] as const;

const socialLinks = [
  { href: "https://www.facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://www.linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.youtube.com", label: "YouTube", icon: Youtube },
  { href: "https://www.instagram.com", label: "Instagram", icon: Instagram },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-[88px] rounded-t-[2rem] bg-[var(--charla-bg-sky)] pb-10 pt-14 sm:rounded-t-3xl sm:pb-12 sm:pt-16 lg:rounded-t-[2.5rem] lg:pt-20"
    >
      <div className="charla-container flex flex-col gap-12 sm:gap-14 lg:gap-16">
        <div className="grid gap-8 rounded-[1.75rem] bg-white p-6 sm:gap-10 sm:rounded-3xl sm:p-8 lg:grid-cols-2 lg:items-center lg:p-10 xl:p-12">
          <div className="flex flex-col gap-4">
            <h2 className="charla-heading-xl text-[clamp(1.5rem,3.5vw,2.25rem)] text-[var(--charla-black)]">
              Built for real conversation
            </h2>
            <p className="charla-body max-w-lg text-base leading-relaxed text-[var(--charla-text-muted)] sm:text-lg">
              {appName} helps learners of every age speak Spanish with confidence—live teachers, clear lesson paths,
              and scheduling that adapts to you.
            </p>
          </div>

          <ul className="flex flex-col gap-4 sm:gap-5" role="list">
            {highlights.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--charla-nav-pill-bg)] text-[var(--charla-navy)]"
                  aria-hidden
                >
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="charla-eyebrow text-sm text-[var(--charla-black)]">{title}</p>
                  <p className="charla-body mt-1 text-sm leading-relaxed text-[var(--charla-text-muted)]">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-6 lg:gap-x-6 xl:gap-x-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="relative inline-flex h-10 w-[148px] items-center">
              <Image
                src="/images/charla-logo.png"
                alt={appName}
                fill
                className="object-contain object-left"
                sizes="148px"
              />
            </Link>
            <p className="charla-body mt-5 max-w-xs text-sm leading-relaxed text-[var(--charla-text-muted)]">
              Learn Spanish online with real teachers—anytime your schedule allows.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" role="list">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full bg-[var(--charla-button-dark)] text-white transition-opacity hover:opacity-90"
                    aria-label={label}
                  >
                    <Icon className="size-[18px]" strokeWidth={2} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className={columnTitleClass}>{column.title}</p>
              <ul className="flex flex-col gap-2.5" role="list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("mailto:") ? (
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Get started" className="sm:col-span-2 lg:col-span-1">
            <p className={columnTitleClass}>Get started</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {startLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={
                      link.primary
                        ? "charla-eyebrow inline-flex text-sm text-[var(--charla-black)] underline-offset-4 hover:underline"
                        : linkClass
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="charla-body border-t border-black/[0.06] pt-8 text-center text-sm text-[var(--charla-text-muted)]">
          © {year} {appName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
