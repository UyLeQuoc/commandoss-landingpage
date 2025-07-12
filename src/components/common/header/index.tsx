'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(SplitText)
}

export function Header() {
  const menuBtnRef = useRef<HTMLParagraphElement>(null)
  const closeBtnRef = useRef<HTMLParagraphElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const featuredImageRef = useRef<HTMLDivElement>(null)
  const brandLogoRef = useRef<HTMLAnchorElement>(null)
  const primaryNavRef = useRef<HTMLDivElement>(null)
  const overlayBrandRef = useRef<HTMLAnchorElement>(null)
  const overlayCloseRef = useRef<HTMLParagraphElement>(null)
  const navLinksRef = useRef<NodeListOf<Element> | null>(null)
  const footerItemsRef = useRef<NodeListOf<Element> | null>(null)
  const titleLinesRef = useRef<NodeListOf<Element> | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Create custom ease for animations
    const slideEase = "cubic-bezier(0.65,0.05,0.36,1)"

    // Initialize elements
    const menuBtn = menuBtnRef.current
    const closeBtn = closeBtnRef.current
    const overlay = overlayRef.current
    const featuredImage = featuredImageRef.current
    const brandLogo = brandLogoRef.current
    const primaryNav = primaryNavRef.current
    const overlayBrand = overlayBrandRef.current
    const overlayClose = overlayCloseRef.current
    const navLinks = document.querySelectorAll(".nav-link")
    const footerItems = document.querySelectorAll(
      ".overlay-footer .text-reveal p, .overlay-footer .text-reveal a"
    )
    const titleLines = document.querySelectorAll(
      ".quote-section .title-line span"
    )

    // Store refs for later use
    navLinksRef.current = navLinks
    footerItemsRef.current = footerItems
    titleLinesRef.current = titleLines

    if (!overlay || !featuredImage || !brandLogo || !primaryNav || !overlayBrand || !overlayClose) return

    let isAnimating = false

    // Initial setup
    gsap.set(overlay, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      pointerEvents: "none"
    })

    gsap.set(featuredImage, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
    })

    gsap.set([overlayBrand, overlayClose], {
      y: "100%"
    })

    gsap.set(".nav-link", {
      y: "100%"
    })

    gsap.set(footerItems, {
      y: "100%"
    })

    // Open menu function
    function openMenu() {
      if (isAnimating) return
      isAnimating = true

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating = false
        }
      })

      // Hide the title lines with staggered animation
      tl.to(titleLines, {
        y: "100%",
        duration: 0.64,
        stagger: 0.075,
        ease: slideEase
      })

      tl.to(
        [brandLogo, menuBtn],
        {
          y: "-100%",
          duration: 0.64,
          stagger: 0.1,
          ease: slideEase,
          onComplete: () => {
            if (primaryNav) {
              primaryNav.style.pointerEvents = "none"
            }
            gsap.set([brandLogo, menuBtn], {
              y: "100%"
            })
          }
        },
        "-=0.4"
      )

      tl.to(
        overlay,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.64,
          ease: slideEase,
          onStart: () => {
            if (overlay) {
              overlay.style.pointerEvents = "all"
            }
          }
        },
        "-=0.4"
      )

      // First let the overlay animation complete, then animate the image from bottom to top
      tl.fromTo(
        featuredImage,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.64,
          ease: slideEase
        },
        "-=0.2"
      )

      tl.to(
        [overlayBrand, overlayClose],
        {
          y: "0%",
          duration: 0.64,
          stagger: 0.1,
          ease: slideEase
        },
        "-=0.3"
      )

      tl.to(
        ".nav-link",
        {
          y: "0%",
          duration: 0.64,
          stagger: 0.075,
          ease: slideEase
        },
        "<"
      )

      tl.to(
        footerItems,
        {
          y: "0%",
          duration: 0.64,
          stagger: 0.1,
          ease: slideEase
        },
        "<"
      )
    }

    // Close menu function
    function closeMenu() {
      if (isAnimating) return
      isAnimating = true

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating = false
        }
      })

      tl.to([overlayBrand, overlayClose], {
        y: "-100%",
        duration: 0.64,
        stagger: 0.1,
        ease: slideEase
      })

      tl.to(
        ".nav-link",
        {
          y: "-100%",
          duration: 0.64,
          stagger: 0.05,
          ease: slideEase
        },
        "<"
      )

      // Make sure all footer items are animated, including social links
      tl.to(
        footerItems,
        {
          y: "-100%",
          duration: 0.64,
          stagger: 0.05,
          ease: slideEase
        },
        "<"
      )

      // Animate the featured image to close from top to bottom
      tl.to(
        featuredImage,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 0.64,
          ease: slideEase
        },
        "-=0.64"
      )

      tl.to(
        overlay,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.64,
          ease: slideEase,
          onComplete: () => {
            if (overlay) {
              overlay.style.pointerEvents = "none"
              gsap.set(overlay, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
              })
            }
            gsap.set(featuredImage, {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
            })
            gsap.set([overlayBrand, overlayClose], {
              y: "100%"
            })
            gsap.set(".nav-link", {
              y: "100%"
            })
            gsap.set(footerItems, {
              y: "100%"
            })
          }
        },
        "+=0.2"
      )

      tl.to(
        [brandLogo, menuBtn],
        {
          y: "0%",
          duration: 0.64,
          stagger: 0.1,
          ease: slideEase,
          onStart: () => {
            if (primaryNav) {
              primaryNav.style.pointerEvents = "all"
            }
          }
        },
        "-=0.3"
      )

      // Show the title lines with staggered animation
      tl.to(
        titleLines,
        {
          y: "0%",
          duration: 0.64,
          stagger: 0.075,
          ease: slideEase
        },
        "-=0.4"
      )
    }

    // Event listeners
    if (menuBtn) {
      menuBtn.addEventListener("click", openMenu)
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", closeMenu)
    }

    // Menu item click handlers
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        closeMenu()
      })
    })
  }, [])

  return (
    <header className="site-header">
      <nav className="primary-nav">
        <div className="grid">
          <div className="brand">
            <div className="text-reveal">
              <a href="#" ref={brandLogoRef}>Summer Days Studio</a>
            </div>
          </div>
          <div className="menu-toggle">
            <div className="text-reveal">
              <p ref={menuBtnRef} id="menu-btn">Menu</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="overlay" ref={overlayRef} id="overlay">
        <div className="featured-image" ref={featuredImageRef} id="featured-image"></div>
        <div className="overlay-header">
          <div className="grid">
            <div className="overlay-brand">
              <div className="text-reveal">
                <a href="#" ref={overlayBrandRef}>Summer Days Studio</a>
              </div>
            </div>
            <div className="close-toggle">
              <div className="text-reveal">
                <p ref={closeBtnRef} id="close-btn">Close</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="nav-menu">
          <div className="nav-menu-inner">
            <div className="nav-item">
              <div className="text-reveal">
                <a href="#" className="nav-link shift-effect">Projects</a>
              </div>
            </div>
            <div className="nav-item">
              <div className="text-reveal">
                <a href="#" className="nav-link shift-effect">Features</a>
              </div>
            </div>
            <div className="nav-item">
              <div className="text-reveal">
                <a href="#" className="nav-link shift-effect">Typography</a>
              </div>
            </div>
            <div className="nav-item">
              <div className="text-reveal">
                <a href="#" className="nav-link shift-effect">Photography</a>
              </div>
            </div>
            <div className="nav-item">
              <div className="text-reveal">
                <a href="#" className="nav-link shift-effect">About</a>
              </div>
            </div>
          </div>
        </nav>
        <footer className="overlay-footer">
          <div className="grid">
            <div className="copyright">
              <div className="text-reveal">
                <p>&copy; Summer Days Studio 2025</p>
              </div>
            </div>
            <div className="social-links">
              <div className="text-reveal">
                <a href="#">VSCO</a>
              </div>
              <div className="text-reveal">
                <a href="#">Instagram</a>
              </div>
              <div className="text-reveal">
                <a href="#">X</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </header>
  )
}
