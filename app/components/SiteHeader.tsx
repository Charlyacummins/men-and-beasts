import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const navLinkClass = "!text-[#3C2114] transition-colors hover:!text-[#3C2114]";

  return (
    <header className="absolute left-0 right-0 top-0 z-20 bg-gradient-to-b from-white/60 via-white/50 to-transparent backdrop-blur-xs">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-4 pt-2 text-xs uppercase tracking-[0.35em]">
        <nav className="hidden items-center gap-6 md:flex">
          <a href="/#events" className={navLinkClass}>
            Events
          </a>
          <a href="/#menu" className={navLinkClass}>
            Menu
          </a>
          <a href="/#visit" className={navLinkClass}>
            Reservations
          </a>
        </nav>

        <Link
          href="/"
          className="relative z-10 flex items-center gap-2 text-center md:flex-col md:gap-2"
        >
          <Image
            src="/logo-mark.png"
            alt="Men & Beasts logo"
            width={96}
            height={96}
            className="md:h-[144px] md:w-[144px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="/private-dining" className={navLinkClass}>
            Private Dining
          </a>
          <a href="/#story" className={navLinkClass}>
            About Us
          </a>
          <a href="/#faq" className={navLinkClass}>
            FAQ
          </a>
        </nav>
      </div>

      <div className="fixed right-6 top-9 z-30 md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
