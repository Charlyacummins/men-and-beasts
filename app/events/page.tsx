import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const upcomingEvents = [
  {
    title: "Lumineve Festival",
    description:
      "Join us for an immersive Lunar New Year experience blending culture, cuisine, music, and community. Presented in partnership with PETA and Mindful Peace, the event celebrates compassion, mindfulness, and connection.",
    href: "/lumineve-lunar-new-year-soiree/",
    image: "/Events-page-1.webp",
  },
  {
    title: "Guided Tea Ceremony",
    description:
      "Join us for an immersive guided tea experience, available by reservation every Thursday night and Sunday afternoon. Hosted by Minty Zhu, each intimate session explores the history, culture, and techniques",
    href: "/upcoming-events-guided-tea-ceremony/",
    image: "/Guided-Tea-Ceremony.webp",
  },
  {
    title: "Dumpling Making Classes",
    description:
      "Step into our kitchen for a hands-on dumpling workshop, perfect for beginners and seasoned cooks alike. Guided by Chef Alex, you'll learn to prepare dough, roll out perfect wrappers, and fold plant-based",
    href: "/upcoming-events-dumpling-making-classes/",
    image: "/Dumpling-Making-Classes.webp",
  },
];

const calendarEvents = [
  {
    title: "Ceremony of Love: An Intimate Valentine's Affair",
    time: "5:00 PM - 9:30 PM",
    date: "Feb 14",
    image: "/Valentines-Day-Event.webp",
  },
  {
    title: "Men & Beasts Dumpling Making Class",
    time: "10:15 AM - 10:30 AM",
    date: "Feb 15",
    image: "/Dumpling-Making-Classes.webp",
  },
  {
    title: "Men & Beasts Guided Tea Ceremony",
    time: "1:45 PM - 2:00 PM",
    date: "Feb 15",
    image: "/Guided-Tea-Ceremony.webp",
  },
  {
    title: "Men & Beasts Dumpling Making Class",
    time: "2:15 PM - 2:30 PM",
    date: "Feb 21",
    image: "/Dumpling-Making-Classes.webp",
  },
  {
    title: "Men & Beasts Guided Tea Ceremony",
    time: "1:45 PM - 2:00 PM",
    date: "Feb 22",
    image: "/Guided-Tea-Ceremony.webp",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#0b0a08] text-[#f5efe5]">
      <SiteHeader />

      <section className="pt-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h1 className="font-display text-4xl md:text-6xl">Events</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <h2 className="font-display text-3xl">Upcoming Events</h2>
        <p className="mt-4 text-[#e6d6c7]">
          Join us for an immersive experience featuring a guided tea ceremony
          and dumpling-making classes. Discover the art of brewing tea and
          proper tasting techniques under the guidance of Chef Minty Zhu. Then,
          roll up your sleeves for a hands-on dumpling-making class with Chef
          Alex Falco, where you’ll create delicious, seasonal dumplings from
          scratch. This event is perfect for tea enthusiasts, first-timers, and
          anyone seeking a unique blend of tea culture and culinary creativity.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-3xl border border-accent/20 bg-[#15110d]"
            >
              <div className="relative h-56">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{event.title}</h3>
                <p className="mt-3 text-sm text-[#e6d6c7]">
                  {event.description}
                </p>
                <a
                  href={event.href}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#3c2114] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#f0e7e1]"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <h2 className="font-display text-3xl">Event Calendar</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {calendarEvents.map((event) => (
            <div
              key={`${event.title}-${event.date}-${event.time}`}
              className="overflow-hidden rounded-3xl border border-accent/20 bg-[#15110d]"
            >
              <div className="relative h-40">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <a
                  href="https://resy.com/cities/los-angeles-ca/venues/men-and-beasts"
                  className="text-lg font-semibold text-[#f2e8dc]"
                >
                  {event.title}
                </a>
                <div className="mt-3 flex items-center gap-2 text-sm text-[#cdb8a5]">
                  <span>⏱</span>
                  <span>{event.time}</span>
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#cdb8a5]">
                  {event.date}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="https://resy.com/cities/los-angeles-ca/venues/men-and-beasts"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#e0c7b6] bg-[#6b3b24] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f2ea]"
          >
            See More
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
