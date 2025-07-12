/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'

// Register the plugin
gsap.registerPlugin(ScrambleTextPlugin)

interface ScrambleTextProps {
  text: string
  className?: string
  chars?: string
  speed?: number
  duration?: number
}

export function ScrambleText({ 
  text, 
  className = '', 
  chars = "Commandoss",
  speed = 0.3,
  duration = 0.5
}: ScrambleTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const [textWidth, setTextWidth] = useState<number>(0)

  useEffect(() => {
    if (textRef.current) {
      // Create a temporary element to measure the text width
      const tempElement = document.createElement('span')
      tempElement.style.visibility = 'hidden'
      tempElement.style.position = 'absolute'
      tempElement.style.whiteSpace = 'nowrap'
      tempElement.style.font = window.getComputedStyle(textRef.current).font
      tempElement.textContent = text
      document.body.appendChild(tempElement)
      
      const width = tempElement.offsetWidth
      setTextWidth(width)
      
      document.body.removeChild(tempElement)
    }
  }, [text])

  const handleMouseEnter = () => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration,
        scrambleText: {
          text,
          chars,
          speed,
          tweenLength: false
        }
      })
    }
  }

  const handleMouseLeave = () => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration,
        scrambleText: {
          text,
          chars,
          speed,
          tweenLength: false
        }
      })
    }
  }

  return (
    <span 
      ref={textRef} 
      className={`cursor-pointer inline-block whitespace-nowrap ${className}`}
      style={{ width: textWidth > 0 ? `${textWidth}px` : 'auto' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
  )
}
