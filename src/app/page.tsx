import { HeroSection } from "~/components/marketing/hero-section";
import { CoursesSection } from "~/components/marketing/courses-section";
import { CtaSection } from "~/components/marketing/cta-section";
import { HowItWorksSection } from "~/components/marketing/how-it-works-section";
import { PricingSection } from "~/components/marketing/pricing-section";
import { SiteFooter } from "~/components/marketing/site-footer";
import { SiteHeader } from "~/components/marketing/site-header";
import { TestimonialsSection } from "~/components/marketing/testimonials-section";
import { WhyItWorksSection } from "~/components/marketing/why-it-works-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--charla-surface)]">
      <SiteHeader />
      <main>
        <HeroSection />
        <WhyItWorksSection />
        <HowItWorksSection />
        <CoursesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
