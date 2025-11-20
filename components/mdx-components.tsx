import Image from 'next/image';
import { ReactNode } from 'react';

// Custom components for MDX content

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-green-400 font-bold">{children}</span>;
}

export function CodeBlock({ children, language }: { children: ReactNode; language?: string }) {
  return (
    <div className="my-6 border border-gray-700 bg-black/80 rounded">
      {language && (
        <div className="px-4 py-2 border-b border-gray-700 text-xs text-gray-400">
          {language}
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-green-400 text-sm font-mono">{children}</code>
      </pre>
    </div>
  );
}

export function TerminalLog({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 border border-gray-700 bg-black/90 rounded p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-gray-400">terminal</span>
      </div>
      <pre className="text-green-400 text-sm font-mono overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function Callout({ children, type = 'info' }: { children: ReactNode; type?: 'info' | 'warning' | 'success' }) {
  const colors = {
    info: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    warning: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400',
    success: 'border-green-500/30 bg-green-500/10 text-green-400',
  };

  return (
    <div className={`my-6 border-l-4 p-4 ${colors[type]}`}>
      {children}
    </div>
  );
}

export function BlogImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8">
      <div className="border border-gray-700 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={630}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-gray-400 text-center mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Custom MDX components mapping
export const mdxComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-white mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">{children}</p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-none space-y-2 my-6">{children}</ul>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="text-gray-300 flex items-start gap-3">
      <span className="text-green-400 mt-1">→</span>
      <span className="flex-1">{children}</span>
    </li>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="px-2 py-1 bg-gray-800 text-green-400 rounded text-sm font-mono">
      {children}
    </code>
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-green-400 pl-4 py-2 my-6 italic text-gray-400">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a
      href={href}
      className="text-green-400 hover:text-green-300 underline transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  // Custom components
  Highlight,
  CodeBlock,
  TerminalLog,
  Callout,
  BlogImage,
};
