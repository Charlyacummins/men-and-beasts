"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const DEFAULT_SLIDES: Slide[] = [
  { src: "/hero-1.jpg", alt: "Dining room" },
  { src: "/hero-2.jpg", alt: "Tea lounge" },
  { src: "/hero-3.jpg", alt: "Signature dishes" },
];

export function HeroCarousel({
  slides = DEFAULT_SLIDES,
  intervalMs = 6000,
}: {
  slides?: Slide[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const safeIndex = ((index % total) + total) % total;
  const current = slides[safeIndex];

  useEffect(() => {
    if (total <= 1) return;
    const id = window.setInterval(
      () => setIndex((prev) => (prev + 1) % total),
      intervalMs
    );
    return () => window.clearInterval(id);
  }, [intervalMs, total]);

  const dots = useMemo(
    () => Array.from({ length: total }, (_, i) => i),
    [total]
  );

  return (
    <div className="hero-shell">
      <div className="hero-image">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="100vw"
          priority
        />
        <div className="hero-overlay" />
      </div>

      {total > 1 ? (
        <>
          <button
            className="hero-arrow hero-left"
            type="button"
            aria-label="Previous slide"
            onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
          >
            ‹
          </button>
          <button
            className="hero-arrow hero-right"
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((prev) => (prev + 1) % total)}
          >
            ›
          </button>
        </>
      ) : null}

      {total > 1 ? (
        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {dots.map((dot) => (
            <button
              key={dot}
              type="button"
              className={`hero-dot ${dot === safeIndex ? "is-active" : ""}`}
              aria-label={`Go to slide ${dot + 1}`}
              onClick={() => setIndex(dot)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
