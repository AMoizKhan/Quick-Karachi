import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { CONTACT_INFO } from "../config/contactConfig";

export default function VehiclesBanner() {
  return (
    <section className="w-full  md:py-20 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-12 sm:px-10 md:px-16 md:py-16">
          {/* Glow accents */}
          <div className="pointer-events-none absolute -top-10 -left-10 w-60 h-60 bg-[#fd0014]/20 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-60 h-60 bg-[#fd0014]/20 blur-3xl rounded-full" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fd0014]">
                Contact Our Representative
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Looking for a different vehicle?
              </h2>
              <p className="mt-4 text-gray-300 text-base md:text-lg leading-8">
                If you don&apos;t find the vehicle you&apos;re looking for, our
                team is here to help.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#fd0014] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href={CONTACT_INFO.phoneHref}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <FaPhoneAlt className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
