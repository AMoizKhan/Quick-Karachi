

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CONTACT_INFO } from "../../config/contactConfig";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/servicess" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Quick Karachi Transportation Service"
              width={64}
              height={50}
              className="h-auto w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 text-sm font-bold relative group transition-colors duration-200 hover:text-red-600"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-red-600 transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={CONTACT_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-200 animate-whatsappPulse"
          >
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={14} height={14} />
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden inline-flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
        >
          <span
            className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
              isMenuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-current transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-gray-100 transition-[max-height] duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 text-base font-medium py-2 px-2 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={CONTACT_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-3 rounded transition-colors duration-200 animate-whatsappPulse"
          >
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
