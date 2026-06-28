"use client";

import Image from "next/image";

const promises = [
  {
    title: "Safe & Reliable Rides",
    image: "/newicons/trustworthiness.png",
  },
  {
    title: "Professional Service",
    image: "/newicons/tech-support.png",
  },
  {
    title: "Comfortable Vehicles",
    image: "/newicons/sports-car.png",
  },
  {
    title: "On-Time Transportation",
    image: "/newicons/travel.png",
  },
  {
    title: "Easy WhatsApp Booking",
    image: "/newicons/whatsapp.png",
  },
  {
    title: "Karachi & Interior Sindh",
    image: "/newicons/route.png",
  },
];

export default function OurPromises() {
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
              Our Promises
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map(({ title, image }) => (
            <div
              key={title}
              data-reveal-card
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center hover:border-red-600 hover:shadow-md transition-all duration-300"
            >
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={image}
                  alt={title}
                  width={70}
                  height={70}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}