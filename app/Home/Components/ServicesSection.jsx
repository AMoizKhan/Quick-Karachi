import Image from "next/image";

const services = [
  {
    title: "Corporate Transfers",
    description:
      "Travel with business associates and VIP clients in style with our premium executive car rental in Karachi.",
    image: "/images/corporate.png",
  },
  {
    title: "Weddings",
    description:
      "Enjoy the festivities and let our luxury wedding car rental add charm and comfort to your big day.",
    image: "/images/wedding.png",
  },
  {
    title: "Car With Driver",
    description:
      "Our professional driver service in Karachi is perfect for a stress-free journey across the city.",
    image: "/images/services-bg.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/services-bg.jpg')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            From business events to family travel, our fleet offers the perfect
            car hire in Karachi for every need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition"
            >
              <div className="flex justify-center mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={90}
                  height={90}
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-3 text-center">
                {item.description}
              </p>

              <div className="mt-6 text-center">
                <button className="px-5 py-2 rounded-full bg-red-600 text-white text-sm hover:bg-red-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}