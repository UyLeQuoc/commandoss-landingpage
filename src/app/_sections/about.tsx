"use client"

import { VelocityScroll } from "@/components"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import Image from "next/image"

export const AboutSection = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  // Default image
  const defaultImage = {
    src: "https://ml.globenewswire.com/Resource/Download/caa9fb08-0a6b-4998-9213-04317b9833b9",
    alt: "CommandOSS - Web3 Innovation"
  }

  const [currentImage, setCurrentImage] = useState(defaultImage)



  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin()
    }

    // Initial state - image visible with first default image
    gsap.set(imageRef.current, {
      opacity: 1,
      scale: 1,
      y: 0
    })



    // Hover animations for different text elements
    const hoverElements = {
      'a-movement': {
        src: '/images/movement.gif',
        alt: 'Movement Animation'
      },
      'mysten-labs': {
        src: 'https://ml.globenewswire.com/Resource/Download/caa9fb08-0a6b-4998-9213-04317b9833b9',
        alt: 'Mysten Labs Logo'
      },
      'nfts': {
        src: '/images/sui.png',
        alt: 'NFTs Animation'
      },
      'cryptography': {
        src: '/images/sui-3d.webp',
        alt: 'Cryptography Animation'
      },
      'hardware': {
        src: '/images/cpu.png',
        alt: 'Hardware Animation'
      },
      'ai': {
        src: '/images/ai.webp',
        alt: 'AI Animation'
      },
      'defi': {
        src: '/images/sui-3d.webp',
        alt: 'DeFi Animation'
      }
    }

    // Add hover listeners to each element
    Object.entries(hoverElements).forEach(([id, imageData]) => {
      const element = document.getElementById(id)
      if (!element) return

      element.addEventListener('mouseenter', () => {
        // Update current image
        setCurrentImage(imageData)
        
        // Animate image in
        gsap.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        })
      })

      element.addEventListener('mouseleave', () => {
        // Return to default image
        setCurrentImage(defaultImage)
      })
    })

    return () => {
      // Cleanup event listeners
      Object.keys(hoverElements).forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          element.removeEventListener('mouseenter', () => {})
          element.removeEventListener('mouseleave', () => {})
        }
      })
    }
  }, [])

  return (
    <section id="about" className="items-center justify-center bg-foreground text-background">
      <div className="border-b-white/30 border-b-[0.5px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="w-full h-full border-r-[0.5px] border-r-white/30 p-10 py-30 pr-10 flex flex-col gap-8">
            <h1 className="text-xl font-[family-name:var(--font-orbitron)] text-primary">ABOUT</h1>
            <h1 className="text-4xl font-bold font-[family-name:var(--font-orbitron)]">
              Not Just a Company. <span id="a-movement" className="underline cursor-pointer hover:text-primary transition-colors">A Movement</span>.
            </h1>
            <p className="text-lg">
              Backed by <span id="mysten-labs" className="hover:text-foreground cursor-pointer transition-colors bg-primary px-1 py-[0px]">Mysten Labs</span>, CommandOSS is a mission-driven software powerhouse advancing the Sui ecosystem.

              We build across <span id="nfts" className="hover:text-foreground cursor-pointer transition-colors bg-primary px-1 py-[0px]">NFTs</span>, <span id="cryptography" className="hover:text-foreground cursor-pointer transition-colors bg-primary px-1 py-[0px]">cryptography</span>, <span id="hardware" className="hover:text-foreground cursor-pointer transition-colors bg-primary px-1 py-[0px]">hardware</span>, <span id="ai" className="hover:text-foreground cursor-pointer transition-colors bg-primary px-1 py-[0px]">AI</span>, and <span id="defi" className="hover:text-foreground cursor-pointer transition-colors bg-primary px-1 py-[0px]">DeFi</span> – unlocking Web3 innovation at the edge.

              Our mission is clear: nurture elite builders, empower communities, and drive the transformation of Web3.
            </p>
          </div>
          <div ref={imageContainerRef} className="w-full h-full flex flex-col items-center justify-center p-10">
            <Image
              ref={imageRef}
              src={currentImage.src}
              width={400}
              height={400}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll numRows={1}>COMMANDOSS</VelocityScroll>
      </div>
    </section>
  )
}