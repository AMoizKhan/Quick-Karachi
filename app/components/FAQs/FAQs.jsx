
"use client";

import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const faqItems = [
  {
    question: "How do I book a ride with QKTS?",
    answer:
      "You can book through WhatsApp, social media, SMS, or our upcoming mobile app. Simply share your pickup location, destination, and preferred time — our team will confirm your ride quickly.",
  },
  {
    question: "Do you offer women-only ride services?",
    answer:
      "Yes. Our women-only ride service is designed for extra comfort and confidence, especially for early-morning and late-night trips across Karachi.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, mobile wallets, and bank transfers so you can choose the payment method that works best for you.",
  },
  {
    question: "Can families track rides for loved ones?",
    answer:
      "Yes. Our Family Track Rides option helps families stay informed while children, teens, or other family members travel across the city.",
  },
  {
    question: "Do you offer monthly or subscription plans?",
    answer:
      "We offer subscription and loyalty plans with monthly packages, ride bundles, referral rewards, and special discounts for regular customers.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Karachi and interior Sindh, including daily commuting routes for students, professionals, families, and institutions.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#fd0014] mb-4">
              FAQs
            </span>

            <h2 className="text-3xl lg:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Frequently Asked Questions
            </h2>

            {/* <p className="mt-5 text-gray-600 text-base md:text-lg leading-7 max-w-xl">
              Find answers to common questions about booking, safety, payments,
              and our transport services across Karachi. If you still need help,
              our team is always ready to assist you.
            </p> */}
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-900">
                      {item.question}
                    </span>

                    <BsChevronDown
                      className={`w-5 h-5 text-[#fd0014] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 text-gray-600 leading-7">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}