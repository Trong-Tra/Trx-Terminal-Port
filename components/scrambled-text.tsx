'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 0.6,
  speed = 0.5,
  scrambleChars = '!<>-_\\/[]{}—=+*^?#',
  className = '',
  style = {},
  children
}) => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const originalText = useRef<string>('');

  useEffect(() => {
    if (!textRef.current) return;
    
    // Store original text
    originalText.current = textRef.current.textContent || '';
    
    const handleMove = (e: PointerEvent) => {
      if (!textRef.current) return;
      
      const { left, top, width, height } = textRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        const progress = dist / radius;
        const text = originalText.current;
        const scrambled = text.split('').map((char, i) => {
          if (Math.random() > progress) {
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }
          return char;
        }).join('');
        
        if (textRef.current) {
          textRef.current.textContent = scrambled;
        }
      } else {
        if (textRef.current && textRef.current.textContent !== originalText.current) {
          textRef.current.textContent = originalText.current;
        }
      }
    };

    const el = textRef.current.parentElement;
    if (el) {
      el.addEventListener('pointermove', handleMove);
      return () => {
        el.removeEventListener('pointermove', handleMove);
      };
    }
  }, [radius, scrambleChars]);

  return (
    <div
      ref={textRef}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrambledText;
