'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { } from 'react';

export default function Navigation() {
  const links = ['home', 'products', 'research', 'experience', 'blog', 'contact'];
  const pathname = usePathname();

  const getHref = (link: string) => {
    return link === 'home' ? '/' : `/${link}`;
  };

  const isActive = (link: string) => {
    const href = getHref(link);
    return pathname === href;
  };

  // navigation is sticky; no flash behavior

  return (
  <nav className={`sticky top-4 z-50`}>
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-10">
        <div className="bg-black/60 backdrop-blur-lg rounded-full border border-gray-800/50 px-6 sm:px-8 md:px-10 flex items-center justify-between h-20 md:h-24 py-6 md:py-8 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
        <Link href="/" className="text-lg md:text-xl font-bold hover:text-green-400 transition-colors">
          tron.t.sol
        </Link>
          <div className="flex gap-8 md:gap-10 text-sm md:text-base">
          {links.map((link) => (
            <Link
              key={link}
              href={getHref(link)}
              className={`transition-colors ${
                  isActive(link)
                    ? 'text-green-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link}
            </Link>
          ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
