import { Button } from '@/components/ui'
import Link from 'next/link'
import React from 'react'

export function DesktopCTA() {
  return (
    <Link href="#expertise">
        <Button className='hidden lg:block bg-primary text-primary-foreground font-[family-name:var(--font-orbitron)] cursor-pointer'>
            Explore our work
        </Button>
    </Link>
  )
} 