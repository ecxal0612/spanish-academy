import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Providers } from "~/providers/providers";
import "~/styles/globals.css";
import { env } from "~/env";

/** Google Outfit variable (wght 100–900) — self-hosted via next/font (replaces fonts.googleapis.com embed). */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: env.NEXT_PUBLIC_APP_NAME,
  description:
    "Learn Spanish online with Charla Academy — interactive lessons, live sessions, and real teachers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className={`${outfit.className} font-sans`}>
        <Providers>{children}</Providers>
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  );
}
