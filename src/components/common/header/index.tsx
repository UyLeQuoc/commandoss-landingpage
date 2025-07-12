import Link from 'next/link'
import React from 'react'

export function Header() {
  return (
    <header className='sticky top-0 w-full bg-amber-200 flex justify-between items-center p-4'>
        <h1>CommandOSS</h1>
        <nav>
          <div>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </div>
          <div>
            <Link href="#">Playground</Link>
          </div>
        </nav>
    </header>
  )
}
