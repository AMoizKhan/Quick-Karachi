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
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Promises
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#fd0014] flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
