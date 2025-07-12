import React, { useState } from 'react'
import Link from "next/link"
import { Twitter } from "lucide-react"
import { Logo } from '../header/logo'
import { Button, Input } from '@/components/ui'

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // Handle email submission here
  }
  return (
    <footer className="bg-foreground text-background">
      <div className="flex relative">
      {/* Left Section - Subscription */}
      <div className="flex-1 bg-primary flex flex-col justify-center items-center p-8 lg:p-16 text-foreground">
        <div className="max-w-md w-full space-y-8">
          <div className="space-y-6">
            <p className="text-sm tracking-[0.2em] uppercase font-bold">SUBSCRIPTION</p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Stay up to date</h1>

            <p className="text-lg leading-relaxed font-bold">
              Be the first to know about the last updates.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-0">
            <Input
              type="email"
              placeholder="Email Address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-gray-900 text-white placeholder:text-foreground placeholder:font-bold rounded-r-none focus:ring-0 focus:border-gray-900 h-12"
              required
            />
            <Button
              type="submit"
              className="border border-foreground text-background bg-foreground font-bold px-8 rounded-l-none h-12"
            >
              JOIN
            </Button>
          </form>
        </div>
      </div>

      {/* Right Section - Partners */}
      <div className="flex-1 bg-foreground flex flex-col justify-center items-center p-8 lg:p-16 relative border-b-[0.5px] border-b-white/10">
        <div className="max-w-md w-full space-y-12">
          <div className="space-y-6">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase">CAREER</p>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-white text-xl font-bold tracking-wide">BE A PART OF COMMANDOSS</h2>
                <Button className="w-full bg-primary text-white font-medium py-3 cursor-pointer">
                  Explore our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
          <div className="relative w-20 h-20">
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <span className="text-pribg-primary text-2xl font-bold">C</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_10s_ease-in-out_infinite]">
              <svg className="w-24 h-24 -rotate-12" viewBox="0 0 100 100">
                <path id="circle" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[6px] fill-white font-medium">
                  <textPath href="#circle" startOffset="0%">
                    COMMANDOSS • COMMANDOSS • COMMANDOSS • JOIN THE COMMUNITY •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>


    </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Logo and Buttons Section */}
          <div className="lg:col-span-3 relative">
            <div className="flex items-center gap-2 mb-6">
              <Logo />
            </div>
            <div className="space-y-3">
              <button className="w-full bg-primary text-white cursor-pointer px-4 py-2 rounded-md hover:bg-primary/80 transition-colors text-sm font-medium">
                Explore our work
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Overview Column */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-300">OVERVIEW</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Lorem ipsum
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Lorem ipsum
                  </Link>
                </li>
              </ul>
            </div>

            {/* Network Column */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-300">NETWORK</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Sui Faucet
                  </Link>
                </li>
              </ul>
            </div>

            {/* Others Column */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-300">
                OTHERS
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Other Links Column */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">
                    VISION
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">
                    EXPERISE
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">
                    COMMUNITY
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="lg:col-span-2 flex lg:justify-end">
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-gray-400 text-sm">© Copyright {new Date().getFullYear()} CommandOSS</p>
        </div>
      </div>
    </footer>
  )
}
