
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { CONTACT_INFO } from "../../config/contactConfig";

const socialLinks = [
  {
    label: "Facebook",
    href: CONTACT_INFO.facebookHref,
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: CONTACT_INFO.instagramHref,
    icon: FaInstagram,
  },
];

const pages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact Now", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#fd0014]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#fd0014]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10">
          
          {/* Logo + About */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Quick Karachi Transportation Service"
                width={120}
                height={65}
                className="object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-5 text-gray-400 text-sm leading-7 max-w-sm">
              Quick Karachi Transportation Service provides safe, reliable, and
              comfortable rides across Karachi for families, professionals, and
              business travelers.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative inline-block">
              Pages
              <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-[#fd0014]"></span>
            </h3>

            <ul className="space-y-3 mt-6">
              {pages.map((page) => (
                <li key={page.label}>
                  <Link
                    href={page.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative inline-block">
              Contact Now
              <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-[#fd0014]"></span>
            </h3>

            <div className="mt-6 space-y-4 text-gray-400 text-sm">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#fd0014] shrink-0">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="hover:text-white transition-colors leading-6"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#fd0014] shrink-0">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <a
                  href={CONTACT_INFO.emailHref}
                  className="hover:text-white transition-colors break-all leading-6"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#fd0014] shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <p className="leading-6">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Quick Karachi Transportation
            Service. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-[#fd0014] hover:border-[#fd0014] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}