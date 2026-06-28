"use client";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";
import { CONTACT_INFO } from "../../config/contactConfig";
import Image from "next/image";

const contactItems = [
  {
    title: "Phone Number",
    value: CONTACT_INFO.phone,
    href: CONTACT_INFO.phoneHref,
    icon: "/newicons/phone.png",
  },
  {
    title: "WhatsApp",
    value: "Chat on WhatsApp",
    href: CONTACT_INFO.whatsappHref,
    icon: "/newicons/whatsapp.png",
  },
  {
    title: "Email Address",
    value: CONTACT_INFO.email,
    href: CONTACT_INFO.emailHref,
    icon: "/newicons/mail.png",
  },
  {
    title: "Instagram",
    value: "Visit Instagram Profile",
    href: CONTACT_INFO.instagramHref,
    icon: "/newicons/instagram.png",
  },
  {
    title: "Facebook",
    value: "Visit Facebook Page",
    href: CONTACT_INFO.facebookHref,
    icon: "/newicons/facebook.png",
  },
  {
    title: "Location",
    value: CONTACT_INFO.location,
    href: CONTACT_INFO.mapHref,
    icon: "/newicons/location.png",
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactItems.map((item) => {
        const Icon = item.icon;
        const content = (
          <div
            data-reveal-card
            className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm h-full hover:border-red-600 hover:shadow-md transition-all duration-300"
          >
            {/* <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Icon className="w-5 h-5 text-[#fd0014] transition-colors duration-300" />
            </div> */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={item.icon}
                alt={item.title}
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-6 transition-colors duration-300">
                {item.value}
              </p>
            </div>
          </div>
        );

        if (item.href) {
          return (
            <a
              key={item.title}
              href={item.href}
              target={item.href?.startsWith("tel:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="block hover:scale-[1.01] transition-transform duration-200"
            >
              {content}
            </a>
          );
        }

        return <div key={item.title}>{content}</div>;
      })}
    </div>
  );
}
