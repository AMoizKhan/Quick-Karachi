// ─── Reusable SVG Icons ───────────────────────────────────────────────────────
"use client";
import Image from "next/image";

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MissionVision() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <article
            data-reveal-card
            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-red-600 hover:shadow-md transition-all duration-300"
          >
            <div className="w-20 h-20  flex items-center justify-center mb-5 overflow-hidden">
              <Image
                src="/newicons/business.png"
                alt="Mission"
                width={70}
                height={70}
                className="w-16 h-16 object-contain"
              />
            </div>
            {/* <p className="text-xs font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300">
              Our Purpose
            </p> */}

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8 transition-colors duration-300">
              To connect people to their destinations through a secure,
              affordable, and convenient ride service built on verified drivers,
              customer loyalty, and digital innovation.
            </p>
          </article>

          {/* Vision Card */}
          <article
            data-reveal-card
            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-red-600 hover:shadow-md transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 overflow-hidden">
              <Image
                src="/newicons/vision.png"
                alt="Vision"
                width={70}
                height={70}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* <p className="text-xs font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300">
              Our Future
            </p> */}

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8 transition-colors duration-300">
              To redefine urban mobility in Karachi by setting the standard for
              safe, affordable, and reliable transportation powered by trust and
              innovation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
