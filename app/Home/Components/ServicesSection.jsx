"use client";
import Image from "next/image";
import Link from "next/link";

// ─── Services data ────────────────────────────────────────────────────────────

const services = [
  // {
  //   title: "Corporate Transfers",
  //   description:
  //     "Travel with business associates and VIP clients in style with our premium executive car rental service in Karachi.",
  //   icon: "/newicons/person.png",
  // },
  {
    title: "Weddings",
    description:
      "Make your special day unforgettable with our luxury wedding transportation services.",
    icon: "/newicons/wedding-car.png",
  },
  {
    title: "Airport Transfers",
    description:
      "Reliable airport transfers with on-time pickups and comfortable rides.",
    icon: "/newicons/airport.png",
  },
  {
    title: "Car With Driver",
    description:
      "Enjoy a comfortable and stress-free journey with our experienced and professional drivers.",
    icon: "/newicons/taxi-driver.png",
  },
  // {
  //   title: "Subscription & Loyalty Plans",
  //   description:
  //     "Save more with our flexible monthly packages and exclusive loyalty rewards for regular customers.",
  //   icon: "/newicons/customer-loyalty.png",
  // },
  {
    title: "Corporate Transfers",
    description:
      "Travel with business associates and VIP clients in style with our premium executive car rental service in Karachi.",
    icon: "/newicons/person.png",
  },
  {
    title: "Flexible Payment Options",
    description:
      "Pay conveniently using cash, bank transfer, or digital payment methods that suit your needs.",
    icon: "/newicons/cashless-payment.png",
  },
  {
    title: "Easy Booking",
    description:
      "Book your ride within minutes through WhatsApp or a simple phone call with instant confirmation.",
    icon: "/newicons/taxi.png",
  },
  {
    title: "Family Trips",
    description:
      "Comfortable and spacious vehicles for family outings, vacations, shopping, and weekend trips.",
    icon: "/newicons/road-trip.png",
  },
  {
    title: "Women-Only Ride Service",
    description:
      "Safe and reliable transportation designed to provide women with peace of mind while traveling.",
    icon: "/newicons/drive.png",
  },
  {
    title: "Daily Ride Service",
    description:
      "Reliable transportation for office commutes, school pickups, airport transfers, and everyday travel.",
    icon: "/newicons/car-sharing.png",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className=" mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-14">
            <div className="relative inline-block px-8 py-4">
              {/* Top Left Border */}
              <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>

              {/* Bottom Right Border */}
              <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
                Our Services
              </h2>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon }) => (
            <div
              key={title}
              data-reveal-card
              className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-xl"
            >
              {/* Icon circle — white bg on hover, icon stays red */}
              <div className="w-20 h-20 flex items-center justify-center mx-auto">
                <Image
                  src={icon}
                  alt={title}
                  width={70}
                  height={70}
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 text-center transition-colors duration-300 group-hover:text-black group-active:text-white">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 text-center leading-7 transition-colors duration-300 group-hover:text-black group-active:text-white">
                {description}
              </p>

              {/* Button */}
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact-us"
                  className="inline-block px-6 py-3 border-2 border-red-600 text-black rounded-xl font-medium transition-all duration-300 hover:scale-105 group-hover:bg-white group-hover:text-red-600 group-active:bg-white group-active:text-red-600 group-[.in-view]:bg-white group-[.in-view]:text-red-600"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
