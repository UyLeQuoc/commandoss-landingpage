import React, { useRef } from 'react'
import { gsap } from 'gsap'

interface HamburgerButtonProps {
  isMenuOpen: boolean
  onToggle: () => void
}

export function HamburgerButton({ isMenuOpen, onToggle }: HamburgerButtonProps) {
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    onToggle()
    
    if (!isMenuOpen) {
      // Animate hamburger to X
      gsap.to(line1Ref.current, {
        rotation: 45,
        y: 6,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(line2Ref.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out'
      })
      gsap.to(line3Ref.current, {
        rotation: -45,
        y: -6,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else {
      // Animate X back to hamburger
      gsap.to(line1Ref.current, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(line2Ref.current, {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
        delay: 0.1
      })
      gsap.to(line3Ref.current, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  return (
    <button
      ref={hamburgerRef}
      onClick={handleClick}
      className='lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer'
      aria-label="Toggle menu"
    >
      <div
        ref={line1Ref}
        className='w-6 h-0.5 bg-background transition-all duration-300'
      />
      <div
        ref={line2Ref}
        className='w-6 h-0.5 bg-background transition-all duration-300'
      />
      <div
        ref={line3Ref}
        className='w-6 h-0.5 bg-background transition-all duration-300'
      />
    </button>
  )
} 