import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  groups: [
    { name: "listing", title: "Listing Card" },
    { name: "hero", title: "Hero Section" },
    { name: "about", title: "About Section" },
    { name: "booking", title: "Booking / Resy" },
    { name: "gallery", title: "Gallery" },
  ],
  fields: [
    // --- Listing ---
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      group: "listing",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "URL for this event's page (e.g. guided-tea-ceremony).",
      group: "listing",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Short Description",
      description: "Shown on the events listing card.",
      group: "listing",
      rows: 3,
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Card Image",
      description: "Image shown on the events listing page.",
      group: "listing",
      options: { hotspot: true },
    }),
    defineField({
      name: "date",
      type: "datetime",
      title: "Event Date",
      group: "listing",
    }),

    // --- Hero ---
    defineField({
      name: "heroImage",
      type: "image",
      title: "Hero Background Image",
      description: "Full-width image behind the hero section.",
      group: "hero",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroTitle",
      type: "string",
      title: "Hero Title (optional)",
      description: "Text overlaid on the hero image. Leave blank for no text.",
      group: "hero",
    }),
    defineField({
      name: "heroSubtitle",
      type: "string",
      title: "Hero Subtitle (optional)",
      description: 'e.g. "Echo Park, Los Angeles"',
      group: "hero",
    }),

    // --- About ---
    defineField({
      name: "aboutHeader",
      type: "string",
      title: "About Heading",
      description: "e.g. \"Join us for a Guided Tea Experience\"",
      group: "about",
    }),
    defineField({
      name: "aboutBody",
      type: "text",
      title: "About Body",
      description: "Main descriptive text shown beside the image.",
      group: "about",
      rows: 6,
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Main Image",
      description: "Square image shown beside the about text.",
      group: "about",
      options: { hotspot: true },
    }),

    // --- Booking ---
    defineField({
      name: "resyLink",
      type: "url",
      title: "Resy Booking Link",
      group: "booking",
    }),
    defineField({
      name: "resyCardTitle",
      type: "string",
      title: "Booking Card Heading",
      description: 'e.g. "Did you register?"',
      group: "booking",
      initialValue: "Did you register?",
    }),
    defineField({
      name: "resyCardText",
      type: "text",
      title: "Booking Card Body",
      group: "booking",
      rows: 3,
      initialValue:
        "Spots are limited for this intimate experience. Don't miss your chance to join us.",
    }),

    // --- Gallery ---
    defineField({
      name: "galleryImages",
      type: "array",
      title: "Gallery Images",
      description: "Up to 3 portrait images shown in a row below the main content.",
      group: "gallery",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt text" }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  orderings: [
    {
      title: "Date (newest first)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
