import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: "TARGET HIKE — Veteran-Led Treks of India | Venture Blueprint",
  description:
    "A market-backed business plan and live platform for an off-beat trekking company across Uttarakhand, the Western Ghats and the Nilgiris — led by Special Forces veterans and Everest summiteers, teaching jungle survival and life skills.",
  openGraph: {
    title: "TARGET HIKE — Beyond the Treeline",
    description:
      "Special Forces-led trekking expeditions with jungle survival training — market intelligence, financials and the full venture blueprint.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="grain">
      <body
        className={`${display.variable} ${grotesk.variable} ${mono.variable} bg-void text-bone antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
