import { FaWhatsapp, FaMapMarkerAlt, FaCarSide, FaStar } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Send a Request",
    description:
      "Reach out via WhatsApp, SMS, or social media with your pickup point and destination.",
    icon: FaWhatsapp,
  },
  {
    number: "02",
    title: "Confirm Your Ride",
    description:
      "Our team shares the fare and driver details, then confirms your booking in minutes.",
    icon: FaMapMarkerAlt,
  },
  {
    number: "03",
    title: "Enjoy the Journey",
    description:
      "A verified driver picks you up on time in a clean, comfortable, well-maintained vehicle.",
    icon: FaCarSide,
  },
  {
    number: "04",
    title: "Rate & Repeat",
    description:
      "Share your feedback and unlock loyalty rewards on every ride you take with QKTS.",
    icon: FaStar,
  },
];

export default function ServiceProcess() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative inline-block px-8 py-6 text-center">
            {/* Top Left Corner */}
            <span className="absolute -top-2 -left-2 w-12 h-12 border-t-4 border-l-4 border-[#fd0014]"></span>

            {/* Bottom Right Corner */}
            <span className="absolute -bottom-2 -right-2 w-12 h-12 border-b-4 border-r-4 border-[#fd0014]"></span>

            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#fd0014] mb-3">
              How It Works
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Booking a Ride Is Simple
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <div
              key={number}
              data-reveal-card
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:border-red-600 hover:shadow-md transition-all duration-300"
            >
              <span className="absolute top-5 right-6 text-4xl md:text-5xl font-bold text-gray-100 select-none transition-colors duration-300 group-hover:text-red-600">
                {number}
              </span>
              <div className="relative w-14 h-14 rounded-full  flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon className="w-6 h-20 text-[#fd0014] transition-colors duration-300" />
              </div>
              <h3 className="relative text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">
                {title}
              </h3>
              <p className="relative text-gray-600 leading-7 text-sm md:text-base transition-colors duration-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
