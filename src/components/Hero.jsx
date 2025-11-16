import React from 'react'
import Spline from '@splinetool/react-spline'

const AppBadges = () => (
  <div className="flex items-center gap-4 mt-6">
    <a
      href="#download"
      aria-label="Get it on Google Play"
      className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white hover:opacity-90 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 mr-2" fill="currentColor"><path d="M325.3 234.3 104.8 12.5c-5.2-5.1-12.1-8-19.3-8H72.4C53.9 4.5 39 20.3 39 39v434c0 18.7 14.9 34.5 33.4 34.5h12.9c7.3 0 14.3-2.9 19.5-8.1l220.5-221.8c9.9-10 9.9-26.3 0-36.3zM367.5 195 312 139.6l-28.6 28.7 55.4 55.3L367.5 195zm97.3 61L394.7 256l70.1 70.1c9.9 10 9.9 26.3 0 36.3l-44.6 44.8L320.3 307.1l-28.7 28.7 99.7 99.6c17.1 17.1 45 17.1 62.2 0l51.2-51.3c17.1-17 17.1-44.8 0-61.9L464.8 256l39.9-40.1c17.1-17.1 17.1-44.9 0-62l-51.2-51.3c-17.2-17.1-45.1-17.1-62.2 0l-99.7 99.6 28.7 28.7L420.2 146l44.6 44.8c9.9 10 9.9 26.3 0 36.3z"/></svg>
      <span className="text-sm font-semibold">Google Play</span>
    </a>
    <a
      href="#download"
      aria-label="Download on the App Store"
      className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white hover:opacity-90 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5 mr-2" fill="currentColor"><path d="M318.7 268.7c-.3-37.6 16.5-65.9 50.2-86.8-18.9-27.4-47.4-42.5-84.8-45.1-35.6-2.5-74 20.7-87.9 20.7-14.5 0-48-19.9-74.4-19.9-54.4 0-108.8 41.3-108.8 124.4 0 26.3 4.9 53.6 14.7 81.8 13.1 37.6 60.6 129.7 109.9 128.2 25.9-.6 44.1-18.4 77.8-18.4 32.9 0 49.6 18.4 77.4 18.4 49.6-.7 93.7-87.8 106.5-125.4-67.4-31.7-70.6-92.2-70.6-77.9zM260.8 87.8C287.5 55.3 282.8 26 281.9 20c-22.5 1.5-48.5 15.4-64.1 33.6-17.1 19.6-27.9 43.7-25.7 71.7 25.1 1.9 49.5-12.2 68.7-37.5z"/></svg>
      <span className="text-sm font-semibold">App Store</span>
    </a>
  </div>
)

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden flex items-stretch" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-10 py-20">
        <div className="flex flex-col justify-center text-white">
          <p className="uppercase tracking-widest text-red-400/90 text-xs md:text-sm mb-4">House of Storiic</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Streetwear Reimagined.
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-xl">
            Luxury–street inspired apparel with personalization features — showcased through clean visuals and interactive demos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#features" className="px-5 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors">Explore Features</a>
            <a href="#customize" className="px-5 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur hover:bg-white/20 text-white font-semibold transition-colors">View Customization Demo</a>
          </div>

          <AppBadges />
        </div>

        <div className="hidden lg:block" aria-hidden>
          <div className="h-full w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
            <div className="h-full w-full rounded-xl bg-gradient-to-br from-red-500/30 via-orange-400/20 to-amber-300/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
