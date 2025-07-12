import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Welcome to CommandOSS",
  description:
    "CommandOSS is a community-driven Web3 software company, backed by Mysten Labs and pioneering innovation in the Sui ecosystem. Empowering talent and transforming the software industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
