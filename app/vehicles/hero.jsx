"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { CONTACT_INFO } from "../config/contactConfig";

export default function VehiclesHero() {
  return (
    <section className="relative w-full  sm:h-[700px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/bg-3.jpeg"
        alt="Quick Karachi vehicle fleet"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-20">
        

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
          Rent the Perfect
          <br />

          {/* Red Typing Text */}
          <span className="text-red-500">
            <TypeAnimation
              sequence={[
                "Economy Car",
                1500,
                "Family Sedan",
                1500,
                "Luxury SUV",
                1500,
                "Event Ride",
                1500,
                "Group Van",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </span>

          <br />
          in Karachi
        </h1>

        <p className="mt-6 max-w-2xl text-gray-200 text-lg leading-relaxed">
          Browse our wide range of well-maintained vehicles for every need — from
          budget-friendly city cars to premium SUVs and group transport. With or
          without a driver, we make booking simple and affordable.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={CONTACT_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#fd0014] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <FaWhatsapp className="w-5 h-5" />
            Book on WhatsApp
          </a>
        
        </div>
      </div>
    </section>
  );
}
