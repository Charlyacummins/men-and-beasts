"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

const images = Array.from({ length: 10 }, (_, i) => `/menu-${i + 1}.jpg`);

export function MenuCarousel() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, images.length - 2);
  const safeIndex = Math.min(Math.max(index, 0), maxIndex);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const slides = useMemo(
    () => images.map((src, i) => ({ src, alt: `Menu image ${i + 1}` })),
    []
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <h2 className="font-display text-4xl text-[#f2e8dc]">
            Discover Our Diverse Menu
          </h2>
          <p className="text-[#cdb8a5]">
            Our ethos? You will love the food, you will love the experience,
            but most importantly, you will love yourself.
          </p>
          <a
            href="https://order.toasttab.com/online/men-and-beasts-2100-w-sunset-blvd"
            className="inline-flex items-center justify-center rounded-full border border-[#5f4131] bg-[#2b1a12] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f2ea]"
          >
            Order Take-Out
          </a>
        </div>

        <div>
          <div className="relative">
            <div
              ref={scrollerRef}
              className="no-scrollbar grid snap-x snap-mandatory auto-cols-[calc((100%-16px)/2)] grid-flow-col gap-4 overflow-x-auto scroll-smooth"
            >
              {slides.map((slide) => (
                <div
                  key={slide.src}
                  className="relative h-[400px] snap-start overflow-hidden rounded-2xl border border-accent/20"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                const el = scrollerRef.current;
                if (!el) return;
                const step = el.clientWidth / 2 + 8;
                if (safeIndex === 0) {
                  el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
                  setIndex(maxIndex);
                } else {
                  el.scrollBy({ left: -step, behavior: "smooth" });
                  setIndex((prev) => Math.max(prev - 1, 0));
                }
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => {
                const el = scrollerRef.current;
                if (!el) return;
                const step = el.clientWidth / 2 + 8;
                if (safeIndex >= maxIndex) {
                  el.scrollTo({ left: 0, behavior: "smooth" });
                  setIndex(0);
                } else {
                  el.scrollBy({ left: step, behavior: "smooth" });
                  setIndex((prev) => Math.min(prev + 1, maxIndex));
                }
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
