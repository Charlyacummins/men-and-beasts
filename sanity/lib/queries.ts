import { groq } from "next-sanity";

export const upcomingEventsQuery = groq`
  *[_type == "event"] | order(date asc) {
    title,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    date,
  }
`;

export const calendarEventsQuery = groq`
  *[_type == "calendarEvent"] | order(date asc) {
    title,
    date,
    time,
    "imageUrl": image.asset->url,
    resyLink,
  }
`;

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    title,
    date,
    "heroImageUrl": heroImage.asset->url,
    "heroImageHotspot": heroImage.hotspot,
    heroTitle,
    heroSubtitle,
    aboutHeader,
    aboutBody,
    "mainImageUrl": mainImage.asset->url,
    "mainImageHotspot": mainImage.hotspot,
    resyLink,
    resyCardTitle,
    resyCardText,
    "galleryImages": galleryImages[]{
      "url": asset->url,
      alt,
    },
  }
`;

export const menusQuery = groq`
  *[_type == "menu"] | order(order asc) {
    name,
    groups[] {
      title,
      items[] {
        zh,
        en,
        desc,
        price,
        tag,
      }
    }
  }
`;
