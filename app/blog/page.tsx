'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const posts = [
  {
    title: 'Within my first year, I made over $12,000',
    excerpt:
      'Yes, this is a flex, but hear me out. In the past year, I have actively participated in various hackathons and competitions, which has not only been a great learning experience but also financially rewarding.',
    date: 'November 19, 2025',
    readTime: '7 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              blog.md
            </h1>
            <p className="text-green-400 text-lg">
              // listen to me yapping
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="border border-gray-700 bg-black/50 p-6 hover:border-green-400 transition-colors cursor-pointer group"
              >
                <h2 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors mb-3">
                  {post.title}
                </h2>

                <p className="text-gray-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center text-gray-500 space-y-2 py-8">
            <p>// my cyber-optics aren’t wired like yours — different circuits, different ghosts.</p>
            <p className="text-xs">console.log("whatever path you run, make it one they’ll name a drink after when you're gone")</p>
          </div>

          <div className="text-center text-gray-500 space-y-2 py-8">
            <p>“You don't make a name as a cyberpunk by how you live. You're remembered by how you die.” - Lucy</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
