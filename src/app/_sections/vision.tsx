"use client"

import { VelocityScroll } from "@/components"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const VisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cards = useRef<HTMLDivElement[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const section = sectionRef.current
    const cardsContainer = cardsRef.current
    const content = contentRef.current

    if (!section || !cardsContainer || !content) return

    // Sticky behavior for the cards container
    gsap.set(cardsContainer, { position: "sticky", top: "20vh" })

    // Initial state - hide all elements
    gsap.set([...cards.current, titleRef.current, subtitleRef.current, descriptionRef.current], {
      opacity: 0,
      y: 50
    })

    // Timeline for sequential animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    })

    // Animate title first
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })

    // Animate subtitle
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")

    // Animate description
    tl.to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")

    // Stagger animate the cards
    tl.to(cards.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.2")

    // Add hover animations for cards
    cards.current.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // Parallax effect for the content
    gsap.to(content, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="vision" className="w-full border-b-foreground/30 border-b-[0.5px]">
      <div className="flex items-center justify-center border-b-foreground/30 border-b-[0.5px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
          <div ref={cardsRef} className="w-full h-full flex flex-col gap-4 items-stretch justify-center p-10 pr-10 border-r-[0.5px] border-r-foreground/30">
            {/* 3card */}
            <div 
              ref={(el) => { if (el) cards.current[0] = el }}
              className="relative border-[0.5px] border-foreground/30 p-10 pl-16 pb-8 pr-4 transition-all duration-300 hover:border-primary/50 hover:bg-foreground/5"
            >
              <h1 className="absolute top-0 left-0 bg-primary aspect-square h-10 w-10 flex justify-center items-center text-background text-2xl font-bold">1</h1>
              <div className="">
                <h1 className="font-[family-name:var(--font-orbitron)] font-bold mb-2">Build the Future</h1>
                <span>We craft scalable applications and infrastructure to power the next era of Web3 – from smart contracts to cross-domain protocols.</span>
              </div>
            </div>

            <div 
              ref={(el) => { if (el) cards.current[1] = el }}
              className="relative border-[0.5px] border-foreground/30 p-10 pl-16 pb-8 pr-4 transition-all duration-300 hover:border-primary/50 hover:bg-foreground/5"
            >
              <h1 className="absolute top-0 left-0 bg-primary aspect-square h-10 w-10 flex justify-center items-center text-background text-2xl font-bold">2</h1>
              <div className="">
                <h1 className="font-[family-name:var(--font-orbitron)] font-bold mb-2">Empower Builders</h1>
                <span>
                  We cultivate elite engineers through mentoring, open-source, and real-world exposure – shaping the next wave of Web3 innovators.
                </span>
              </div>
            </div>

            <div 
              ref={(el) => { if (el) cards.current[2] = el }}
              className="relative border-[0.5px] border-foreground/30 p-10 pl-16 pb-8 pr-4 transition-all duration-300 hover:border-primary/50 hover:bg-foreground/5"
            >
              <h1 className="absolute top-0 left-0 bg-primary aspect-square h-10 w-10 flex justify-center items-center text-background text-2xl font-bold">3</h1>
              <div className="">
                <h1 className="font-[family-name:var(--font-orbitron)] font-bold mb-2">Lead with Purpose</h1>
                <span>
                  CommandOSS isn&apos;t just building tech. We lead movements – aligning mission, community, and technology toward collective progress.
                </span>
              </div>
            </div>
          </div>
          <div ref={contentRef} className="w-full h-full p-10 py-30 flex flex-col gap-8">
            <h1 ref={titleRef} className="text-xl font-[family-name:var(--font-orbitron)] text-primary">VISION</h1>
            <h1 ref={subtitleRef} className="text-4xl font-bold font-[family-name:var(--font-orbitron)]">
              We Don&apos;t Build Apps. <span className="underline cursor-pointer hover:text-primary transition-colors">We Build Legacies</span>.
            </h1>
            <p ref={descriptionRef} className="text-lg">
              CommandOSS envisions a decentralized future where builders lead innovation — not just follow it.
              Our mission is to elevate talent, inspire community, and lead the frontier of Web3 — through purpose, not hype.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll numRows={1} defaultVelocity={-5}>VISION</VelocityScroll>
      </div>
    </section>
  )
}
  