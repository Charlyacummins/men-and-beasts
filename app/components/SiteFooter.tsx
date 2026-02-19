import Image from "next/image";
import { NewsletterSignup } from "./NewsletterSignup";

export function SiteFooter() {
  return (
    <footer className="bg-[#0b0a08] px-6 py-16 text-[#f5efe5]">
      <div className="mx-auto w-full max-w-7xl">
        <NewsletterSignup />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <a href="/" className="inline-flex">
              <Image
                src="/footer-logo.png"
                alt="Men & Beasts logo"
                width={160}
                height={140}
              />
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-[#cdb8a5]">
                Quick Links
              </h4>
              <ul className="mt-4 grid gap-2 text-sm text-[#e6d6c7]">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/#our-story-section">About Us</a>
                </li>
                <li>
                  <a href="/dinner-menu">Menu</a>
                </li>
                <li>
                  <a href="https://resy.com/cities/los-angeles-ca/venues/men-and-beasts">
                    Reservations
                  </a>
                </li>
                <li>
                  <a href="/private-dining">Private Dining</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-[#cdb8a5]">
                Social Media
              </h4>
              <div className="mt-4">
                <a href="https://www.instagram.com/menandbeasts_la/">
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-[#cdb8a5]">
                Contact Us
              </h4>
              <ul className="mt-4 grid gap-2 text-sm text-[#e6d6c7]">
                <li>
                  <a href="tel:3473252033">(347) 325-2033</a>
                </li>
                <li>
                  <a href="mailto:menandbeasts@gmail.com">
                    menandbeasts@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/FZMFDYuMquGtKfA49"
                    target="_blank"
                    rel="noreferrer"
                  >
                    2100 W Sunset Blvd, Los Angeles, CA, 90026
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-accent/20 pt-6 text-xs text-[#cdb8a5]">
          <p>
            <a href="/privacy-policy">Privacy Policy</a> |{" "}
            <a href="/terms-conditions">Terms &amp; Conditions</a> |{" "}
            <a href="#">Shipping &amp; Return Policy</a> |{" "}
            <a href="#">Careers</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
