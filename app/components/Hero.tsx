'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeroBg from '../../public/assets/og-home.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroBg}
          alt="Leadzoro hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_14%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-blue-900/40 to-blue-900/68" />
      </div>

      <div className="relative z-10 container">
        <div className="mt-70 md:mt-80 mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center backdrop-blur-md bg-white/10 border border-white/25 rounded-xl p-5 md:p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">50+</h3>
            <p className="text-white/80 text-sm md:text-base mt-1">Brands Trust Us</p>
          </div>
          <div className="text-center backdrop-blur-md bg-white/10 border border-white/25 rounded-xl p-5 md:p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">100%</h3>
            <p className="text-white/80 text-sm md:text-base mt-1">Transparent</p>
          </div>
          <div className="text-center backdrop-blur-md bg-white/10 border border-white/25 rounded-xl p-5 md:p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">100+</h3>
            <p className="text-white/80 text-sm md:text-base mt-1">Strategies</p>
          </div>
          <div className="text-center backdrop-blur-md bg-white/10 border border-white/25 rounded-xl p-5 md:p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">24/7</h3>
            <p className="text-white/80 text-sm md:text-base mt-1">Support</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link
            href="/contact-us"
            className="bg-transparent border border-yellow-400/80 text-yellow-300 px-4 py-2 rounded-full text-xs font-semibold hover:bg-transparent transition"
          >
            Get Started →
          </Link>
          <Link
            href="/meta-ads-services"
            className="bg-transparent border border-white/50 text-white px-4 py-2 rounded-full text-xs hover:bg-transparent transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero