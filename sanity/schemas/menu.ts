import { defineField, defineType } from "sanity";

export const menu = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Menu Name",
      description: 'Display label shown on the website, e.g. "Dinner", "Brunch", "Valentine\'s Menu"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Display Order",
      description: "Lower numbers appear first. Dinner = 1, Brunch = 2, event menus = 3+",
      initialValue: 99,
    }),
    defineField({
      name: "groups",
      type: "array",
      title: "Menu Sections",
      of: [
        {
          type: "object",
          name: "menuGroup",
          title: "Section",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Section Title",
              description: 'e.g. "Dim Sum", "Wok", "Sweet"',
            }),
            defineField({
              name: "items",
              type: "array",
              title: "Items",
              of: [
                {
                  type: "object",
                  name: "menuItem",
                  title: "Menu Item",
                  fields: [
                    defineField({ name: "zh", type: "string", title: "Chinese Name" }),
                    defineField({
                      name: "en",
                      type: "string",
                      title: "English Name",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({ name: "desc", type: "string", title: "Description" }),
                    defineField({
                      name: "price",
                      type: "string",
                      title: "Price",
                      description: 'e.g. "$18"',
                    }),
                    defineField({
                      name: "tag",
                      type: "string",
                      title: "Dietary Tags",
                      description: 'e.g. "Nut · soy-free"',
                    }),
                  ],
                  preview: {
                    select: { title: "en", subtitle: "price" },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "order" },
    prepare({ title, subtitle }) {
      return {
        title: title ?? "Menu",
        subtitle: subtitle != null ? `Order: ${subtitle}` : undefined,
      };
    },
  },
});
