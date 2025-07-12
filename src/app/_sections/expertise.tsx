import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export const ExpertiseSection = () => {
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
            <div id="development" className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                  Our Work(Not completed UI)
                </h2>
              </div>
            </div>
  
            {/* R&D Panel */}
            <div id="rnd" className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                  Research & Development
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                  Pushing the boundaries of technology through innovative research
                </p>
              </div>
            </div>
  
            {/* Infrastructure Panel */}
            <div id="infra" className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                  Infrastructure
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                  Building the foundational technologies that power the decentralized future
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  