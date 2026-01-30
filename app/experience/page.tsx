'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { MapPin, Calendar } from 'lucide-react';
import Typewriter from '@/components/typewriter';

const experience = [
  {
    title: 'Web3 Engineer',
    company: 'Nami Foundation',
    location: 'Remote',
    date: 'June 2025 - Current',
    role: 'Web3 Engineer',
    description: `Work on Web3 development across CEX integrations, native on-chain products, and protocol-level design. Focus on delivering practical, scalable solutions while staying adaptable to new ecosystems and evolving technologies.`,
    technologies: [
      'Solidity',
      'Hardhat',
      'Foundry',
      'Next.js',
      'TypeScript',
      'Redis',
      'BullMQ',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    title: 'B.E Information Systems',
    company: 'University of Information Technology - VNUHCM',
    location: '',
    date: 'Oct 2021 - May 2025',
    role: 'Student',
    description: `Pursued a Bachelor of Engineering in Information Systems with a focus on software development and blockchain technology`,
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Typewriter className="text-4xl md:text-5xl font-bold tracking-tight"
              text="experience.log"
              speed={50}
              cursor={false}
              start={true}
            />
            <Typewriter className="text-green-400 text-lg"
              text="// where I've worked"
              speed={50}
              cursor={false}
              start={true}
            />
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="border border-gray-700 bg-black/50 p-6 md:p-8 space-y-4 hover:border-green-400 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-green-400 font-semibold text-sm md:text-base">
                      {exp.title}
                    </p>
                  </div>
                  
                  <div className="text-left md:text-right space-y-2 shrink-0">
                    {exp.location && (
                      <div className="flex items-center gap-2 text-gray-400 text-sm md:justify-end">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-400 text-sm md:justify-end">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>

                {exp.technologies && (
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Key Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 text-xs border border-gray-600 text-gray-300 hover:border-green-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
