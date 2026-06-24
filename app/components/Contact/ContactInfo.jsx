import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { CONTACT_INFO } from "../../config/contactConfig";

const contactItems = [
  {
    title: "Phone Number",
    value: CONTACT_INFO.phone,
    href: CONTACT_INFO.phoneHref,
    icon: FaPhone,
  },
  {
    title: "WhatsApp",
    value: "Chat on WhatsApp",
    href: CONTACT_INFO.whatsappHref,
    icon: FaWhatsapp,
  },
  {
    title: "Email Address",
    value: CONTACT_INFO.email,
    href: CONTACT_INFO.emailHref,
    icon: FaEnvelope,
  },
  {
    title: "Instagram",
    value: "Visit Instagram Profile",
    href: CONTACT_INFO.instagramHref,
    icon: FaInstagram,
  },
  {
    title: "Location",
    value: CONTACT_INFO.location,
    href: null,
    icon: FaMapMarkerAlt,
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactItems.map((item) => {
        const Icon = item.icon;
        const content = (
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm h-full">
            <div className="w-12 h-12 rounded-full bg-[#fd0014]/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-[#fd0014]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-6">{item.value}</p>
            </div>
          </div>
        );

        if (item.href) {
          return (
            <a
              key={item.title}
              href={item.href}
              target={item.title === "Phone Number" ? undefined : "_blank"}
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
