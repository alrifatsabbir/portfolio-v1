import Orb from '@/components/Orb'
import React from 'react'

export default function page() {
  return (
  <div className="min-h-screen w-full relative bg-black">
    <div className="absolute inset-0 z-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 90%), #000000"}}/>
      <div className="absolute inset-0 z-50">
                <Orb hoverIntensity={1.8} rotateOnHover={true} hue={80} forceHoverState={false} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">Showcasing my projects and skills</p>
      </div>
  </div>
  )
}
