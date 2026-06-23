"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  return (
    <header className="w-full bg-white h-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo - Left */}
        <div className="mt-7 items-start justify-start flex-shrink-0 ">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Quick Karachi Transportation Service"
              width={90}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Nav Links - Center */}
        <nav className="flex mt-5 items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 text-sm font-medium relative group transition-colors duration-200 hover:text-red-600"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-red-600 transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Book Now Button - Right */}
        <div className=" mt-5 w-40">
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
          >
            <Image
              src="/images/whatsapp.svg"
              alt="WhatsApp"
              width={18}
              height={18}
            />
            Book Now
          </a>
        </div>

      </div>
    </header>
  );
}