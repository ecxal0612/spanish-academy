"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "~/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#classes", label: "Classes" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#become-a-teacher", label: "Become a Teacher" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-[var(--charla-bg-page)]/95 backdrop-blur-md">
      <div className="charla-container flex h-[72px] items-center justify-between gap-3 lg:h-[80px]">
        <Link
          href="/"
          className="relative inline-flex h-9 w-[120px] shrink-0 items-center sm:h-10 sm:w-[140px]"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/charla-logo.png"
            alt="Charla Academy"
            fill
            className="object-contain object-left"
            sizes="140px"
            priority
          />
        </Link>

        <nav className="hidden lg:flex lg:flex-1 lg:justify-center">
          <ul
            className="inline-flex items-center gap-0.5 rounded-full border border-black/[0.04] bg-[var(--charla-nav-pill-bg)] p-1"
            role="list"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "charla-body relative inline-flex rounded-full px-3 py-2 text-sm text-[var(--charla-text-muted)] transition-colors hover:text-[var(--charla-text-primary)] md:px-4",
                    item.label === "Home" &&
                      isHome &&
                      "bg-[var(--charla-nav-pill-active-bg)] font-medium text-[var(--charla-text-primary)] shadow-sm",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex lg:gap-3">
          <Link
            href="/login"
            className="charla-eyebrow inline-flex h-10 items-center justify-center rounded-full border border-black/15 bg-white px-5 text-sm text-[var(--charla-text-primary)] transition-colors hover:bg-[var(--charla-nav-pill-bg)]"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="charla-eyebrow inline-flex h-10 items-center justify-center rounded-full bg-[var(--charla-button-dark)] px-5 text-sm text-white transition-opacity hover:opacity-90"
          >
            Create Account
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--charla-text-primary)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-black/5 bg-[var(--charla-bg-page)] lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="charla-container flex flex-col gap-4 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "charla-body block rounded-xl px-3 py-2.5 text-[var(--charla-text-primary)]",
                    item.label === "Home" && isHome && "bg-white shadow-sm",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-t border-black/5 pt-4">
            <Link
              href="/login"
              className="charla-eyebrow inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white text-sm text-[var(--charla-text-primary)] transition-colors hover:bg-[var(--charla-nav-pill-bg)]"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="charla-eyebrow inline-flex h-11 items-center justify-center rounded-full bg-[var(--charla-button-dark)] text-sm text-white transition-opacity hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
