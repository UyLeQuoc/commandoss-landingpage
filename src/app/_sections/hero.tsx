import { Waves } from "@/components"
import { LogoText } from "@/components/common/svg/logo-text"

export const HeroSection = () => {
    return (
      <section id="#" className=" flex flex-col h-[calc(100vh-100px)] p-4 md:p-10 lg:p-20">
        <div className="w-full relative flex-1">
          <Waves
            lineColor="#000"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
          <div className="w-full px-4 text-center">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto pt-4">
                Empowering Web3. Accelerating the Future of Sui.
            </p>
            <LogoText />
          </div>
      </section>
    )
  }