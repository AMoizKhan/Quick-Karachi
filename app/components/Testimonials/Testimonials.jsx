"use client";

import { FaQuoteLeft } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "University Student",
    quote:
      "QKTS has made my daily commute to campus so much easier. The drivers are punctual, professional, and I always feel safe on my rides.",
  },
  {
    name: "Imran Siddiqui",
    role: "Office Professional",
    quote:
      "Reliable point-to-point service every morning. Booking through WhatsApp is quick, and the pricing is fair for regular city travel.",
  },
  {
    name: "Fatima Raza",
    role: "Working Professional",
    quote:
      "The women-only ride service gives me real peace of mind for early and late shifts. QKTS understands what Karachi commuters actually need.",
  },
  {
    name: "Ahmed Ali",
    role: "Business Owner",
    quote:
      "I often book QKTS for airport transfers and meetings. The service is smooth, professional, and always on time.",
  },
  {
    name: "Sara Noor",
    role: "Teacher",
    quote:
      "The drivers are respectful and the rides are always comfortable. It has become my preferred transport option in Karachi.",
  },
  {
    name: "Usman Tariq",
    role: "Software Engineer",
    quote:
      "I use QKTS regularly for office travel. Their customer support is responsive and the booking process is very convenient.",
  },
  {
    name: "Hina Javed",
    role: "Doctor",
    quote:
      "For late-night hospital shifts, QKTS gives me peace of mind. Safe rides and dependable service every single time.",
  },
];

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h4 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#fd0014] mb-3">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-testimonial-slide gap-6">
            {duplicatedTestimonials.map((item, index) => (
              <article
                key={index}
                className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 bg-red-600 rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <FaQuoteLeft className="w-8 h-8 text-white mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <BsStarFill
                      key={starIndex}
                      className="w-4 h-4 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-white leading-7 mb-6">{item.quote}</p>

                <div>
                  <h3 className="font-bold text-white">{item.name}</h3>
                  <p className="text-sm text-red-100">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}