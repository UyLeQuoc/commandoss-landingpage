"use client"

import { Waves } from "@/components"
import { LogoText } from "@/components/common/svg/logo-text"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin()
    }

    // Initial state - elements hidden
    gsap.set([textRef.current, logoRef.current], {
      opacity: 0,
      y: 50
    })

    // Create timeline for staggered animation
    const tl = gsap.timeline({
      delay: 0.5,
      ease: "power2.out"
    })

    // Animate text first
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    })

    // Then animate logo
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.3") // Slight overlap

    // Add subtle pulse to text
    tl.to(textRef.current, {
      scale: 1.02,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    }, "+=0.5")

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} id="#" className="flex flex-col h-[calc(100vh-100px)] p-4 md:p-10 lg:p-20">
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
      <div className="w-full px-4 text-center">
        <p 
          ref={textRef}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto pt-4"
        >
          Empowering Web3. Accelerating the Future of Sui.
        </p>
        <div ref={logoRef} className="mt-8">
          <LogoText />
        </div>
      </div>
    </section>
  )
}