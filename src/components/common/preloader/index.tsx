'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { SplitText } from 'gsap/SplitText'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrambleTextPlugin, SplitText)
}

export function PreLoader() {
  const preloaderRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Create custom ease for animations
    const slideEase = "cubic-bezier(0.65,0.05,0.36,1)"

    // Initialize elements
    const preloaderEl = preloaderRef.current
    const contentEl = contentRef.current

    if (!preloaderEl || !contentEl) return

    // Special characters for scramble effect
    const specialChars = "▪"

    // Store original text content for spans that will be scrambled
    const originalTexts: { [key: number]: string } = {}
    document
      .querySelectorAll('.terminal-line span[data-scramble="true"]')
      .forEach(function (span, index) {
        const originalText = span.textContent || ''
        originalTexts[index] = originalText
        span.setAttribute("data-original-text", originalText)
        span.textContent = ""
      })

    // Set initial state - make sure terminal lines are initially hidden
    gsap.set(".terminal-line", {
      opacity: 0
    })

    // Function to update progress bar
    function updateProgress(percent: number) {
      const progressBar = progressBarRef.current
      if (progressBar) {
        progressBar.style.transition = "none"
        progressBar.style.width = percent + "%"
      }
    }

    // Terminal preloader animation
    function animateTerminalPreloader() {
      // Reset progress to 0%
      updateProgress(0)

      // Create main timeline for text animation
      const tl = gsap.timeline({
        onComplete: function () {
          // Once preloader is done, reveal the content
          revealContent()
        }
      })

      // Total animation duration in seconds
      const totalDuration = 6

      // Get all terminal lines and sort them by top position
      const allLines = Array.from(document.querySelectorAll(".terminal-line"))
      allLines.sort((a, b) => {
        const aTop = parseInt((a as HTMLElement).style.top)
        const bTop = parseInt((b as HTMLElement).style.top)
        return aTop - bTop
      })

      // Create a timeline for text reveal that's synced with progress
      const textRevealTl = gsap.timeline()

      // Process each line for text reveal
      allLines.forEach((line, lineIndex) => {
        // Set base opacity - alternating between full and reduced opacity
        const baseOpacity = lineIndex % 2 === 0 ? 1 : 0.7

        // Calculate when this line should appear based on total duration
        // Distribute evenly across the first 80% of the animation
        const timePoint = (lineIndex / allLines.length) * (totalDuration * 0.8)

        // Reveal the line
        textRevealTl.to(
          line,
          {
            opacity: baseOpacity,
            duration: 0.3
          },
          timePoint
        )

        // Get all spans in this line that should be scrambled
        const scrambleSpans = line.querySelectorAll('span[data-scramble="true"]')

        // Apply scramble effect to each span
        scrambleSpans.forEach((span) => {
          const originalText =
            span.getAttribute("data-original-text") || span.textContent || ""

          // Add scramble effect slightly after the line appears
          textRevealTl.to(
            span,
            {
              duration: 0.8,
              scrambleText: {
                text: originalText,
                chars: specialChars,
                revealDelay: 0,
                speed: 0.3
              },
              ease: "none"
            },
            timePoint + 0.1
          )
        })
      })

      // Add the text reveal timeline to the main timeline
      tl.add(textRevealTl, 0)

      // Add periodic scramble effects throughout the animation
      for (let i = 0; i < 3; i++) {
        const randomTime = 1 + i * 1.5 // Spread out the glitch effects
        tl.call(() => {
          const glitchTl = gsap.timeline()

          // Select random elements to glitch
          const allScrambleSpans = document.querySelectorAll(
            'span[data-scramble="true"]'
          )
          const randomSpans: Element[] = []

          // Select 3-5 random spans to glitch
          const numToGlitch = 3 + Math.floor(Math.random() * 3)
          for (let j = 0; j < numToGlitch; j++) {
            const randomIndex = Math.floor(
              Math.random() * allScrambleSpans.length
            )
            randomSpans.push(allScrambleSpans[randomIndex])
          }

          // Apply glitch effect to selected spans
          randomSpans.forEach((span) => {
            const text =
              span.textContent || span.getAttribute("data-original-text") || ""

            // Quick scramble for glitch effect
            glitchTl.to(
              span,
              {
                duration: 0.2,
                scrambleText: {
                  text: text,
                  chars: specialChars,
                  revealDelay: 0,
                  speed: 0.1
                },
                ease: "none",
                repeat: 1
              },
              Math.random() * 0.5
            )
          })
        }, [], randomTime)
      }

      // Add staggered disappearing effect at the end
      const disappearTl = gsap.timeline()

      // Add staggered disappear effect for each line
      disappearTl.to(allLines, {
        opacity: 0,
        duration: 0.2,
        stagger: 0.1, // 0.1 second between each line disappearing
        ease: "power1.in"
      })

      // Add the disappear timeline near the end of the main timeline
      tl.add(disappearTl, totalDuration - 1)

      // Set up progress bar animation that's synced with the main timeline
      tl.eventCallback("onUpdate", function () {
        const progress = Math.min(99, tl.progress() * 100)
        updateProgress(progress)
      })

      // Force final update to 100% at the end
      tl.call(
        function () {
          updateProgress(100)
        },
        [],
        totalDuration - 0.5
      )

      return tl
    }

    // Reveal content by transitioning the preloader out
    function revealContent() {
      const titleLines = document.querySelectorAll(
        ".quote-section .title-line span"
      )

      // Create timeline for content reveal
      const revealTl = gsap.timeline()

      // Clip the preloader from bottom to top (similar to menu animation)
      revealTl.to(preloaderEl, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.64,
        ease: slideEase,
        onComplete: () => {
          // Remove preloader after animation
          if (preloaderEl) {
            preloaderEl.style.display = "none"
          }
        }
      })

      // Show the content
      revealTl.to(
        contentEl,
        {
          opacity: 1,
          visibility: "visible",
          duration: 0.3
        },
        "-=0.3"
      )

      // Initialize SplitText after content is visible
      revealTl.call(() => {
        // Initialize SplitText on nav links
        const navLinks = document.querySelectorAll(".nav-link")
        navLinks.forEach((link) => {
          // Create new SplitText instance with new features
          const splitLink = new SplitText(link, {
            type: "chars",
            charsClass: "char",
            position: "relative",
            linesClass: "line",
            deepSlice: true,
            propIndex: true
          })

          // Store the SplitText instance on the element
          ;(link as HTMLElement & { _splitText?: SplitText })._splitText = splitLink

          // Setup hover effect
          link.addEventListener("mouseenter", () => {
            gsap.to(splitLink.chars, {
              x: (i: number) => `${0.5 + i * 0.1}em`,
              duration: 0.64,
              ease: slideEase,
              stagger: {
                each: 0.015,
                from: "start"
              }
            })
          })

          link.addEventListener("mouseleave", () => {
            gsap.to(splitLink.chars, {
              x: 0,
              duration: 0.64,
              ease: slideEase,
              stagger: {
                each: 0.01,
                from: "end"
              }
            })
          })
        })
      })

      // Animate the title lines
      revealTl.to(
        titleLines,
        {
          y: "0%",
          duration: 0.64,
          stagger: 0.1,
          ease: slideEase
        },
        "-=0.2"
      )
    }

    // Setup initial preloader state
    gsap.set(preloaderEl, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    })

    // Set initial state for title lines
    const titleLines = document.querySelectorAll(
      ".quote-section .title-line span"
    )
    gsap.set(titleLines, {
      y: "100%"
    })

    // Start terminal preloader animation
    animateTerminalPreloader()
  }, [])

  return (
    <>
      <div className="preloader" ref={preloaderRef}>
        <div className="terminal-preloader">
          <div className="border-top">
            <span>Dimensional Gateway</span>
            <span>Traversal Initiated</span>
          </div>

          <div className="terminal-container">
            {/* First block of text - before progress bar */}
            <div className="terminal-line" style={{ top: "0px" }}>
              <span className="faded" data-scramble="true">Dimensional Coordinates: Alpha/Omega/Prime</span>
              <span className="highlight" data-scramble="true">Coordinates Locked</span>
            </div>

            <div className="terminal-line" style={{ top: "30px" }}>
              <span className="faded" data-scramble="true">Initiate Quantum Calibration</span>
              <span className="highlight" data-scramble="true">Singularity Detected</span>
            </div>

            <div className="terminal-line" style={{ top: "60px" }}>
              <span className="highlight" data-scramble="true">Beginning Tesseract Unfolding</span>
            </div>

            <div className="terminal-line" style={{ top: "90px" }}>
              <span className="highlight" data-scramble="true">Hyperdimensional Matrices Aligned</span>
            </div>

            {/* Progress bar with additional text */}
            <div className="progress-line">
              <span className="progress-label">Traversing</span>
              <div className="progress-container">
                <div className="progress-bar" ref={progressBarRef}></div>
              </div>
              <span className="highlight" style={{ marginLeft: "10px" }} data-scramble="true">Dimensional Shift</span>
            </div>

            {/* Second block of text - after progress bar */}
            <div className="terminal-line" style={{ top: "165px" }}>
              <span className="highlight" data-scramble="true">Quantum Entanglement Stabilized</span>
            </div>

            <div className="terminal-line" style={{ top: "195px" }}>
              <span className="highlight" data-scramble="true">Cosmic Strings Vibrating in Harmony</span>
            </div>

            <div className="terminal-line" style={{ top: "225px" }}>
              <span className="highlight" data-scramble="true">Wormhole Aperture Expanding</span>
            </div>

            <div className="terminal-line" style={{ top: "255px" }}>
              <span className="highlight" data-scramble="true">Dimensional Gateway Stabilizing</span>
            </div>

            <div className="terminal-line" style={{ top: "285px" }}>
              <span className="highlight" data-scramble="true">Reality Parameters Reconfigured</span>
            </div>

            {/* Background faded lines */}
            <div className="terminal-line" style={{ top: "15px" }}>
              <span className="faded" data-scramble="true">Quantum Fluctuation Nominal</span>
            </div>

            <div className="terminal-line" style={{ top: "45px" }}>
              <span className="faded" data-scramble="true">Initiating Spacetime Fold</span>
            </div>

            <div className="terminal-line" style={{ top: "75px" }}>
              <span className="faded" data-scramble="true">Scanning Parallel Realities</span>
            </div>

            <div className="terminal-line" style={{ top: "105px" }}>
              <span className="faded" data-scramble="true">Analyzing Dark Matter Density</span>
            </div>

            <div className="terminal-line" style={{ top: "180px" }}>
              <span className="faded" data-scramble="true">Processing Gravitational Waves</span>
            </div>

            <div className="terminal-line" style={{ top: "210px" }}>
              <span className="faded" data-scramble="true">Calibrating Temporal Displacement</span>
            </div>

            <div className="terminal-line" style={{ top: "240px" }}>
              <span className="faded" data-scramble="true">Evaluating Dimensional Resonance</span>
            </div>

            <div className="terminal-line" style={{ top: "270px" }}>
              <span className="faded" data-scramble="true">Stabilizing Quantum Foam</span>
            </div>
          </div>

          <div className="border-bottom">
            <span>Traversal Sequence Complete</span>
            <span>Dimensional Gateway Open</span>
          </div>
        </div>
      </div>

      <div className="content-container" ref={contentRef}>
        <div className="background-image"></div>
        <div className="quote-section">
          <h2>
            <span className="title-line"><span>Creativity transcends space</span></span>
            <span className="title-line"><span>weaving quantum threads</span></span>
            <span className="title-line"><span>into new realities</span></span>
            <span className="title-line"><span>beyond dimensions.</span></span>
          </h2>
        </div>

        <div className="scroll-text">Scroll</div>
      </div>
    </>
  )
}
