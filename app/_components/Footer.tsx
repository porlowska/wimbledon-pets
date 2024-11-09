"use client";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";

const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "All Services", href: "/services" },
  { name: "T&C", href: "/terms" },
  { name: "Price List", href: "/pricelist" },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-24 lg:px-8 flex flex-col items-center">
        <Logo className="text-whiteish pb-8" w={130} h={100} />
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {nav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-whiteish hover:text-secondary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <SocialLinks className={"mt-16"} />

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          &copy; 2024 Wimbledon Pets. Created by Polly Orlowska. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
