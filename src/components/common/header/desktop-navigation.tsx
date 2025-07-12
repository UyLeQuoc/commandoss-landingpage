"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ScrambleText } from '../scramble-text'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function DesktopNavigation() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const sections = ['#about', '#vision', '#expertise', '#community']
    
    sections.forEach(sectionId => {
      ScrollTrigger.create({
        trigger: sectionId,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => setActiveSection(sectionId),
        onEnterBack: () => setActiveSection(sectionId),
        onLeave: () => {
          // Check if we're scrolling to hero section or other non-navigation sections
          const currentScroll = window.scrollY
          const sectionElement = document.querySelector(sectionId) as HTMLElement
          if (sectionElement && currentScroll < sectionElement.offsetTop) {
            setActiveSection('')
          }
        },
        onLeaveBack: () => {
          // Check if we're scrolling to hero section or other non-navigation sections
          const currentScroll = window.scrollY
          const sectionElement = document.querySelector(sectionId) as HTMLElement
          if (sectionElement && currentScroll > sectionElement.offsetTop + sectionElement.offsetHeight) {
            setActiveSection('')
          }
        }
      })
    })

    // Add trigger for hero section to clear active state
    ScrollTrigger.create({
      trigger: 'section[id="#"]', // Hero section has id="#"
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => setActiveSection(''),
      onEnterBack: () => setActiveSection(''),
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <nav className='hidden lg:flex flex-1 gap-10 justify-center items-center'>
      <Link href="#about">
        <ScrambleText 
          text="About"
          className={`font-[family-name:var(--font-orbitron)] transition-colors ${
            activeSection === '#about' ? 'text-primary' : 'text-background'
          }`}
          chars='@#$%^&*()_+'
        />
      </Link>
      <Link href="#vision">
        <ScrambleText 
          text="Vision"
          className={`font-[family-name:var(--font-orbitron)] transition-colors ${
            activeSection === '#vision' ? 'text-primary' : 'text-background'
          }`}
          chars='@#$%^&*()_+'
        />
      </Link>
      <Link href="#expertise">
        <ScrambleText 
          text="Expertise"
          className={`font-[family-name:var(--font-orbitron)] transition-colors ${
            activeSection === '#expertise' ? 'text-primary' : 'text-background'
          }`}
          chars='@#$%^&*()_+'
        />
      </Link>
      <Link href="#community">
        <ScrambleText 
            text="Community"
            className={`font-[family-name:var(--font-orbitron)] transition-colors ${
              activeSection === '#community' ? 'text-primary' : 'text-background'
            }`}
            chars='@#$%^&*()_+'
          />
      </Link>
    </nav>
  )
} 