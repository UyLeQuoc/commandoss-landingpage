"use client"

import { Footer, Header } from "@/components";
import { AboutSection, CommunitySection, ExpertiseSection, HeroSection, VisionSection } from "./_sections";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-manrope)]">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ExpertiseSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

