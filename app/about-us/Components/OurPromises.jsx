import {
  FaShieldAlt,
  FaUserTie,
  FaCar,
  FaClock,
  FaWhatsapp,
  FaMapMarkedAlt,
} from "react-icons/fa";

const promises = [
  { title: "Safe & Reliable Rides", icon: FaShieldAlt },
  { title: "Professional Service", icon: FaUserTie },
  { title: "Comfortable Vehicles", icon: FaCar },
  { title: "On-Time Transportation", icon: FaClock },
  { title: "Easy WhatsApp Booking", icon: FaWhatsapp },
  { title: "Karachi & Interior Sindh", icon: FaMapMarkedAlt },
];

export default function OurPromises() {
  return (
    <section className="w-full py-16 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Promises
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map(({ title, icon: Icon }) => (
            <div
              key={title}
              data-reveal-card
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center hover:bg-red-600 active:bg-red-600 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#fd0014] flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-white group-active:bg-white group-[.in-view]:bg-white">
                <Icon className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-[#fd0014] group-active:text-[#fd0014] group-[.in-view]:text-[#fd0014]" />
              </div>
              <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm transition-colors duration-300 group-hover:text-white group-active:text-white">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
