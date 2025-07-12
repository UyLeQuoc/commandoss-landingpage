import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrambleText } from '../scramble-text'

interface MobileMenuProps {
  isOpen: boolean
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        // Open menu
        gsap.to(menuRef.current, {
          height: 'auto',
          duration: 0.3,
          ease: 'power2.out'
        })
      } else {
        // Close menu
        gsap.to(menuRef.current, {
          height: 0,
          duration: 0.3,
          ease: 'power2.in'
        })
      }
    }
  }, [isOpen])

  return (
    <div
      ref={menuRef}
      className='absolute top-full left-0 w-full bg-foreground overflow-hidden'
      style={{ height: 0 }}
    >
      <nav className='flex flex-col gap-4 p-4'>
        <Link href="#about" className='text-center py-2'>
          <ScrambleText 
            text="About"
            className="font-[family-name:var(--font-orbitron)] text-lg"
            chars='@#$%^&*()_+'
          />
        </Link>
        <Link href="#vision" className='text-center py-2'>
          <ScrambleText 
            text="Vision"
            className="font-[family-name:var(--font-orbitron)] text-lg"
            chars='@#$%^&*()_+'
          />
        </Link>
        <Link href="#expertise" className='text-center py-2'>
          <ScrambleText 
            text="Expertise"
            className="font-[family-name:var(--font-orbitron)] text-lg"
            chars='@#$%^&*()_+'
          />
        </Link>
        <Link href="#community" className='text-center py-2'>
          <ScrambleText 
            text="Community"
            className="font-[family-name:var(--font-orbitron)] text-lg"
            chars='@#$%^&*()_+'
          />
        </Link>
        <div className='text-center py-2 container mx-auto px-6'>
          <Link href="#" className='font-[family-name:var(--font-orbitron)] bg-primary text-primary-foreground cursor-pointer'>
          <button className="w-full bg-primary text-white cursor-pointer px-4 py-2 rounded-md hover:bg-primary/80 transition-colors text-sm font-medium">
                Explore our work
              </button>
          </Link>
        </div>
      </nav>
    </div>
  )
} 