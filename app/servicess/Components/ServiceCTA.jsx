import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { CONTACT_INFO } from "../../config/contactConfig";

export default function ServiceCTA() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-12 sm:px-10 md:px-16 md:py-16">
          {/* Glow accents */}
          <div className="pointer-events-none absolute -top-10 -left-10 w-60 h-60 bg-[#fd0014]/20 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-60 h-60 bg-[#fd0014]/20 blur-3xl rounded-full" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to Book Your Next Ride?
              </h2>
              <p className="mt-4 text-gray-300 text-base md:text-lg leading-8">
                Reliable, safe, and affordable transportation across Karachi is
                just one message away. Reach out and our team will confirm your
                ride in minutes.
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
                Book on WhatsApp
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
