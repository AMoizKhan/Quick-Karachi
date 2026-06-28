// ─── Reasons data ─────────────────────────────────────────────────────────────
"use client";
import Image from "next/image";

const reasons = [
  {
    text: "Fast booking for everyday travel",
    icon: "/newicons/quick-response.png",
  },
  {
    text: "Verified and trusted service",
    icon: "/newicons/verified.png",
  },
  {
    text: "Affordable monthly plans and flexible ride options",
    icon: "/newicons/ruppe.png",
  },
  {
    text: "Safe travel for students, women, professionals, and families",
    icon: "/newicons/road-trip.png",
  },
  {
    text: "Customer-first support built around Karachi's real commuting needs",
    icon: "/newicons/meeting.png",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactWhy() {
  return (
    <div>
      <div className="flex justify-center mb-16">
        <div className="relative inline-block px-8 py-4">
          <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>
          <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
            Why QKTS?
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {reasons.map(({ text, icon }) => (
          <div
            key={text}
            data-reveal-card
            className="group flex-1 flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-red-600 hover:shadow-md transition-all duration-300"
          >
            {/* Icon circle - transparent background */}
            {/* <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Icon width={28} height={28} color="#fd0014" />
            </div> */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={icon}
                alt={text}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>

            {/* Single-line text on desktop via whitespace-nowrap + overflow handling */}
            <p className="flex-1 text-sm lg:text-base text-gray-700 leading-6 transition-colors duration-300 break-words">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
