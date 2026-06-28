"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Daily Ride Service",
    description:
      "Reliable point-to-point travel for students, professionals, and families who need a comfortable and timely ride across Karachi.",
    bestFor: "Best for: university, office, hospital, and routine city travel.",
    icon: "/newicons/road-trip.png",
  },
  {
    title: "Women-Only Ride Service",
    description:
      "A dedicated service for women who want extra comfort and confidence during travel, especially for early-morning and late-night trips.",
    bestFor: "Best for: women commuters, students, and working professionals.",
    icon: "/newicons/sports-car.png",
  },
  {
    title: "Family Track Rides",
    description:
      "A smart travel option for families who want to keep track of their loved ones during the journey.",
    bestFor: "Best for: children, teens, and family members traveling alone.",
    icon: "/newicons/taxi-driver.png",
  },
  {
    title: "Easy Booking Options",
    description:
      "Book your ride through WhatsApp, social media, SMS, and our upcoming mobile app.",
    bestFor: "Best for: customers who want quick and convenient booking.",
    icon: "/newicons/quick-response.png",
  },
  {
    title: "Flexible Payment Options",
    description:
      "Pay using cash, mobile wallets, or bank transfer for a smooth and convenient experience.",
    bestFor: "Best for: customers who prefer secure and easy payment methods.",
    icon: "/newicons/cashless-payment.png",
  },
  {
    title: "Subscription & Loyalty Plans",
    description:
      "Enjoy value-based travel with monthly packages, ride bundles, referral rewards, and special discounts for loyal customers.",
    bestFor: "",
    icon: "/newicons/customer-loyalty.png",
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
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
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
              className={`group rounded-2xl p-8 border shadow-sm transition-all duration-300
                ${
                  activeCard === index
                    ? "border-red-600"
                    : " hover:border-red-600"
                }
                bg-white 
              `}
            >
              {/* Icon container - transparent background */}
              <div className="w-14 h-14 flex items-center justify-center mb-5">
                <span className="flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </span>
              </div>

              {/* Title - stays black */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description - stays gray */}
              <p className="text-gray-600 leading-7 mb-4 transition-colors duration-300">
                {service.description}
              </p>

              {/* Best for - stays gray */}
              {service.bestFor && (
                <p className="text-sm text-gray-500 italic transition-colors duration-300">
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
