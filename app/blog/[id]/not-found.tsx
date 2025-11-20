'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h1 className="text-6xl font-bold text-green-400">404</h1>
          <h2 className="text-2xl font-bold">Blog Post Not Found</h2>
          <p className="text-gray-400">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>back to blog</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
