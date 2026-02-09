"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#events", label: "Events" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Reservations" },
  { href: "#private-dining", label: "Private Dining" },
  { href: "#about", label: "About Us" },
  { href: "#faq", label: "FAQ" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        className="relative z-20 inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      <div
        className={`fixed inset-0 z-[60] transition ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-[#0b0a08] p-6 text-white shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Menu
            </p>
            <button
              type="button"
              aria-label="Close menu"
              className="rounded-full border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.2em]"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="mt-8 grid gap-4 text-xs uppercase tracking-[0.3em]">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-white/10 pb-3 hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
