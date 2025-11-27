"use client";

import dynamic from "next/dynamic";
import CurvedLoop from "@/components/CurvedLoop";
import HeroButtons from "./buttons/HeroButtons";

const Orb = dynamic(() => import("@/components/Orb"), { ssr: false });
const GlobalCursor = dynamic(() => import("@/components/GlobalCursor"), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.25), transparent 90%), #000",
        }}
      />

      <div className="absolute inset-0 pointer-events-none z-0">
        <Orb hoverIntensity={1.8} rotateOnHover={true} hue={80} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Showcasing my projects and skills
        </p>

        <HeroButtons />
      </div>

      <div className="relative z-10 px-4">
        <CurvedLoop
          marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
          speed={3}
          curveAmount={500}
          interactive={true}
        />
      </div>

      <GlobalCursor />
    </div>
  );
}
