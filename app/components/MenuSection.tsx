"use client";

import { useMemo, useState } from "react";

type MenuItem = {
  zh?: string;
  en: string;
  desc: string;
  price: string;
  tag?: string;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

type Menu = {
  name: string;
  groups: MenuGroup[];
};

// ---------------------------------------------------------------------------
// Hardcoded fallback — used only when no Sanity data is available
// ---------------------------------------------------------------------------
const fallbackMenus: Menu[] = [
  {
    name: "Dinner",
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
    name: "Brunch",
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
// Component
// ---------------------------------------------------------------------------
type MenuSectionProps = {
  menus?: Menu[] | null;
};

export function MenuSection({ menus: menusProp }: MenuSectionProps = {}) {
  const allMenus = menusProp && menusProp.length > 0 ? menusProp : fallbackMenus;
  const [activeIndex, setActiveIndex] = useState(0);
  const groups = useMemo(() => allMenus[activeIndex]?.groups ?? [], [allMenus, activeIndex]);

  return (
    <section id="menu" className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <h2 className="font-display text-4xl">Discover Our Diverse Menu</h2>
          <p className="text-muted">
            Our ethos? You will love the food, you will love the experience,
            but most importantly, you will love yourself.
          </p>
          <div className="flex flex-wrap gap-3">
            {allMenus.map((menu, i) => (
              <button
                key={menu.name}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-xs uppercase tracking-[0.3em] transition ${
                  i === activeIndex
                    ? "border-[#e0c7b6] bg-[#6b3b24] text-[#f8f2ea] hover:bg-[#7a4429]"
                    : "border-[#5f4131] bg-transparent text-[#cdb8a5] hover:border-[#e0c7b6] hover:text-[#f8f2ea]"
                }`}
              >
                {menu.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {groups.map((group) => (
            <MenuGroupCard key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuGroupCard({ title, items }: MenuGroup) {
  return (
    <div className="rounded-3xl border border-accent/20 bg-[#1d1510] p-5 text-[#f2e8dc] shadow-[0_18px_40px_rgba(67,38,24,0.25)]">
      <p className="text-xs uppercase tracking-[0.25em] text-[#cdb8a5]">
        {title}
      </p>
      <div className="mt-4 grid gap-4">
        {items.map((item) => (
          <MenuItemCard key={`${item.en}-${item.price}`} {...item} />
        ))}
      </div>
    </div>
  );
}

function MenuItemCard({ zh, en, desc, price, tag }: MenuItem) {
  return (
    <div className="rounded-2xl border border-accent/20 bg-[#15110d] p-5 text-[#f2e8dc] shadow-[0_12px_28px_rgba(67,38,24,0.2)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          {zh ? (
            <p className="text-xs tracking-[0.2em] text-[#cdb8a5]">{zh}</p>
          ) : null}
          <p className="text-sm uppercase tracking-[0.2em] text-[#f2e8dc]">
            {en}
          </p>
        </div>
        <p className="text-sm text-accent">{price}</p>
      </div>
      <p className="mt-2 text-sm text-[#e6d6c7]">{desc}</p>
      {tag ? (
        <span className="mt-3 inline-flex rounded-full border border-[#5f4131] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#cdb8a5]">
          {tag}
        </span>
      ) : null}
    </div>
  );
}
