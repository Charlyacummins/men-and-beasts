import Image from "next/image";
import { HeroCarousel } from "./components/HeroCarousel";
import { LeafOrnament } from "./components/LeafOrnament";
import { MenuCarousel } from "./components/MenuCarousel";
import { MenuSection } from "./components/MenuSection";
import { SiteFooter } from "./components/SiteFooter";
import { MobileMenu } from "./components/MobileMenu";

export default function Home() {
  return (
    <div className="min-h-screen text-[15px] text-foreground">
      <header className="absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-white/60 via-white/50 to-transparentbackdrop-blur-xs">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-2 pt-2 text-xs uppercase tracking-[0.35em] text-[#f8f2ea]">
          <nav className="hidden items-center gap-6 md:flex">
            <a href="/events" className="hover:text-white">
              Events
            </a>
            <a href="#menu" className="hover:text-white">
              Menu
            </a>
            <a href="https://resy.com/cities/los-angeles-ca/venues/men-and-beasts" className="hover:text-white">
              Reservations
            </a>
          </nav>

          <a href="/" className="flex items-center gap-2 text-center md:flex-col md:gap-2">
            <Image
              src="/logo-mark.png"
              alt="Men & Beasts logo"
              width={80}
              height={80}
              className="md:h-[144px] md:w-[144px]"
            />
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="/private-dining" className="hover:text-white">
              Private Dining
            </a>
            <a href="#about" className="hover:text-white">
              About Us
            </a>
            <a href="/#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>
        </div>
      </header>
      <div className="fixed right-6 top-9 z-30 md:hidden">
        <MobileMenu />
      </div>

      <section className="relative h-[640px] md:h-[720px]">
        <div className="absolute inset-0">
          <HeroCarousel />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-6 py-20 text-center text-[#f8f2ea]">
          <h1 className="font-display text-4xl md:text-6xl">Men & Beasts</h1>
          <p className="mt-3 text-lg md:text-2xl">
            Chinese Restaurant & Tea Lounge in Echo Park
          </p>
          <div className="pointer-events-auto mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              label="Book Now"
              variant="primary"
              href="https://resy.com/cities/los-angeles-ca/venues/men-and-beasts"
              className="w-[220px] sm:w-auto"
            />
            <Button
              label="Order Take-Out"
              variant="outline"
              href="https://order.toasttab.com/online/men-and-beasts-2100-w-sunset-blvd"
              className="w-[220px] sm:w-auto"
            />
            <Button
              label="Order Delivery"
              variant="ghost"
              href="https://www.ubereats.com/store/men-%26-beasts/upjlN5gBVQqYm7fylcsxfw?utm_source=wok"
              className="w-[220px] sm:w-auto"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="surface-dark relative overflow-hidden px-6 py-24 md:py-28"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(43,26,18,0.92), rgba(43,26,18,0.98))",
        }}
      >
        <Image
          src="/about-bg-before.png"
          alt=""
          width={224}
          height={224}
          className="pointer-events-none absolute left-0 top-0 opacity-70"
        />
        <Image
          src="/about-bg.png"
          alt=""
          width={224}
          height={224}
          className="pointer-events-none absolute bottom-0 right-0 opacity-70"
        />
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl">About Us</h2>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[#e6d6c7]">
            Without feelings of respect, what is there to distinguish men from
            beasts?
          </p>
          <p className="mt-6 text-base text-[#f2e8dc]">
            Welcome to Men & Beasts, a modern Chinese dining experience unlike
            any other. Using traditional Eastern cooking techniques with
            thoughtfully sourced ingredients, we strive to challenge the norms
            of authentic cuisine. Enjoy handmade dim sum, Californian beers and
            wines, and the finest loose leaf teas in a refined setting
            punctuated by the warmth of our five-star hospitality.
          </p>
        </div>
      </section>

      <main className="bg-[#0b0a08]">
        <MenuCarousel />
        <MenuSection />

        <section id="events" className="mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-accent/20">
              <Image
                src="/story.jpg"
                alt="Dining room"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c120c]/80 via-transparent" />
            </div>
            <div className="space-y-5">
              <h3 className="font-display text-3xl">Our Story</h3>
              <div className="space-y-4 text-muted">
                <p>
                  This restaurant and the cuisine we will serve is extremely
                  special to me because it represents a journey that Alex and I
                  made together as partners.
                </p>
                <p>
                  After moving to the US, I struggled to find food I liked, and
                  would often skip meals out of total disillusionment with
                  whatever I had tried to eat or cook. Homesickness definitely
                  played its part and I found myself constantly ordering New
                  York Chinese food to obtain some semblance of nostalgia.
                  After I met Alex, he quickly introduced me to a plant-based
                  diet, which sort of unlocked a love for food and cooking that
                  I had lost since my early childhood.
                </p>
                <p>
                  So, once I embraced the plant-based diet, I immediately
                  started to fantasize about how I could continue eating
                  Chinese food, and started asking Alex to make plant-based
                  versions of all kinds of my favorite Chinese dishes.
                </p>
                <p>
                  I see the food that Alex &amp; I created for Minty Z, and now
                  Men &amp; Beasts, as the embodiment of our own unique and
                  shared experiences: Chinese food, adapted to be plant-based,
                  created by a highly talented and passionate chef.
                </p>
                <p>
                  Many of our regulars at Minty Z considered the restaurant to
                  be a small cornerstone of their lives: where they met their
                  partners, had their first date, got engaged, had their
                  wedding dinner, or simply somewhere they felt really
                  comfortable, like a home away from home. We hope that we can
                  bring the same vibe to Men &amp; Beasts.
                </p>
                <p>
                  We want our guests, especially locals, to come to consider
                  M&amp;B something that belongs to them, to Echo Park and
                  greater LA. Similar to a sports team, the establishment may
                  be a privately-owned company, but the place and the
                  experience belong to the community.
                </p>
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent">
                — Minty Zhu, Co-Founder
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-20">
          <a
            href="/private-dining"
            className="group relative block min-h-[360px] overflow-hidden rounded-3xl border border-accent/20"
          >
            <Image
              src="/private-dining.jpg"
              alt="Elegant and inviting private dining"
              fill
              sizes="(min-width: 1024px) 100vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-8 right-8 max-w-md rounded-2xl border border-white/10 bg-black/60 p-6 text-white shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur">
              <div className="flex items-center justify-between gap-6">
                <h3 className="font-display text-2xl">Elegant &amp; Inviting</h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-lg transition group-hover:translate-x-1">
                  ↗
                </span>
              </div>
              <p className="mt-3 text-sm text-white/80">
                Our stylish interior blends modern elegance with cozy comfort,
                creating a space that feels both sophisticated and relaxed.
              </p>
            </div>
          </a>
        </section>

        <section
          id="private-dining"
          className="mx-auto w-full max-w-7xl px-6 pb-20"
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-accent/20 bg-[#15110d] p-8 text-[#f2e8dc] shadow-[0_18px_40px_rgba(67,38,24,0.25)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#cdb8a5]">
                Private Dining
              </p>
              <h3 className="mt-4 font-display text-3xl">
                Beautiful spaces for large party reservations.
              </h3>
              <p className="mt-4 text-[#e6d6c7]">
                Private Dining Room, Tea Room, and Patio experiences with
                curated menus, service, and ambiance for gatherings of every
                size.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button label="Inquire" variant="primary" href="#visit" />
                <Button label="View Event Deck" variant="outline" href="#visit" />
              </div>
            </div>
            <div className="grid gap-4">
              <InfoCard
                title="Private Dining Room"
                body="Seats 9–20 guests · Minimum spend applies."
              />
              <InfoCard
                title="Tea Room"
                body="Seats up to 38 · Cocktail events up to 60."
              />
              <InfoCard
                title="Patio"
                body="Seats up to 50 · Cocktail events up to 120."
              />
            </div>
          </div>
        </section>

        <section id="visit" className="mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <h3 className="font-display text-3xl">
                2100 W Sunset Blvd, Los Angeles, CA 90026
              </h3>
              <p className="text-muted">
                Located in Echo Park. Walk-ins accommodated when availability
                allows.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  title="Hours"
                  body="Dinner nightly · Weekend brunch available."
                />
                <InfoCard
                  title="Contact"
                  body="(347) 325-2033 · hello@menandbeasts.com"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  label="Get Directions"
                  variant="primary"
                  href="https://maps.app.goo.gl/FZMFDYuMquGtKfA49"
                />
                <Button label="Join the List" variant="ghost" />
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-accent/20">
              <Image
                src="/visit.jpg"
                alt="Dining room detail"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="mb-6 flex items-center gap-4">
            
          </div>
          <h2 className="font-display text-3xl text-[#f2e8dc]">FAQ</h2>
          <div className="mt-6 grid gap-4">
            {[
              {
                q: "Do you take reservations?",
                a: "Yes. Dinner is primarily reservation-based, with walk-ins accommodated when available.",
              },
              {
                q: "Is there a dress code?",
                a: "Smart casual. We love a polished, relaxed look.",
              },
              {
                q: "I’m running late. What should I do?",
                a: "We offer a 15-minute grace period. If you’re running more than 15 minutes behind, reach us via the Resy app so we can help reschedule.",
              },
              {
                q: "Do you have a corkage fee?",
                a: "$25.",
              },
              {
                q: "Do you offer valet parking?",
                a: "Yes, Friday to Sunday for $12 per car.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-accent/20 bg-[#15110d] p-6 text-[#f2e8dc] shadow-[0_18px_40px_rgba(67,38,24,0.2)]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-accent">
                  {item.q}
                </p>
                <p className="mt-3 text-sm text-[#e6d6c7]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-accent/20 bg-[#15110d] p-8 text-[#f2e8dc] shadow-[0_18px_40px_rgba(67,38,24,0.2)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#cdb8a5]">
                Instagram
              </p>
              <p className="mt-4 font-display text-3xl">@menandbeasts_la</p>
              <p className="mt-4 text-[#e6d6c7]">
                Follow along for new menu items, events, and promotions.
              </p>
              <div className="mt-6">
                <Button
                  label="Instagram"
                  variant="outline"
                  href="https://www.instagram.com/menandbeasts_la/"
                />
              </div>
            </div>
            <div className="rounded-3xl border border-accent/20 bg-[#15110d] p-8 text-[#f2e8dc] shadow-[0_18px_40px_rgba(67,38,24,0.2)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#cdb8a5]">
                Stay Connected
              </p>
              <h3 className="mt-4 font-display text-3xl">
                Join our community of food lovers.
              </h3>
              <div className="mt-6 flex flex-wrap gap-4">
                <input
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  className="h-12 flex-1 rounded-full border border-[#5f4131] bg-transparent px-5 text-sm text-[#f2e8dc] placeholder:text-[#cdb8a5]"
                />
                <Button label="Sign Up" variant="primary" />
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function Button({
  label,
  variant,
  href,
  className,
}: {
  label: string;
  variant: "primary" | "outline" | "ghost";
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-xs uppercase tracking-[0.3em] transition";
  const styles = {
    primary:
      "bg-accent text-white hover:bg-[#d06a3b] shadow-[0_12px_30px_rgba(204,90,47,0.3)]",
    outline:
      "border border-[#e0c7b6] text-[#f8f2ea] bg-[#6b3b24] hover:bg-[#7a4429]",
    ghost:
      "border border-transparent text-[#f8f2ea] bg-[#2c1a12]/60 hover:bg-[#2c1a12]/80",
  };

  const classes = `${base} ${styles[variant]} ${className ?? ""}`;
  const isExternal = href?.startsWith("http");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {label}
    </button>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-accent/20 bg-[#15110d] p-5 text-[#f2e8dc] shadow-[0_18px_40px_rgba(67,38,24,0.2)]">
      <p className="text-xs uppercase tracking-[0.25em] text-[#cdb8a5]">
        {title}
      </p>
      <p className="mt-3 text-sm text-[#e6d6c7]">{body}</p>
    </div>
  );
}
