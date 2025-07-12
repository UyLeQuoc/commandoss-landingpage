"use client"

import { Footer, Header } from "@/components";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { AboutSection, CommunitySection, HeroSection, VisionSection } from "./_sections";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-manrope)]">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ExpertiseSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    }

    const panels = gsap.utils.toArray("#panels-container .panel");
    const container = containerRef.current;
    const panelsContainer = panelsRef.current;

    if (!container || !panelsContainer || panels.length === 0) return;

    const tween = gsap.to(panels, {
      x: () => -1 * (panelsContainer.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => "+=" + (panelsContainer.scrollWidth - window.innerWidth),
      },
    });

    // Navigation anchors
    document.querySelectorAll(".expertise-anchor").forEach((anchor) => {
      anchor.addEventListener("click", function (e: Event) {
        e.preventDefault();
        const target = (e.target as HTMLElement).getAttribute("data-href");
        if (!target) return;

        const targetElem = document.querySelector(target) as HTMLElement;
        if (!targetElem || !panelsContainer.isSameNode(targetElem.parentElement)) return;

        const scrollTrigger = tween.scrollTrigger;
        const totalScroll = (scrollTrigger?.end || 0) - (scrollTrigger?.start || 0);
        const totalMovement = (panels.length - 1) * targetElem.offsetWidth;
        const y = Math.round(
          (tween.scrollTrigger?.start || 0) + (targetElem.offsetLeft / totalMovement) * totalScroll
        );

        gsap.to(window, {
          scrollTo: {
            y: y,
            autoKill: false,
          },
          duration: 1,
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="expertise" className=" bg-gray-100">
      {/* Horizontal Scroll Container */}
      <div ref={containerRef} id="panels-container" className="relative">
        <div ref={panelsRef} className="flex">
          {/* Development Panel */}
          <div id="development" className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Development
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Building the future of decentralized applications on Sui blockchain
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sui Applications</h3>
                  <p className="text-gray-700 leading-relaxed">
                                         We develop cutting-edge decentralized applications that leverage Sui&apos;s high-performance blockchain technology, 
                    creating seamless user experiences and innovative solutions for the Web3 ecosystem.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Contracts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our team specializes in writing secure, efficient, and auditable smart contracts using Move language, 
                    ensuring robust and scalable blockchain solutions for complex business logic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* R&D Panel */}
          <div id="rnd" className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Research & Development
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Pushing the boundaries of technology through innovative research
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cryptography</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Advanced cryptographic research including zero-knowledge proofs, homomorphic encryption, 
                    and novel consensus mechanisms for enhanced blockchain security.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Artificial Intelligence</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    AI integration in blockchain systems, machine learning for smart contract optimization, 
                    and automated security analysis tools.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Privacy-preserving technologies, confidential computing, and user data protection 
                    solutions for decentralized applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Panel */}
          <div id="infra" className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Infrastructure
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Building the foundational technologies that power the decentralized future
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Wallets</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Secure, user-friendly wallet solutions with multi-chain support, 
                    advanced key management, and seamless integration capabilities.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Hardware Solutions</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Custom hardware for blockchain operations, secure key storage devices, 
                    and specialized mining and validation equipment.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">IoT Integration</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Internet of Things devices with blockchain connectivity, 
                    decentralized sensor networks, and automated smart contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

