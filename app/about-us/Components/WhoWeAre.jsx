"use client";

import { useEffect, useState } from "react";

// ─── Reusable SVG Icons ───────────────────────────────────────────────────────

export function DriverIcon({ width = 36, height = 36, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      {/* Head */}
      <circle cx="18" cy="9" r="5" fill={color} />
      {/* Body / uniform */}
      <path
        d="M9 28C9 22.477 13.477 18 19 18H17C11.477 18 7 22.477 7 28V30H29V28C29 22.477 24.523 18 19 18H17C22.523 18 27 22.477 27 28"
        fill={color}
      />
      <path
        d="M8 30H28V28C28 23.029 23.971 19 19 19H17C12.029 19 8 23.029 8 28V30Z"
        fill={color}
      />
      {/* Cap brim */}
      <rect
        x="12"
        y="6"
        width="12"
        height="3"
        rx="1.5"
        fill={color}
        opacity="0.4"
      />
      {/* Badge */}
      <rect
        x="15"
        y="21"
        width="6"
        height="4"
        rx="1"
        fill="white"
        fillOpacity="0.3"
      />
      {/* Steering wheel hint */}
      <circle
        cx="18"
        cy="23"
        r="2"
        stroke="white"
        strokeWidth="1.2"
        fill="none"
      />
      <line x1="18" y1="21" x2="18" y2="25" stroke="white" strokeWidth="1" />
      <line x1="16" y1="23" x2="20" y2="23" stroke="white" strokeWidth="1" />
    </svg>
  );
}

export function SafetyIcon({ width = 36, height = 36, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      {/* Shield */}
      <path
        d="M18 3L5 8V19C5 26 11 31.5 18 34C25 31.5 31 26 31 19V8L18 3Z"
        fill={color}
      />
      {/* Checkmark */}
      <path
        d="M12 18L16 22L24 14"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComfortIcon({ width = 32, height = 32, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      {/* Seat back */}
      <rect x="5" y="5" width="9" height="16" rx="3" fill={color} />
      {/* Seat cushion */}
      <rect x="5" y="19" width="22" height="6" rx="3" fill={color} />
      {/* Seat back right */}
      <rect x="18" y="5" width="9" height="16" rx="3" fill={color} />
      {/* Armrest */}
      <rect
        x="3"
        y="13"
        width="4"
        height="8"
        rx="2"
        fill={color}
        opacity="0.6"
      />
      <rect
        x="25"
        y="13"
        width="4"
        height="8"
        rx="2"
        fill={color}
        opacity="0.6"
      />
      {/* Headrest left */}
      <rect
        x="6"
        y="3"
        width="7"
        height="5"
        rx="2"
        fill={color}
        opacity="0.7"
      />
      {/* Headrest right */}
      <rect
        x="19"
        y="3"
        width="7"
        height="5"
        rx="2"
        fill={color}
        opacity="0.7"
      />
    </svg>
  );
}

// ─── Cards data ───────────────────────────────────────────────────────────────

const cards = [
  {
    id: "driver-card",
    label: "Verified Drivers",
    text: "Every QKTS journey is backed by verified drivers who understand Karachi's roads and the real needs of everyday commuters.",
    icon: <DriverIcon width={36} height={36} color="#fd0014" />,
  },
  {
    id: "safety-card",
    label: "Safety First",
    text: "We prioritize your safety on every ride — from background-checked drivers to real-time trip tracking and 24/7 support.",
    icon: <SafetyIcon width={36} height={36} color="#fd0014" />,
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
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:bg-red-600 active:bg-red-600 hover:shadow-md transition-all duration-300"
                >
                  {/* Icon circle */}
                  <div className="w-14 h-14 rounded-full bg-[#fd0014]/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-white group-active:bg-white">
                    {card.icon}
                  </div>

                  {/* Label */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300 group-hover:text-white group-active:text-white">
                    {card.label}
                  </p>

                  {/* Body */}
                  <p className="text-gray-600 leading-7 text-sm transition-colors duration-300 group-hover:text-white group-active:text-white">
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
