import React, { useState } from 'react'
import { Logo } from './logo'
import { DesktopNavigation } from './desktop-navigation'
import { DesktopCTA } from './desktop-cta'
import { HamburgerButton } from './hamburger-button'
import { MobileMenu } from './mobile-menu'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='sticky top-0 w-full bg-foreground text-background z-10'>
      <div className='flex justify-between items-center container mx-auto p-4'>
        <Logo />
        <DesktopNavigation />
        <DesktopCTA />
        <HamburgerButton isMenuOpen={isMenuOpen} onToggle={toggleMenu} />
        <MobileMenu isOpen={isMenuOpen} />
      </div>
    </header>
  )
}
