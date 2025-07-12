import { Footer, Header, PreLoader } from "@/components/common";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <PreLoader />
      <Header />
      <Footer />
    </div>
  );
}
