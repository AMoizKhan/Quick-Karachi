"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const cards = [
  {
    id: "driver-card",
    label: "Verified Drivers",
    text: "Every QKTS journey is backed by verified drivers who understand Karachi's roads and the real needs of everyday commuters.",
    icon: "/newicons/driver.png",
  },
  {
    id: "safety-card",
    label: "Safety First",
    text: "We prioritize your safety on every ride — from background-checked drivers to real-time trip tracking and 24/7 support.",
    icon: "/newicons/taxi-driver.png",
  },
];
// ─── Main Component ───────────────────────────────────────────────────────────

export default function WhoWeAre() {
  return (
    <section className="w-full py-16 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 items-start gap-10">
          {/* ── Left column: text + 2 cards ── */}
          <div className="flex flex-col gap-8">
            {/* Heading & description */}
            <div>
              <div className="flex justify-center mb-14">
                <div className="relative inline-block px-8 py-4">
                  {/* Top Left Border */}
                  <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>

                  {/* Bottom Right Border */}
                  <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
                    Who we are
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-8 mb-6">
                Quick Karachi Transportation Service is dedicated to making
                travel easy, affordable, and stress-free. From daily commuting
                and family trips to corporate travel and special events, we are
                committed to delivering quality transportation solutions.
              </p>
            </div>

            {/* ── 2 cards below the text ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card) => (
                <article
                  key={card.id}
                  data-reveal-card
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-red-600 active:bg-red-600 hover:shadow-md transition-all duration-300"
                >
                  {/* Icon circle */}
                  <div className="w-14 h-14 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-transparent group-active:bg-transparent">
                    <Image
                      src={card.icon}
                      alt={card.label}
                      width={30}
                      height={30}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  {/* Label */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300 group-hover:text-black group-active:text-black">
                    {card.label}
                  </p>

                  {/* Body */}
                  <p className="text-gray-600 leading-7 text-sm transition-colors duration-300 group-active:text-black">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
