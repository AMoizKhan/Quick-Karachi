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
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#fd0014] mb-3">
            FAQs
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about booking, safety, payments,
            and our services across Karachi.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <BsChevronDown
                    className={`w-5 h-5 text-[#fd0014] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 leading-7">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
