"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center">
      {/* Background */}
      <Image
        src="/images/bg-6.jpeg"
        alt="About Us Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 py-24 flex justify-start">
        <div className="max-w-3xl text-left">
          {/* <span className="inline-block text-sm font-semibold uppercase tracking-[5px] text-red-500 mb-4">
            About Us
          </span> */}

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            About
            <br />

            {/* Red Typing Animation */}
            <span className="text-red-500">
              <TypeAnimation
                sequence={[
                  "Quick Karachi",
                  2000,
                  "Safe Rides",
                  2000,
                  "Reliable Travel",
                  2000,
                  "Premium Service",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>

            <br />
            Transport
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-xl">
            Your trusted transportation partner, providing safe, reliable, and
            comfortable rides across Karachi.
          </p>
        </div>
      </div>
    </section>
  );
}