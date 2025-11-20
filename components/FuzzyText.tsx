'use client';

import React, { useState, useMemo } from 'react';

interface FuzzyTextProps {
  children: React.ReactNode;
  baseIntensity?: number;
  hoverIntensity?: number;
  enableHover?: boolean;
  className?: string;
}

export default function FuzzyText({
  children,
  baseIntensity = 0.2,
  hoverIntensity = 0.5,
  enableHover = true,
  className = '',
}: FuzzyTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const id = useMemo(() => Math.random().toString(36).substring(7), []);

  const intensity = enableHover && isHovered ? hoverIntensity : baseIntensity;

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="absolute w-0 h-0 pointer-events-none">
        <filter id={`fuzzy-${id}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={intensity}
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={intensity * 5}
          />
        </filter>
      </svg>
      <span style={{ filter: `url(#fuzzy-${id})` }} className="block">
        {children}
      </span>
    </div>
  );
}
