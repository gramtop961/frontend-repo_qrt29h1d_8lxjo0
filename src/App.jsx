import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Offerings from './components/Offerings'
import Customization from './components/Customization'
import Gallery from './components/Gallery'
import Download from './components/Download'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between">
          <a href="#home" className="text-white font-extrabold tracking-wide text-lg">STORIIC</a>
          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#features" className="hover:text-white">What We Offer</a>
            <a href="#customize" className="hover:text-white">Customize</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#download" className="hover:text-white">App</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
        </div>
      </header>

      <main className="pt-0">
        <Hero />
        <About />
        <Offerings />
        <Customization />
        <Gallery />
        <Download />
        <FAQ />
      </main>

      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex items-center justify-between">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} House of Storiic — Portfolio Demo</p>
          <a href="#home" className="text-sm text-white/70 hover:text-white">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
