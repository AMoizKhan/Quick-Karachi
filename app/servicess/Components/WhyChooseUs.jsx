"use client";
import {
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaHeart,
  FaTags,
  FaCheckCircle,
} from "react-icons/fa";
import Image from "next/image";

const reasons = [
  {
    title: "Reliable & Professional",
    icon: "/newicons/driver.png",
  },
  {
    title: "Experienced Team",
    icon: "/newicons/meeting.png",
  },
  {
    title: "Safety Focused",
    icon: "/newicons/road-trip.png",
  },
  {
    title: "Timely Service",
    icon: "/newicons/speed.png",
  },
  {
    title: "Customer Centric",
    icon: "/newicons/help-desk.png",
  },
  {
    title: "Competitive Pricing",
    icon: "/newicons/tag.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14">
          <div className="relative inline-block px-8 py-4">
            {/* Top Left Border */}
            <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>

            {/* Bottom Right Border */}
            <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
              Why Choose Us?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ title, icon }) => (
            <div
              key={title}
              data-reveal-card
              className="group flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-red-600 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300">
                <Image
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  className="w-5 h-5 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 transition-colors duration-300">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
