import React from 'react'
import { ScrambleText } from '../scramble-text'
import Link from 'next/link'
import { Terminal } from 'lucide-react'

export function Logo() {
  return (
    <h1 className='font-[family-name:var(--font-orbitron)] text-2xl cursor-pointer font-bold'>
      <Link
        href={"/"}
        className='flex gap-2'
      >
        {/* <Image
         src="/vercel.svg"
         alt='CommandOSS Logo'
         width={20}
         height={20}
         className='invert'
        /> */}
        <Terminal className='w-10' />
        <ScrambleText
            text="CommandOSS" 
            className="font-[family-name:var(--font-orbitron)] text-2xl text-primary"
            chars='@#$%^&*()_+'
        />
      </Link>
    </h1>
  )
} 