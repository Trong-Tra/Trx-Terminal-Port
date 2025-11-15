'use client'

import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import ProfileSection from '@/components/profile-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      <main>
        <Hero />
        <ProfileSection />
      </main>
      <Footer />
    </div>
  )
}
