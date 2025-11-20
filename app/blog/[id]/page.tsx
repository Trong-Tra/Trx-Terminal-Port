import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getBlogPost } from '../blog-data';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx-components';
import fs from 'fs';
import path from 'path';

async function getMDXContent(id: string) {
  try {
    const filePath = path.join(process.cwd(), 'app', 'blog', 'posts', `${id}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');
    return source;
  } catch (error) {
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getBlogPost(id);
  const mdxSource = await getMDXContent(id);

  if (!post || !mdxSource) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Back to Blog Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>back to blog</span>
          </Link>

          {/* Blog Post Header */}
          <div className="border border-gray-700 bg-black/50 p-8 md:p-12 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm md:text-base text-gray-400 border-t border-gray-700 pt-6">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Blog Post Content */}
          <article className="border border-gray-700 bg-black/50 p-8 md:p-12">
            <MDXRemote source={mdxSource} components={mdxComponents} />
          </article>

          {/* Back to Blog Button (Bottom) */}
          <div className="pt-12 border-t border-gray-700">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>back to blog</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
