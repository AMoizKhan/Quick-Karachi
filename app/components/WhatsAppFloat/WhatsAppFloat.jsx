import Image from "next/image";
import { CONTACT_INFO } from "../../config/contactConfig";

export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT_INFO.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 left-3 sm:bottom-6 sm:right-6 z-[90] flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 animate-whatsappPulse"
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp"
        width={40}
        height={40}
        className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
      />
    </a>
  );
}
