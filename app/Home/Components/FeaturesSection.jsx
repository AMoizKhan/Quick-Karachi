"use client";

import Image from "next/image";
import {
  TimeTwoOutline,
  Car,
  MapPinLine,
  TruckDriver,
} from "@/app/components/IconPlaceholder/Icons";

const features = [
  {
    id: 1,
    icon: "/newicons/driver.png",
    title: "Professional Drivers",
    desc: "Experienced and trained drivers for a safe journey.",
  },
  {
    id: 2,
    icon: "/newicons/location.png",
    title: "Karachi Coverage",
    desc: "Pickup and drop service across all major areas of Karachi.",
  },
  {
    id: 3,
    icon: "/newicons/vehicle1.png",
    title: "Well Maintained Cars",
    desc: "Clean, comfortable and reliable vehicles for every trip.",
  },
  {
    id: 4,
    icon: "/newicons/help-desk.png",
    title: "24/7 Availability",
    desc: "Book your ride anytime with flexible transport service.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                data-reveal-card
                className="group bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-red-600  active:bg-red-600 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-black mb-2 transition-colors duration-300 group-hover:text-black group-active:text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-6 transition-colors duration-300 group-hover:text-black group-active:text-white">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
