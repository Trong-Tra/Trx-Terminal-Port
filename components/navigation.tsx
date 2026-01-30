'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const links = ['home', 'products', 'research', 'experience', 'blog', 'contact'];
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getHref = (link: string) => {
    return link === 'home' ? '/' : `/${link}`;
  };

  const isActive = (link: string) => {
    const href = getHref(link);
    return pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-4 z-50">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-10">
        {/* Main navbar */}
        <div className="bg-black/60 backdrop-blur-lg rounded-full border border-gray-800/50 px-6 sm:px-8 md:px-10 flex items-center justify-between h-20 md:h-24 py-6 md:py-8 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <Link href="/" className="text-lg md:text-xl font-bold hover:text-green-400 transition-colors">
            tron.t.sol
          </Link>

          {/* Desktop navigation links - hidden on mobile */}
          <div className="hidden md:flex gap-8 md:gap-10 text-sm md:text-base">
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

          {/* Mobile menu button - visible only on mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown - visible only on mobile when open */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black/80 backdrop-blur-lg rounded-2xl border border-gray-800/50 px-6 py-4 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link}
                  href={getHref(link)}
                  onClick={closeMobileMenu}
                  className={`transition-colors py-2 text-base ${
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
      </div>
    </nav>
  );
}
