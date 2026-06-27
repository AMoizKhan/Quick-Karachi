"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Daily Ride Service",
    description:
      "Reliable point-to-point travel for students, professionals, and families who need a comfortable and timely ride across Karachi.",
    bestFor: "Best for: university, office, hospital, and routine city travel.",
    icon: (
      // Car / steering wheel icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        {/* Car body */}
        <rect x="3" y="18" width="30" height="10" rx="3" fill="#fd0014" />
        {/* Roof */}
        <path
          d="M9 18L12 10H24L27 18"
          stroke="#fd0014"
          strokeWidth="2.2"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Windows */}
        <path d="M13 18L15 12H21L23 18" fill="white" fillOpacity="0.9" />
        {/* Left wheel */}
        <circle cx="10" cy="28" r="3.5" fill="white" />
        <circle cx="10" cy="28" r="1.5" fill="#fd0014" />
        {/* Right wheel */}
        <circle cx="26" cy="28" r="3.5" fill="white" />
        <circle cx="26" cy="28" r="1.5" fill="#fd0014" />
        {/* Headlight */}
        <rect
          x="28"
          y="20"
          width="3"
          height="2"
          rx="1"
          fill="white"
          fillOpacity="0.8"
        />
        {/* Tail light */}
        <rect
          x="5"
          y="20"
          width="3"
          height="2"
          rx="1"
          fill="white"
          fillOpacity="0.6"
        />
      </svg>
    ),
  },
  {
    title: "Women-Only Ride Service",
    description:
      "A dedicated service for women who want extra comfort and confidence during travel, especially for early-morning and late-night trips.",
    bestFor: "Best for: women commuters, students, and working professionals.",
    icon: (
      // Shield with female symbol
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        {/* Shield */}
        <path
          d="M18 3L5 8V19C5 26 11 31.5 18 34C25 31.5 31 26 31 19V8L18 3Z"
          fill="#fd0014"
        />
        {/* Female symbol circle */}
        <circle
          cx="18"
          cy="16"
          r="5"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        {/* Female symbol cross */}
        <line
          x1="18"
          y1="21"
          x2="18"
          y2="27"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="15"
          y1="24"
          x2="21"
          y2="24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Family Track Rides",
    description:
      "A smart travel option for families who want to keep track of their loved ones during the journey.",
    bestFor: "Best for: children, teens, and family members traveling alone.",
    icon: (
      // Location pin with family figure
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        {/* Pin drop */}
        <path
          d="M18 3C12.48 3 8 7.48 8 13C8 20.5 18 33 18 33C18 33 28 20.5 28 13C28 7.48 23.52 3 18 3Z"
          fill="#fd0014"
        />
        {/* Inner circle */}
        <circle cx="18" cy="13" r="5" fill="white" />
        {/* Family figures — adult + child */}
        {/* Adult head */}
        <circle cx="16.5" cy="11" r="1.5" fill="#fd0014" />
        {/* Adult body */}
        <path d="M14.5 13.5 Q16.5 12.5 18.5 13.5 L18 16 H15 Z" fill="#fd0014" />
        {/* Child head */}
        <circle cx="20.5" cy="12" r="1" fill="#fd0014" />
        {/* Child body */}
        <path d="M19 14 Q20.5 13 22 14 L21.5 16 H19.5 Z" fill="#fd0014" />
      </svg>
    ),
  },
  {
    title: "Easy Booking Options",
    description:
      "Book your ride through WhatsApp, social media, SMS, and our upcoming mobile app. We make booking simple, fast, and accessible for everyone.",
    bestFor: "Best for: customers who want quick and convenient booking.",
    icon: (
      // Phone with chat bubble
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        {/* Phone body */}
        <rect x="9" y="3" width="14" height="24" rx="3" fill="#fd0014" />
        {/* Screen */}
        <rect x="11" y="6" width="10" height="15" rx="1.5" fill="white" />
        {/* Home button */}
        <circle cx="16" cy="24" r="1.2" fill="white" fillOpacity="0.7" />
        {/* Chat bubble top-right */}
        <rect
          x="19"
          y="2"
          width="13"
          height="9"
          rx="3"
          fill="#fd0014"
          stroke="white"
          strokeWidth="1.5"
        />
        <polygon points="20,10 23,10 21,13" fill="#fd0014" />
        {/* Chat dots */}
        <circle cx="23" cy="6.5" r="1" fill="white" />
        <circle cx="26" cy="6.5" r="1" fill="white" />
        <circle cx="29" cy="6.5" r="1" fill="white" />
      </svg>
    ),
  },
  {
    title: "Flexible Payment Options",
    description:
      "Pay using cash, mobile wallets, or bank transfer for a smooth and convenient experience.",
    bestFor: "Best for: customers who prefer secure and easy payment methods.",
    icon: (
      // Wallet with card
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        {/* Wallet base */}
        <rect x="3" y="9" width="26" height="20" rx="3" fill="#fd0014" />
        {/* Wallet flap/top */}
        <rect
          x="3"
          y="9"
          width="26"
          height="5"
          rx="2"
          fill="#fd0014"
          stroke="white"
          strokeWidth="1.2"
        />
        {/* Card inside */}
        <rect
          x="6"
          y="17"
          width="16"
          height="9"
          rx="2"
          fill="white"
          fillOpacity="0.15"
          stroke="white"
          strokeWidth="1"
        />
        {/* Card stripe */}
        <rect
          x="6"
          y="19"
          width="16"
          height="2.5"
          fill="white"
          fillOpacity="0.25"
        />
        {/* Coin / pocket */}
        <circle cx="27" cy="20" r="5" fill="white" />
        <circle cx="27" cy="20" r="3" fill="#fd0014" />
        {/* Currency sign */}
        <text
          x="24.5"
          y="23.5"
          fontSize="5.5"
          fill="white"
          fontFamily="Arial"
          fontWeight="bold"
        >
          ₨
        </text>
      </svg>
    ),
  },
  {
    title: "Subscription & Loyalty Plans",
    description:
      "Enjoy value-based travel with monthly packages, ride bundles, referral rewards, and special discounts for loyal customers.",
    bestFor: "",
    icon: (
      // Star / loyalty badge
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        {/* Outer badge circle */}
        <circle cx="18" cy="18" r="15" fill="#fd0014" />
        {/* Ribbon tabs bottom */}
        <polygon
          points="10,31 14,25 18,28 22,25 26,31 18,34"
          fill="#fd0014"
          stroke="white"
          strokeWidth="1"
        />
        {/* Star */}
        <polygon
          points="18,7 20.5,14 28,14 22,18.5 24,26 18,21.5 12,26 14,18.5 8,14 15.5,14"
          fill="white"
        />
      </svg>
    ),
  },
];

export default function OurServices() {
  const [activeCard, setActiveCard] = useState(-1);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth >= 768) return; // Only mobile

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveCard(index);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section className="w-full py-16 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14">
          <div className="relative inline-block px-8 py-4">
            {/* Top Left Border */}
            <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>

            {/* Bottom Right Border */}
            <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
              Our Services
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              data-reveal-card
              // className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:bg-red-600 active:bg-red-600 transition-all duration-300"
              className={`group rounded-2xl p-8 border shadow-sm transition-all duration-300

  ${
    activeCard === index
      ? "bg-red-600 border-red-600"
      : "bg-white border-red-100"
  }

  md:hover:bg-red-600 md:hover:border-red-600 md:hover:shadow-md`}
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-full bg-[#fd0014]/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white group-active:bg-white">
                <span className="group-hover:[&_svg_*[fill='#fd0014']]:fill-[#fd0014] [&>svg]:block">
                  {service.icon}
                </span>
              </div>

              {/* <p className="text-xs font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300 group-hover:text-white group-active:text-white">
                QKTS Service
              </p> */}

              <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7 mb-4 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {service.description}
              </p>

              {service.bestFor && (
                <p className="text-sm text-gray-500 italic transition-colors duration-300 group-hover:text-white group-active:text-white">
                  {service.bestFor}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
