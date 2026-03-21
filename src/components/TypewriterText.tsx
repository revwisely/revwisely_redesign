"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  startDelay?: number;
  charDelayMin?: number;
  charDelayMax?: number;
  cursorFadeDelay?: number;
}

export default function TypewriterText({
  text,
  className = "",
  startDelay = 500,
  charDelayMin = 40,
  charDelayMax = 60,
  cursorFadeDelay = 2000,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorFading, setCursorFading] = useState(false);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    // Check reduced motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplayedText(text);
      setCursorVisible(false);
      return;
    }

    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      if (charIndex < text.length) {
        charIndex++;
        setDisplayedText(text.slice(0, charIndex));
        const delay =
          charDelayMin + Math.random() * (charDelayMax - charDelayMin);
        timeoutId = setTimeout(typeNext, delay);
      } else {
        // Typing complete — fade cursor after delay
        timeoutId = setTimeout(() => {
          setCursorFading(true);
          timeoutId = setTimeout(() => {
            setCursorVisible(false);
          }, 500);
        }, cursorFadeDelay);
      }
    };

    timeoutId = setTimeout(typeNext, startDelay);

    return () => clearTimeout(timeoutId);
  }, [text, startDelay, charDelayMin, charDelayMax, cursorFadeDelay]);

  return (
    <h1 className={className}>
      {/* Hidden full text for SEO / screen readers */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayedText}
        {cursorVisible && (
          <span
            className={`typewriter-cursor ${cursorFading ? "typewriter-cursor--fading" : ""}`}
          />
        )}
      </span>
    </h1>
  );
}
