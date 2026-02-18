import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { client } from "../../../sanity/lib/client";
import { eventBySlugQuery } from "../../../sanity/lib/queries";

const DEFAULT_RESY =
  "https://resy.com/cities/los-angeles-ca/venues/men-and-beasts";

type GalleryImage = { url: string; alt: string | null };

type EventDetail = {
  title: string;
  date: string | null;
  heroImageUrl: string | null;
  heroTitle: string | null;
  heroSubtitle: string | null;
  aboutHeader: string | null;
  aboutBody: string | null;
  mainImageUrl: string | null;
  resyLink: string | null;
  resyCardTitle: string | null;
  resyCardText: string | null;
  galleryImages: GalleryImage[] | null;
};

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await client
    .fetch<EventDetail>(eventBySlugQuery, { slug })
    .catch(() => null);

  if (!event) notFound();

  const resyHref = event.resyLink ?? DEFAULT_RESY;

  return (
    <div className="min-h-screen bg-[#0b0a08] text-[#f5efe5]">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[420px] bg-[#15110d] md:h-[520px]">
        {event.heroImageUrl && (
          <Image
            src={event.heroImageUrl}
            alt={event.heroTitle ?? event.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        {(event.heroTitle || event.heroSubtitle) && (
          <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
            {event.heroTitle && (
              <h1 className="font-display text-4xl md:text-6xl">
                {event.heroTitle}
              </h1>
            )}
            {event.heroSubtitle && (
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#e6d6c7]">
                {event.heroSubtitle}
              </p>
            )}
          </div>
        )}
      </section>

      <main className="mx-auto w-full max-w-7xl px-6 py-16">
        {/* About + Image row */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: heading, body, resy card */}
          <div className="space-y-8">
            {event.aboutHeader && (
              <h2 className="font-display text-3xl text-[#f2e8dc] md:text-4xl">
                {event.aboutHeader}
              </h2>
            )}
            {event.aboutBody && (
              <p className="text-base leading-relaxed text-[#e6d6c7]">
                {event.aboutBody}
              </p>
            )}

            {/* Resy booking card */}
            <div className="rounded-2xl bg-[#fdfaf4]/90 p-8 text-[#2d2d2d]">
              <h3 className="font-display text-[2rem] leading-tight">
                {event.resyCardTitle ?? "Reserve your spot"}
              </h3>
              {event.resyCardText && (
                <p className="mt-4 text-base leading-relaxed">
                  {event.resyCardText}
                </p>
              )}
              <a
                href={resyHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-sm bg-[#3c2114] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#5a3020]"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Right: main image */}
          {event.mainImageUrl && (
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-accent/20">
              <Image
                src={event.mainImageUrl}
                alt={event.aboutHeader ?? event.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Gallery */}
        {event.galleryImages && event.galleryImages.length > 0 && (
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {event.galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl border border-accent/20"
                style={{ aspectRatio: "9/16" }}
              >
                <Image
                  src={img.url}
                  alt={img.alt ?? ""}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
