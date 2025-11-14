'use client'

import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import About from '@/components/about'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      <main>
        <Hero />
        <Stats />
      </main>
      <About />
      <Footer />
    </div>
  )
}
