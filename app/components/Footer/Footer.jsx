import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CONTACT_INFO } from "../../config/contactConfig";

const socialLinks = [
  {
    label: "Facebook",
    href: CONTACT_INFO.facebookHref,
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: CONTACT_INFO.instagramHref,
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Quick Karachi Transportation Service"
                width={100}
                height={56}
                className="object-contain brightness-0 invert mx-auto md:mx-0"
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-sm">
              Quick Karachi Transportation Service — safe, affordable, and
              reliable rides across Karachi.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#fd0014] flex items-center justify-center transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Quick Karachi Transportation
            Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
