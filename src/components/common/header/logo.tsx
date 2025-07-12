import React from 'react'
import { ScrambleText } from '../scramble-text'
import Link from 'next/link'
import Image from 'next/image'

export function Logo() {
  return (
    <h1 className='font-[family-name:var(--font-orbitron)] text-2xl cursor-pointer font-bold'>
      <Link
        href={"/"}
        className='flex gap-2'
      >
        <Image
         src="/vercel.svg"
         alt='CommandOSS Logo'
         width={20}
         height={20}
         className='invert'
        />
        <ScrambleText
            text="CommandOSS" 
            className="font-[family-name:var(--font-orbitron)] text-2xl text-primary"
            chars='@#$%^&*()_+'
        />
      </Link>
    </h1>
  )
} 