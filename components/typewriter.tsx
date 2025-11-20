'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string | string[];
    speed?: number;
    initialDelay?: number;
    waitTime?: number;
    cursor?: boolean;
    className?: string;
    start?: boolean;
}

export default function Typewriter({
    text,
    speed = 50,
    initialDelay = 0,
    waitTime = 0,
    cursor = true,
    className = '',
    start = true,
}: TypewriterProps) {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    const lines = Array.isArray(text) ? text : [text];

    useEffect(() => {
        if (!start) return;
        const timeout = setTimeout(() => {
            setIsStarted(true);
        }, initialDelay);
        return () => clearTimeout(timeout);
    }, [initialDelay, start]);

    useEffect(() => {
        if (!isStarted) return;

        if (currentLineIndex >= lines.length) return;

        const currentLine = lines[currentLineIndex];

        if (currentCharIndex < currentLine.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines((prev) => {
                    const newLines = [...prev];
                    if (newLines[currentLineIndex] === undefined) {
                        newLines[currentLineIndex] = '';
                    }
                    newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
                    return newLines;
                });
                setCurrentCharIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            // Line finished
            if (waitTime > 0 && currentLineIndex < lines.length - 1) {
                const timeout = setTimeout(() => {
                    setCurrentLineIndex((prev) => prev + 1);
                    setCurrentCharIndex(0);
                }, waitTime);
                return () => clearTimeout(timeout);
            } else {
                setCurrentLineIndex((prev) => prev + 1);
                setCurrentCharIndex(0);
            }
        }
    }, [isStarted, currentLineIndex, currentCharIndex, lines, speed, waitTime]);

    return (
        <div className={className}>
            {lines.map((line, index) => (
                <div key={index} className="inline-block w-full">
                    <span>{displayedLines[index] || ''}</span>
                    {cursor && index === currentLineIndex && currentLineIndex < lines.length && (
                        <span className="animate-cursor-blink ml-1">|</span>
                    )}
                    {cursor && index === lines.length - 1 && currentLineIndex >= lines.length && (
                        <span className="animate-cursor-blink ml-1">|</span>
                    )}
                </div>
            ))}
        </div>
    );
}
