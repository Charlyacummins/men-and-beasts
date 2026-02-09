import Image from "next/image";
import { HeroCarousel } from "./components/HeroCarousel";
import { LeafOrnament } from "./components/LeafOrnament";
import { MobileMenu } from "./components/MobileMenu";

export default function Home() {
  const menuGroups = [
    {
      title: "Cold",
      items: [
        {
          title: "Smashed Cucumber",
          desc: "Beancurd, cilantro, carrot, chili oil.",
          price: "$12",
        },
      ],
    },
    {
      title: "Dim Sum",
      items: [
        {
          title: "Dumplings",
          desc: "Prosperity “pork” & chive, boiled or pan-fried (5).",
          price: "$16",
        },
        {
          title: "King Oyster Bao",
          desc: "Jalapeno, shallot, chili mayo (2).",
          price: "$15",
        },
        {
          title: "Cheddar Rangoons",
          desc: "Broccoli, truffle oil, tomato soup (7).",
          price: "$16",
        },
        {
          title: "Monkey Buns",
          desc: "Char siu, hoisin, sweet onion (4).",
          price: "$16",
        },
      ],
    },
    {
      title: "Wok",
      items: [
        {
          title: "Biang Biang Noodles",
          desc: "Chili oil, green onion.",
          price: "$22",
        },
        {
          title: "Garlic Long Beans",
          desc: "Seitan “pork”, pickled long bean, chili.",
          price: "$18",
        },
        {
          title: "Fried Rice",
          desc: "Foraged mushroom, sunflower, black truffle.",
          price: "$32",
        },
        {
          title: "Kung Pao Tofu",
          desc: "Peanut, chili, green onion, steamed rice.",
          price: "$24",
        },
      ],
    },
    {
      title: "Sweet",
      items: [
        {
          title: "M&B Ice Cream",
          desc: "Ask for today’s flavors.",
          price: "$6",
        },
        {
          title: "Bao Beignets",
          desc: "Five spice, black sesame caramel.",
          price: "$12",
        },
        {
          title: "Chocolate Rose Dumpling",
          desc: "Coconut whip, chocolate soil.",
          price: "$18",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen text-[15px] text-foreground">
      <header className="absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-white/60 via-white/50 to-transparentbackdrop-blur-xs">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-2 pt-2 text-xs uppercase tracking-[0.35em] text-[#f8f2ea]">
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#events" className="hover:text-white">
              Events
            </a>
            <a href="#menu" className="hover:text-white">
              Menu
            </a>
            <a href="#visit" className="hover:text-white">
              Reservations
            </a>
          </nav>

          <div className="flex items-center gap-2 text-center md:flex-col md:gap-2 z-100">
            <Image
              src="/logo-mark.png"
              alt="Men & Beasts logo"
              width={96}
              height={96}
              className="md:h-[144px] md:w-[144px]"
            />
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#private-dining" className="hover:text-white">
              Private Dining
            </a>
            <a href="#about" className="hover:text-white">
              About Us
            </a>
            <a href="#faq" className="hover:text-white">
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
        <div className="absolute inset-0 z-10 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-6 py-20 text-center text-[#f8f2ea]">
          <h1 className="font-display text-4xl md:text-6xl">Men & Beasts</h1>
          <p className="mt-3 text-lg md:text-2xl">
            Chinese Restaurant & Tea Lounge in Echo Park
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              label="Book Now"
              variant="primary"
              href="https://resy.com/cities/los-angeles-ca/venues/men-and-beasts"
            />
            <Button
              label="Order Take-Out"
              variant="outline"
              href="https://order.toasttab.com/online/men-and-beasts-2100-w-sunset-blvd"
            />
            <Button
              label="Order Delivery"
              variant="ghost"
              href="https://www.ubereats.com/store/men-%26-beasts/upjlN5gBVQqYm7fylcsxfw?utm_source=wok"
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
        <section id="menu" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <h2 className="font-display text-4xl">
                Discover Our Diverse Menu
              </h2>
              <p className="text-muted">
                Our ethos? You will love the food, you will love the experience,
                but most importantly, you will love yourself.
              </p>
              <Button label="View Brunch Menu" variant="outline" href="#menu" />
            </div>
            <div className="grid gap-4">
              {menuGroups.map((group) => (
                <MenuGroup key={group.title} {...group} />
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="mx-auto w-full max-w-6xl px-6 pb-20">
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
              <p className="text-muted">
                This restaurant represents a journey shared by Minty and Alex,
                bringing plant-based Chinese cuisine to life through nostalgia,
                craft, and community.
              </p>
              <p className="text-muted">
                We want our guests to feel that Men & Beasts belongs to them, to
                Echo Park and greater LA, like a home away from home.
              </p>
              <p className="text-sm uppercase tracking-[0.2em] text-accent">
                — Minty Zhu, Co-Founder
              </p>
            </div>
          </div>
        </section>

        <section
          id="private-dining"
          className="mx-auto w-full max-w-6xl px-6 pb-20"
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

        <section id="visit" className="mx-auto w-full max-w-6xl px-6 pb-20">
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

        <section id="faq" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="grid gap-4">
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

        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
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

        <footer className="surface-dark px-6 py-10 text-sm text-[#f2e8dc]">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6">
            <p className="font-display text-lg uppercase tracking-[0.2em]">
              Men & Beasts
            </p>
            <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.25em]">
              <span>Events</span>
              <span>Menu</span>
              <span>FAQ</span>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-6xl text-xs uppercase tracking-[0.3em] text-[#e6d6c7]">
            (347) 325-2033 · hello@menandbeasts.com · Echo Park, Los Angeles
          </p>
        </footer>
      </main>
    </div>
  );
}

function Button({
  label,
  variant,
  href,
}: {
  label: string;
  variant: "primary" | "outline" | "ghost";
  href?: string;
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

  const classes = `${base} ${styles[variant]}`;
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

function MenuItem({
  title,
  desc,
  price,
}: {
  title: string;
  desc: string;
  price: string;
}) {
  return (
    <div className="rounded-2xl border border-accent/20 bg-[#15110d] p-5 text-[#f2e8dc] shadow-[0_12px_28px_rgba(67,38,24,0.2)]">
      <div className="flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.2em] text-[#f2e8dc]">
          {title}
        </p>
        <p className="text-sm text-accent">{price}</p>
      </div>
      <p className="mt-2 text-sm text-[#e6d6c7]">{desc}</p>
    </div>
  );
}

function MenuGroup({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; desc: string; price: string }>;
}) {
  return (
    <div className="rounded-3xl border border-accent/20 bg-[#1d1510] p-5 text-[#f2e8dc] shadow-[0_18px_40px_rgba(67,38,24,0.25)]">
      <p className="text-xs uppercase tracking-[0.25em] text-[#cdb8a5]">
        {title}
      </p>
      <div className="mt-4 grid gap-4">
        {items.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
