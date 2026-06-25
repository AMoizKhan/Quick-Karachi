// import {
//   MapPinLine,
//   MapPinLine,
//   Car,
//   TimeTwoOutline,
// } from "./Icons";

import { TimeTwoOutline, Car,MapPinLine,TruckDriver} from "@/app/components/IconPlaceholder/Icons";


const features = [
  {
    id: 1,
    icon: TruckDriver,
    title: "Professional Drivers",
    desc: "Experienced and trained drivers for a safe journey.",
  },
  {
    id: 2,
    icon: MapPinLine,
    title: "Karachi Coverage",
    desc: "Pickup and drop service across all major areas of Karachi.",
  },
  {
    id: 3,
    icon: Car,
    title: "Well Maintained Cars",
    desc: "Clean, comfortable and reliable vehicles for every trip.",
  },
  {
    id: 4,
    icon: TimeTwoOutline,
    title: "24/7 Availability",
    desc: "Book your ride anytime with flexible transport service.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
                  <Icon className="text-red-600 w-8 h-8" />
                </div>

                <h3 className="text-lg font-semibold text-black mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-6">
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