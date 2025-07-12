import Link from 'next/link'
import React from 'react'
import { ScrambleText } from '../scramble-text'

export function Header() {
  return (
    <header className='sticky top-0 w-full bg-amber-200 flex justify-between items-center p-4'>
        <h1 className='font-[family-name:var(--font-orbitron)] text-2xl'>
          <ScrambleText
            text="CommandOSS" 
            className="font-[family-name:var(--font-orbitron)] text-2xl"
            chars='@#$%^&*()_+'
          />
        </h1>
        <nav className='flex-1 flex gap-10 justify-center items-center'>
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
        <div>
          <Link href="#">Explore our work</Link>
        </div>
    </header>
  )
}
