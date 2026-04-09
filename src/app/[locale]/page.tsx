import { HomeHero } from "@/components/home/home-hero";
import { HomeWelcome } from "@/components/home/home-welcome";
import { HomeTwoPaths } from "@/components/home/home-two-paths";
import { HomePillars } from "@/components/home/home-pillars";
import { HomeSystemSnapshot } from "@/components/home/home-system-snapshot";
import { HomeClientOutcomes } from "@/components/home/home-client-outcomes";
import { HomeRollout } from "@/components/home/home-rollout";
import { HomeProfessionals } from "@/components/home/home-professionals";
import { FloatingDemoCta } from "@/components/home/floating-demo-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0">
      <HomeHero />
      <HomeWelcome />
      <div className="flex flex-col gap-0">
        <HomeTwoPaths />
        <HomePillars />

        <HomeSystemSnapshot />
        <HomeClientOutcomes />
        <HomeProfessionals />
        <HomeRollout />
      </div>

      {/* Sticky floating CTA — appears after scrolling past the hero */}
      <FloatingDemoCta />
    </div>
  );
}
