import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { client } from "../../sanity/lib/client";
import { upcomingEventsQuery, calendarEventsQuery } from "../../sanity/lib/queries";

type SanityEvent = {
  title: string;
  slug: string;
  description: string;
  imageUrl: string | null;
  date: string | null;
};

type SanityCalendarEvent = {
  title: string;
  date: string;
  time: string;
  imageUrl: string | null;
  resyLink: string | null;
};

const RESY_URL =
  "https://resy.com/cities/los-angeles-ca/venues/men-and-beasts";

export default async function EventsPage() {
  const [upcomingEvents, calendarEvents] = await Promise.all([
    client.fetch<SanityEvent[]>(upcomingEventsQuery).catch(() => []),
    client.fetch<SanityCalendarEvent[]>(calendarEventsQuery).catch(() => []),
  ]);

  return (
    <div className="min-h-screen bg-[#0b0a08] text-[#f5efe5]">
      <SiteHeader />

      <section className="relative h-[420px] md:h-[520px]">
        <Image
          src="/events-page-hero.jpg"
          alt="Events at Men & Beasts"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <h1 className="mt-4 font-display text-4xl md:text-6xl">Events</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <h2 className="font-display text-3xl">Upcoming Events</h2>
        <p className="mt-4 text-[#e6d6c7]">
          Join us for an immersive experience featuring a guided tea ceremony
          and dumpling-making classes. Discover the art of brewing tea and
          proper tasting techniques under the guidance of Chef Minty Zhu. Then,
          roll up your sleeves for a hands-on dumpling-making class with Chef
          Alex Falco, where you'll create delicious, seasonal dumplings from
          scratch. This event is perfect for tea enthusiasts, first-timers, and
          anyone seeking a unique blend of tea culture and culinary creativity.
        </p>

        {upcomingEvents.length > 0 ? (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.slug}
                className="overflow-hidden rounded-3xl border border-accent/20 bg-[#15110d]"
              >
                {event.imageUrl && (
                  <div className="relative h-56">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-2xl">{event.title}</h3>
                  <p className="mt-3 text-sm text-[#e6d6c7]">
                    {event.description}
                  </p>
                  <a
                    href={`/events/${event.slug}`}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#3c2114] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#f0e7e1]"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-[#cdb8a5]">No upcoming events at this time. Check back soon.</p>
        )}
      </section>

      {calendarEvents.length > 0 && (
        <section className="mx-auto w-full max-w-7xl px-6 pb-16">
          <h2 className="font-display text-3xl">Event Calendar</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {calendarEvents.map((event) => (
              <div
                key={`${event.title}-${event.date}-${event.time}`}
                className="overflow-hidden rounded-3xl border border-accent/20 bg-[#15110d]"
              >
                {event.imageUrl && (
                  <div className="relative h-40">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <a
                    href={event.resyLink ?? RESY_URL}
                    className="text-lg font-semibold text-[#f2e8dc]"
                  >
                    {event.title}
                  </a>
                  {event.time && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-[#cdb8a5]">
                      <span>⏱</span>
                      <span>{event.time}</span>
                    </div>
                  )}
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#cdb8a5]">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href={RESY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#e0c7b6] bg-[#6b3b24] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f2ea]"
            >
              See More
            </a>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
