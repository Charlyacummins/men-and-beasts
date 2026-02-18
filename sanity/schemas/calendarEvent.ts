import { defineField, defineType } from "sanity";

export const calendarEvent = defineType({
  name: "calendarEvent",
  title: "Calendar Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      type: "date",
      title: "Date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "time",
      type: "string",
      title: "Time",
      description: 'e.g. "5:00 PM – 9:30 PM"',
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "resyLink",
      type: "url",
      title: "Resy Link",
      description: "Booking link. Defaults to the main Resy page if left blank.",
    }),
  ],
  orderings: [
    {
      title: "Date (soonest first)",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
});
