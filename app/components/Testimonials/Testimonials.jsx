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
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#fd0014] mb-3">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <FaQuoteLeft className="w-8 h-8 text-[#fd0014] mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <BsStarFill
                    key={index}
                    className="w-4 h-4 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-7 mb-6">{item.quote}</p>

              <div>
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
