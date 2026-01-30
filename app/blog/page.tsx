'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-gray-400 text-lg">no post yet</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
