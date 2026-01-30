'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ResearchModal from '@/components/research-modal';
import { research } from './research-data';
import { Calendar, User } from 'lucide-react';
import Typewriter from '@/components/typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ResearchPage() {
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null);
  const [showInPressNotice, setShowInPressNotice] = useState(false);

  const handlePublicationClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link === '#' || !link) {
      e.preventDefault();
      e.stopPropagation();
      setShowInPressNotice(true);
      setTimeout(() => setShowInPressNotice(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <Typewriter className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              text="research.md"
              speed={50}
              cursor={false}
              start={true}
            />
            <Typewriter className="text-green-400 text-sm md:text-base lg:text-lg px-2"
              text="// my contributions etched into the ledger of time"
              speed={50}
              cursor={false}
              start={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {research.map((paper, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  ease: "easeOut"
                }}
                onClick={() => setSelectedPaper(idx)}
                className="border border-gray-700 bg-black/50 p-4 md:p-6 space-y-3 md:space-y-4 hover:border-green-400 transition-all cursor-pointer group"
              >
                <div className="space-y-2 md:space-y-3">
                  <h2 className="text-base md:text-lg font-bold text-white group-hover:text-green-400 transition-colors line-clamp-2">
                    {paper.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{paper.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{paper.role}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {paper.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {paper.technologies.slice(0, 3).map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 text-xs border border-gray-600 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {paper.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{paper.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="pt-2">
                  <a
                    href={paper.publicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePublicationClick(e, paper.publicationLink);
                    }}
                    className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-green-400 text-black hover:bg-green-500 transition-colors font-bold text-sm md:text-base"
                  >
                    <span>↗</span>
                    <span className="hidden sm:inline">Read Full Publication</span>
                    <span className="sm:hidden">Read Publication</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Modal */}
          <ResearchModal
            isOpen={selectedPaper !== null}
            onClose={() => setSelectedPaper(null)}
            paper={selectedPaper !== null ? research[selectedPaper] : research[0]}
          />

          <div className="text-center text-gray-500 space-y-2 py-6 md:py-8 px-4">
            <p className="text-xs md:text-sm">// blockchain isn't just a tech, its a realm and there are a lot more to discover</p>
          </div>
        </div>
      </main>

      <Footer />

      {/* In Press Notice Modal */}
      <AnimatePresence>
        {showInPressNotice && (
          <>
            {/* Darker overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-80"
              onClick={() => setShowInPressNotice(false)}
            />
            
            {/* Notice box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-90 bg-black border-2 border-green-400 p-6 md:p-8 w-[90%] max-w-sm"
            >
              <div className="text-center space-y-4">
                <p className="text-green-400 text-2xl md:text-xl font-bold">📄</p>
                <p className="text-white font-semibold text-base md:text-lg">Publication In Press</p>
                <p className="text-gray-400 text-sm">
                  This publication is currently under review and will be available soon.
                </p>
                <button
                  onClick={() => setShowInPressNotice(false)}
                  className="mt-4 px-6 py-2 bg-green-400 text-black hover:bg-green-500 transition-colors font-bold w-full md:w-auto"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
