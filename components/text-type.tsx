'use client';

import { useState, useEffect } from 'react';

interface TextTypeProps {
    text: string[];
    typingSpeed?: number;
    pauseDuration?: number;
    showCursor?: boolean;
    cursorCharacter?: string;
    className?: string;
    loop?: boolean;
}

export default function TextType({
    text,
    typingSpeed = 85,
    pauseDuration = 1500,
    showCursor = true,
    cursorCharacter = '|',
    className = '',
    loop = true,
}: TextTypeProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentFullText = text[currentTextIndex];

        if (isPaused) {
            const timeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setDisplayedText((prev) => currentFullText.slice(0, prev.length + 1));

                if (displayedText === currentFullText) {
                    if (!loop && currentTextIndex === text.length - 1) {
                        return; // Stop if not looping and at the last string
                    }
                    setIsPaused(true);
                }
            } else {
                // Deleting
                setDisplayedText((prev) => prev.slice(0, -1));

                if (displayedText === '') {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % text.length);
                }
            }
        }, isDeleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, isPaused, text, currentTextIndex, typingSpeed, pauseDuration, loop]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && (
                <span className="animate-pulse ml-1">{cursorCharacter}</span>
            )}
        </span>
    );
}
