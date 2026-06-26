import {
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaHeart,
  FaTags,
  FaCheckCircle,
} from "react-icons/fa";

const reasons = [
  { title: "Reliable & Professional", icon: FaCheckCircle },
  { title: "Experienced Team", icon: FaUsers },
  { title: "Safety Focused", icon: FaShieldAlt },
  { title: "Timely Service", icon: FaClock },
  { title: "Customer Centric", icon: FaHeart },
  { title: "Competitive Pricing", icon: FaTags },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ title, icon: Icon }) => (
            <div
              key={title}
              data-reveal-card
              className="group flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:bg-red-600 active:bg-red-600 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#fd0014] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white group-active:bg-white group-[.in-view]:bg-white">
                <Icon className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#fd0014] group-active:text-[#fd0014] group-[.in-view]:text-[#fd0014]" />
              </div>
              <h3 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
