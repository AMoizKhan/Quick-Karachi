
"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[700px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/services-bg1.jpg"
        alt="Services Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-20">
        {/* <h4 className="text-red-500 uppercase tracking-[5px] font-semibold mb-4">
          Premium Car Rental
        </h4> */}

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
          Transportation
          <br />

          {/* Red Typing Text */}
          <span className="text-red-500">
            <TypeAnimation
              sequence={[
                "Solutions",
                1500,
                "Services",
                1500,
                "Experience",
                1500,
                "Comfort",
                1500,
                "Luxury",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </span>

          <br />
          Across Karachi
        </h1>

        <p className="mt-6 max-w-2xl text-gray-200 text-lg leading-relaxed">
          Experience reliable, comfortable, and affordable transportation with
          our premium fleet. Whether it's corporate travel, airport transfers,
          weddings, or city tours, we've got you covered.
        </p>
      </div>
    </section>
  );
}