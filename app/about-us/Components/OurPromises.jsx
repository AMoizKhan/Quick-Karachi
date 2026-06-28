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
       <div className="flex justify-center mb-14">
          <div className="relative inline-block px-8 py-4">
            {/* Top Left Border */}
            <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>

            {/* Bottom Right Border */}
            <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
              Our Promises
            </h2>
          </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {promises.map(({ title, icon: Icon }) => (
    <div
      key={title}
      data-reveal-card
      className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center hover:border-red-600 hover:shadow-md transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
        <Icon className="w-6 h-6 text-[#fd0014] transition-colors duration-300" />
      </div>
      <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm transition-colors duration-300">
        {title}
      </h3>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
