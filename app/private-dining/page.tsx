import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Exclusive Private Dining Options | Men & Beasts",
  description:
    "Celebrate in style with private dining offering refined Chinese dishes, curated drinks, and attentive service at Men & Beasts. Book your event today.",
  alternates: {
    canonical: "/private-dining",
  },
  openGraph: {
    title: "Exclusive Private Dining Options | Men & Beasts",
    description:
      "Celebrate in style with private dining offering refined Chinese dishes, curated drinks, and attentive service at Men & Beasts. Book your event today.",
    url: "/private-dining",
    siteName: "Men & Beasts",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PrivateDiningPage() {
  return (
    <div className="min-h-screen bg-[#0b0a08] text-[#f5efe5]">
      <SiteHeader />
      <section className="relative h-[420px] md:h-[520px]">
        <Image
          src="/private-dining-hero.jpg"
          alt="Private dining"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <h1 className="mt-4 font-display text-4xl md:text-6xl">
            Your Private Dining Escape
          </h1>
        </div>
      </section>

      <main className="mx-auto w-full max-w-7xl px-6 py-16">
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-accent/20">
            <Image
              src="/private-dining-room.jpg"
              alt="Private dining room"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-3xl">Private Dining Room</h2>
            <p className="text-[#e6d6c7]">
              Our private dining room is located on our second floor and
              provides an intimate and quiet setting for private dining. The
              room seats 9-20 guests, and is available during all business
              hours. The minimum spend/cost for the room is $800 on weekdays
              (Sun-Thurs) and $1200 on weekends (Fri & Sat) plus 20% gratuity,
              tax and service fee.
            </p>
            <a
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
              href="mailto:hello@menandbeasts.com"
            >
              Inquire Now
            </a>
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="order-2 space-y-4 lg:order-1">
            <h2 className="font-display text-3xl">Tea Room</h2>
            <p className="text-[#e6d6c7]">
              Our tea room features soft seating, a large communal table, and
              an 8-seat bar. The tea room seats up to 38 guests (detached
              seating with the communal table seating up to 14) or accommodates
              up to 60 for cocktails and hors d'oeuvres. The minimum
              spend/cost for the tea room is $2500 on weekdays (Sun-Thurs) and
              $4000 on weekends (Fri & Sat) plus 20% gratuity, tax and service
              fee.
            </p>
            <a
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
              href="mailto:hello@menandbeasts.com"
            >
              Inquire Now
            </a>
          </div>
          <div className="relative order-1 min-h-[320px] overflow-hidden rounded-3xl border border-accent/20 lg:order-2">
            <Image
              src="/tea-room.jpg"
              alt="Tea room"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-accent/20">
            <Image
              src="/patio.jpg"
              alt="Patio"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-3xl">Patio</h2>
            <p className="text-[#e6d6c7]">
              The Men &amp; Beasts patio, sheltered by a weatherproof pergola,
              provides a serene setting for events and large dining functions.
              Our patio can seat up to 50 guests or accommodate up to 120 for
              cocktails and hors d'oeuvres. The minimum spend/cost for booking
              the patio is $5000 plus 20% gratuity, tax and service fee.
            </p>
            <a
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
              href="mailto:hello@menandbeasts.com"
            >
              Inquire Now
            </a>
          </div>
        </section>

        <section className="mt-20 text-center">
          <h2 className="font-display text-3xl">Booking Form</h2>
          <p className="mt-4 text-[#e6d6c7]">
            Our tea room features soft seating, a large communal table, and an
            8-seat bar. The tea room seats up to 38 guests (detached seating
            with the communal table seating up to 14) or accommodates up to 60
            for cocktails and hors d'oeuvres. The minimum spend/cost for the
            tea room is $2500 on weekdays (Sun-Thurs) and $4000 on weekends (Fri
            & Sat) plus 20% gratuity, tax and service fee.
          </p>
          <div className="mt-6">
            <a
              className="inline-flex items-center justify-center rounded-full border border-[#e0c7b6] bg-[#6b3b24] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f2ea]"
              href="https://resy.com/cities/los-angeles-ca/venues/men-and-beasts"
            >
              Book your Men &amp; Beasts reservation on Resy
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
