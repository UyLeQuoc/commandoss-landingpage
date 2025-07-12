"use client"

import { Footer, Header, Waves } from "@/components";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-manrope)]">
      <Header />
      <main className="flex flex-col gap-[32px]">
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

const HeroSection = () => {
  return (
    <section id="#" className=" flex flex-col h-[calc(100vh-100px)]">
      <div className="w-full relative flex-1">
        <Waves
          lineColor="#000"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
              <div className="w-full px-4 py-16 text-center">
          <h1 className="font-[family-name:var(--font-orbitron)] font-extrabold text-6xl  leading-none tracking-tight">
            COMMANDOSS
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            CommandOSS – Forging the next generation of software pioneers.
          </p>
        </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100">
        About section
    </section>
  )
}

const  VisionSection = () => {
  return (
    <section id="vision" className="min-h-screen flex items-center justify-center bg-gray-100">
        Vision section
    </section>
  )
}

const  ExpertiseSection = () => {
  return (
    <section id="expertise" className="min-h-screen flex items-center justify-center bg-gray-100">
        Expertise section
    </section>
  )
}

const CommunitySection = () => {
  return (
    <section id="community" className="min-h-screen flex items-center justify-center bg-gray-100">
        Community section
    </section>
  )
}