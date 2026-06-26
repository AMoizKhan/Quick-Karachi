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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#fd0014] mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Booking a Ride Is Simple
          </h2>
          <p className="mt-5 max-w-2xl text-gray-600 text-base md:text-lg leading-8">
            From your first message to the final drop-off, we keep every step
            quick, clear, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <div
              key={number}
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:bg-red-600 active:bg-red-600 transition-all duration-300"
            >
              <span className="absolute top-5 right-6 text-4xl md:text-5xl font-bold text-gray-100 select-none transition-colors duration-300 group-hover:text-white/20 group-active:text-white/20">
                {number}
              </span>
              <div className="relative w-14 h-14 rounded-full bg-[#fd0014]/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white group-active:bg-white">
                <Icon className="w-6 h-6 text-[#fd0014]" />
              </div>
              <h3 className="relative text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {title}
              </h3>
              <p className="relative text-gray-600 leading-7 text-sm md:text-base transition-colors duration-300 group-hover:text-white group-active:text-white">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
