import Link from 'next/link'
import React from 'react'
import { ScrambleText } from '../scramble-text'

export function DesktopNavigation() {
  return (
    <nav className='hidden lg:flex flex-1 gap-10 justify-center items-center'>
      <Link href="#about">
        <ScrambleText 
          text="About"
          className="font-[family-name:var(--font-orbitron)]"
          chars='@#$%^&*()_+'
        />
      </Link>
      <Link href="#vision">
        <ScrambleText 
          text="Vision"
          className="font-[family-name:var(--font-orbitron)]"
          chars='@#$%^&*()_+'
        />
      </Link>
      <Link href="#expertise">
        <ScrambleText 
          text="Expertise"
          className="font-[family-name:var(--font-orbitron)]"
          chars='@#$%^&*()_+'
        />
      </Link>
      <Link href="#community">
        <ScrambleText 
            text="Community"
            className="font-[family-name:var(--font-orbitron)]"
            chars='@#$%^&*()_+'
          />
      </Link>
    </nav>
  )
} 