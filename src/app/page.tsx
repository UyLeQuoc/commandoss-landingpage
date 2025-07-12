"use client"

import { Footer, Header } from "@/components";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-manrope)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-amber-200">
        <section>
          <h1>C</h1>
          <h1>O</h1>
          <h1>M</h1>
          <h1>M</h1>
          <h1>A</h1>
          <h1>D</h1>
          <h1>O</h1>
          <h1>S</h1>
          <h1>S</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
}
