'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  paper: {
    title: string;
    date: string;
    role: string;
    description: string;
    achievements: string[];
    technologies: string[];
    publicationLink: string;
    images?: {
      src: string;
      caption: string;
    }[];
    personalThoughts?: string;
  };
}

export default function ResearchModal({ isOpen, onClose, paper }: ResearchModalProps) {
  const [showInPressNotice, setShowInPressNotice] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePublicationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (paper.publicationLink === '#' || !paper.publicationLink) {
      e.preventDefault();
      setShowInPressNotice(true);
      setTimeout(() => setShowInPressNotice(false), 3000);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-60"
            />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="fixed inset-0 z-70 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-gray-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto font-mono scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
              style={{ overscrollBehavior: 'contain' }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-black border-b border-gray-700 p-6 flex items-start justify-between z-10">
                <div className="flex-1 pr-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {paper.title}
                  </h2>
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{paper.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{paper.role}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-green-400 font-semibold mb-2">// Abstract</p>
                  <p className="text-gray-300 leading-relaxed">
                    {paper.description}
                  </p>
                </div>

                {/* Images Section */}
                {paper.images && paper.images.length > 0 && (
                  <div>
                    <p className="text-green-400 font-semibold mb-3">// Results & Evaluation</p>
                    <div className="space-y-4">
                      {/* First image - full width */}
                      {paper.images[0] && (
                        <div className="space-y-3">
                          <div className="relative w-full h-64 md:h-80 bg-black/50">
                            <Image
                              src={paper.images[0].src}
                              alt={paper.images[0].caption}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-sm text-gray-400 italic text-center">
                            {paper.images[0].caption}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-green-400 font-semibold mb-3">// Key Achievements</p>
                  <ul className="space-y-2">
                    {paper.achievements.map((achievement, achIdx) => (
                      <li
                        key={achIdx}
                        className="text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-green-400 mt-1">→</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                    {/* images - horizontal grid */}
                      {paper.images && paper.images.length > 1 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {paper.images.slice(1).map((image, idx) => (
                            <div key={idx + 1} className="space-y-2">
                              <div className="relative w-full h-48 bg-black/50">
                                <Image
                                  src={image.src}
                                  alt={image.caption}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <p className="text-xs text-gray-400 italic text-center">
                                {image.caption}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                </div>

                <div>
                  <p className="text-green-400 font-semibold mb-3">// Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-xs border border-gray-600 text-gray-300 hover:border-green-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Personal Thoughts Section */}
                {paper.personalThoughts && (
                  <div>
                    <div className="border-l-2 border-green-400 pl-4 mt-8">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {paper.personalThoughts}
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-green-400 mb-2">
                    Is my work helpful to you? Consider citing my publication!
                  </p>
                </div>

                <div className="pt-4 flex gap-4">
                  <a
                    href={paper.publicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handlePublicationClick}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black hover:bg-green-500 transition-colors font-bold"
                  >
                    <span>↗</span>
                    Read Full Publication
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-90 bg-black border-2 border-green-400 p-8 max-w-sm"
          >
            <div className="text-center space-y-4">
              <p className="text-green-400 text-xl font-bold">📄</p>
              <p className="text-white font-semibold">Publication In Press</p>
              <p className="text-gray-400 text-sm">
                This publication is currently under review and will be available soon.
              </p>
              <button
                onClick={() => setShowInPressNotice(false)}
                className="mt-4 px-6 py-2 bg-green-400 text-black hover:bg-green-500 transition-colors font-bold"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
