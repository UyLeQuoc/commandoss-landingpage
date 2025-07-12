import { VelocityScroll } from "@/components"

export const  VisionSection = () => {
    return (
      <section id="vision" className="w-full border-b-foreground/30 border-b-[0.5px]">
        <div className="flex items-center  justify-center border-b-foreground/30 border-b-[0.5px]">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="w-full h-full flex flex-col gap-4 items-stretch justify-center p-10  pr-10  border-r-[0.5px] border-r-foreground/30">
              {/* 3card */}
              <div className="relative border-[0.5px] border-foreground/30 p-10 pl-16 pb-8 pr-4">
                <h1 className="absolute top-0 left-0 bg-primary aspect-square h-10 w-10 flex justify-center items-center text-background text-2xl font-bold">1</h1>
                <div className="">
                  <h1 className="font-[family-name:var(--font-orbitron)] font-bold mb-2">Build the Future</h1>
                  <span>We craft scalable applications and infrastructure to power the next era of Web3 – from smart contracts to cross-domain protocols.</span>
                </div>
              </div>

              <div className="relative border-[0.5px] border-foreground/30 p-10 pl-16 pb-8 pr-4">
                <h1 className="absolute top-0 left-0 bg-primary aspect-square h-10 w-10 flex justify-center items-center text-background text-2xl font-bold">2</h1>
                <div className="">
                  <h1 className="font-[family-name:var(--font-orbitron)] font-bold mb-2">Empower Builders</h1>
                  <span>
                    We cultivate elite engineers through mentoring, open-source, and real-world exposure – shaping the next wave of Web3 innovators.
                  </span>
                </div>
              </div>

              <div className="relative border-[0.5px] border-foreground/30 p-10 pl-16 pb-8 pr-4">
                <h1 className="absolute top-0 left-0 bg-primary aspect-square h-10 w-10 flex justify-center items-center text-background text-2xl font-bold">3</h1>
                <div className="">
                  <h1 className="font-[family-name:var(--font-orbitron)] font-bold mb-2">Lead with Purpose</h1>
                  <span>
                    CommandOSS isn’t just building tech. We lead movements – aligning mission, community, and technology toward collective progress.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-full p-10 py-30 flex flex-col gap-8">
              <h1 className="text-xl font-[family-name:var(--font-orbitron)] text-primary">VISION</h1>
              <h1 className="text-4xl font-bold font-[family-name:var(--font-orbitron)]">
              We Don’t Build Apps. <span className="underline cursor-pointer hover:text-primary transition-colors">We Build Legacies</span>.
            </h1>
              <p className="text-lg">
                CommandOSS envisions a decentralized future where builders lead innovation — not just follow it.
                Our mission is to elevate talent, inspire community, and lead the frontier of Web3 — through purpose, not hype.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <VelocityScroll numRows={1} defaultVelocity={-5}>VISION</VelocityScroll>
        </div>
      </section>
    )
  }
  