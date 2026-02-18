/**
 * Seed script — populates Sanity with all hardcoded site data.
 * Run: npm run seed
 *
 * Safe to run multiple times (uses createOrReplace with deterministic IDs).
 *
 * Requires SANITY_API_TOKEN in .env.local (Editor role or higher).
 * Get one at: sanity.io/manage → your project → API → Tokens → Add API token
 */

import { readFileSync, createReadStream } from "fs";
import { join } from "path";
import { createClient } from "@sanity/client";

// ---------------------------------------------------------------------------
// Load .env.local
// ---------------------------------------------------------------------------
try {
  const env = readFileSync(join(process.cwd(), ".env.local"), "utf-8");
  for (const line of env.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (key && !process.env[key]) process.env[key] = rest.join("=").trim();
  }
} catch { /* env vars set another way */ }

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;

if (!projectId) { console.error("❌  NEXT_PUBLIC_SANITY_PROJECT_ID not set"); process.exit(1); }
if (!token) {
  console.error("❌  SANITY_API_TOKEN not set\n   Get one at sanity.io/manage → API → Tokens (Editor role)");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// ---------------------------------------------------------------------------
// Image upload (cached by filename)
// ---------------------------------------------------------------------------
const imageCache = new Map<string, { _type: "image"; asset: { _type: "reference"; _ref: string } }>();

async function uploadImage(filename: string) {
  if (imageCache.has(filename)) return imageCache.get(filename)!;
  const path = join(process.cwd(), "public", filename);
  console.log(`  📸 Uploading ${filename}…`);
  const asset = await client.assets.upload("image", createReadStream(path), { filename });
  const ref = { _type: "image" as const, asset: { _type: "reference" as const, _ref: asset._id } };
  imageCache.set(filename, ref);
  return ref;
}

// ---------------------------------------------------------------------------
// Events data
// ---------------------------------------------------------------------------
const upcomingEvents = [
  {
    _id: "event-lumineve-lunar-new-year-soiree",
    title: "Lumineve Festival",
    slug: "lumineve-lunar-new-year-soiree",
    description: "Join us for an immersive Lunar New Year experience blending culture, cuisine, music, and community. Presented in partnership with PETA and Mindful Peace, the event celebrates compassion, mindfulness, and connection.",
    imageFile: "Events-page-1.webp",
  },
  {
    _id: "event-guided-tea-ceremony",
    title: "Guided Tea Ceremony",
    slug: "guided-tea-ceremony",
    description: "Join us for an immersive guided tea experience, available by reservation every Thursday night and Sunday afternoon. Hosted by Minty Zhu, each intimate session explores the history, culture, and techniques",
    imageFile: "Guided-Tea-Ceremony.webp",
  },
  {
    _id: "event-dumpling-making-classes",
    title: "Dumpling Making Classes",
    slug: "dumpling-making-classes",
    description: "Step into our kitchen for a hands-on dumpling workshop, perfect for beginners and seasoned cooks alike. Guided by Chef Alex, you'll learn to prepare dough, roll out perfect wrappers, and fold plant-based",
    imageFile: "Dumpling-Making-Classes.webp",
  },
];

const calendarEvents = [
  { _id: "cal-valentines-2026-02-14", title: "Ceremony of Love: An Intimate Valentine's Affair", date: "2026-02-14", time: "5:00 PM - 9:30 PM", imageFile: "Valentines-Day-Event.webp" },
  { _id: "cal-dumpling-class-2026-02-15", title: "Men & Beasts Dumpling Making Class", date: "2026-02-15", time: "10:15 AM - 10:30 AM", imageFile: "Dumpling-Making-Classes.webp" },
  { _id: "cal-tea-ceremony-2026-02-15", title: "Men & Beasts Guided Tea Ceremony", date: "2026-02-15", time: "1:45 PM - 2:00 PM", imageFile: "Guided-Tea-Ceremony.webp" },
  { _id: "cal-dumpling-class-2026-02-21", title: "Men & Beasts Dumpling Making Class", date: "2026-02-21", time: "2:15 PM - 2:30 PM", imageFile: "Dumpling-Making-Classes.webp" },
  { _id: "cal-tea-ceremony-2026-02-22", title: "Men & Beasts Guided Tea Ceremony", date: "2026-02-22", time: "1:45 PM - 2:00 PM", imageFile: "Guided-Tea-Ceremony.webp" },
];

// ---------------------------------------------------------------------------
// Menu data
// ---------------------------------------------------------------------------
const menus = [
  {
    _id: "menu-dinner",
    name: "Dinner",
    order: 1,
    groups: [
      {
        title: "Cold",
        items: [
          { zh: "黄瓜", en: "Smashed Cucumber", desc: "Beancurd, cilantro, carrot, chili oil.", price: "$12", tag: "soy-free-2" },
        ],
      },
      {
        title: "Dim Sum",
        items: [
          { zh: "手工煎饺", en: "Dumplings", desc: "Prosperity 'pork' & chive, boiled or pan-fried (5).", price: "$16" },
          { zh: "磨菇包", en: "King Oyster Bao", desc: "Jalapeno, shallot, chili mayo (2).", price: "$15" },
          { zh: "奶酪  炸云吞", en: "Cheddar Rangoons", desc: "Broccoli, truffle oil, tomato soup (7).", price: "$16", tag: "Nut · soy-free-1" },
          { zh: "叉烧包", en: "Monkey Buns", desc: "Char siu, hoisin, sweet onion (4).", price: "$16" },
          { zh: "豆腐馅饼", en: "Beancurd Enchiladas", desc: "Soy tinga, kabocha, chipotle, cotija.", price: "$20", tag: "soy-free-2" },
          { zh: "小煎堆", en: "Baby Carrot", desc: "Black sesame, turmeric, mint (3).", price: "$15", tag: "soy-free-2 · soy-free-1" },
        ],
      },
      {
        title: "Wok",
        items: [
          { zh: "邊邊面", en: "Biang Biang Noodles", desc: "Chili oil, green onion.", price: "$22" },
          { zh: "大蒜长豆", en: "Garlic Long Beans", desc: "Seitan 'pork', pickled long bean, chili.", price: "$18" },
          { zh: "松露炒饭", en: "Fried Rice", desc: "Foraged mushroom, sunflower, black truffle.", price: "$32", tag: "soy-free-2" },
          { zh: "宮保豆腐", en: "Kung Pao Tofu", desc: "Peanut, chili, green onion, steamed rice.", price: "$24", tag: "soy-free-2" },
          { zh: "糖醋蘑菇", en: "Sweet & Sour Mushroom", desc: "Cashew, garlic, bell pepper.", price: "$25", tag: "soy-free-2" },
        ],
      },
      {
        title: "Sweet",
        items: [
          { zh: "冰淇淋", en: "M&B Ice Cream", desc: "Ask for today's flavors.", price: "$6" },
          { zh: "小甜甜圈", en: "Bao Beignets", desc: "Five spice, black sesame caramel.", price: "$12", tag: "soy-free-1" },
          { zh: "玫瑰饺子", en: "Chocolate Rose Dumpling", desc: "Coconut whip, chocolate soil.", price: "$18" },
        ],
      },
    ],
  },
  {
    _id: "menu-brunch",
    name: "Brunch",
    order: 2,
    groups: [
      {
        title: "Brunch Menu",
        items: [
          { zh: "黄瓜", en: "Smashed Cucumber", desc: "Beancurd, cilantro, carrot, chili oil.", price: "$12", tag: "soy-free-2" },
          { zh: "中式松饼", en: "Binglish Muffin", desc: "Truffle 'butter'.", price: "$15" },
          { zh: "手工煎饺", en: "Pan-fried Dumpling", desc: "Prosperity 'pork' & cabbage, chili oil (6).", price: "$14" },
          { zh: "松露炒饭", en: "Fried Rice", desc: "Foraged mushroom, black truffle.", price: "$34", tag: "soy-free-2" },
          { zh: "糖醋蘑菇", en: "Sweet & Sour Mushroom", desc: "Cashew, garlic, bell pepper.", price: "$25", tag: "Nut" },
          { zh: "牛油果咸包", en: "Avocado Bao", desc: "Pickled radish, tofu-lime mayo.", price: "$18" },
          { zh: "小甜甜圈", en: "Bao Beignets", desc: "Five spice, black sesame caramel.", price: "$14" },
          { zh: "冰淇淋", en: "M&B Ice Cream", desc: "Ask for today's flavors.", price: "$6" },
          { zh: "舒芙蕾饼", en: "Souffle Pancakes", desc: "Plant-based butter, maple syrup.", price: "$20" },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Seed
// ---------------------------------------------------------------------------
async function seed() {
  console.log("\n🌱  Seeding Sanity dataset…\n");

  // --- Upcoming events ---
  console.log("📅  Upcoming events…");
  for (const event of upcomingEvents) {
    const image = await uploadImage(event.imageFile);
    await client.createOrReplace({
      _id: event._id,
      _type: "event",
      title: event.title,
      slug: { _type: "slug", current: event.slug },
      description: event.description,
      image,
    });
    console.log(`  ✓ ${event.title}`);
  }

  // --- Calendar events ---
  console.log("\n🗓   Calendar events…");
  for (const event of calendarEvents) {
    const image = await uploadImage(event.imageFile);
    await client.createOrReplace({
      _id: event._id,
      _type: "calendarEvent",
      title: event.title,
      date: event.date,
      time: event.time,
      image,
    });
    console.log(`  ✓ ${event.title} — ${event.date}`);
  }

  // --- Menus ---
  console.log("\n🍜  Menus…");
  for (const menu of menus) {
    await client.createOrReplace({
      _id: menu._id,
      _type: "menu",
      name: menu.name,
      order: menu.order,
      groups: menu.groups,
    });
    console.log(`  ✓ ${menu.name} Menu (${menu.groups.reduce((n, g) => n + g.items.length, 0)} items)`);
  }

  console.log("\n✅  Done! Restart the dev server to see all data.\n");
}

seed().catch((err) => {
  console.error("❌  Seed failed:", err.message);
  process.exit(1);
});
