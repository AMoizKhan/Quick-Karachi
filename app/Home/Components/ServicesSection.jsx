// import Image from "next/image";

// const services = [
//   {
//     title: "Corporate Transfers",
//     description:
//       "Travel with business associates and VIP clients in style with our premium executive car rental in Karachi.",
//     image: "/images/corporate.png",
//   },
//   {
//     title: "Weddings",
//     description:
//       "Enjoy the festivities and let our luxury wedding car rental add charm and comfort to your big day.",
//     image: "/images/wedding.png",
//   },
//   {
//     title: "Car With Driver",
//     description:
//       "Our professional driver service in Karachi is perfect for a stress-free journey across the city.",
//     image: "/images/services-bg.jpg",
//   },
//   {
//     title: "Subscription & Loyalty Plans",
//     description: "",
//     image: "/images/services-bg.jpg",
//   },
//   {
//     title: "Flexible Payment Options",
//     description: "",
//     image: "/images/services-bg.jpg",
//   },
//   {
//     title: "Easy Booking Options",
//     description: "",
//     image: "/images/services-bg.jpg",
//   },
//   {
//     title: "Family Track Rides",
//     description: "",
//     image: "/images/services-bg.jpg",
//   },
//   {
//     title: "Women-Only Ride Service",
//     description: "",
//     image: "/images/services-bg.jpg",
//   },
//   {
//     title: "Daily Ride Service",
//     description: "",
//     image: "/images/services-bg.jpg",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section
//       className="relative py-24 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: "url('/images/services-bg.jpg')",
//       }}
//     >
//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-white">
//             Our <span className="text-red-500">Services</span>
//           </h2>
//           <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
//             From business events to family travel, our fleet offers the perfect
//             car hire in Karachi for every need.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition"
//             >
//               <div className="flex justify-center mb-5">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={90}
//                   height={90}
//                 />
//               </div>

//               <h3 className="text-xl font-semibold text-gray-900 text-center">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 text-sm mt-3 text-center">
//                 {item.description}
//               </p>

//               <div className="mt-6 text-center">
//                 <button className="px-5 py-2 rounded-full bg-red-600 text-white text-sm hover:bg-red-700">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const services = [
  {
    title: "Corporate Transfers",
    description:
      "Travel with business associates and VIP clients in style with our premium executive car rental service in Karachi.",
    icon: "/icons/corporate.svg",
  },
  {
    title: "Weddings",
    description:
      "Make your special day unforgettable with our luxury wedding transportation services.",
    icon: "/icons/wedding.svg",
  },
  {
    title: "Car With Driver",
    description:
      "Enjoy a comfortable and stress-free journey with our experienced and professional drivers.",
    icon: "/icons/driver.svg",
  },
  {
    title: "Subscription & Loyalty Plans",
    description:
      "Save more with our flexible monthly packages and exclusive loyalty rewards for regular customers.",
    icon: "/icons/subscription.svg",
  },
  {
    title: "Flexible Payment Options",
    description:
      "Pay conveniently using cash, bank transfer, or digital payment methods that suit your needs.",
    icon: "/icons/payment.svg",
  },
  {
    title: "Easy Booking",
    description:
      "Book your ride within minutes through WhatsApp or a simple phone call with instant confirmation.",
    icon: "/icons/booking.svg",
  },
  {
    title: "Family Trips",
    description:
      "Comfortable and spacious vehicles for family outings, vacations, shopping, and weekend trips.",
    icon: "/icons/family.svg",
  },
  {
    title: "Women-Only Ride Service",
    description:
      "Safe and reliable transportation designed to provide women with peace of mind while traveling.",
    icon: "/icons/women.svg",
  },
  {
    title: "Daily Ride Service",
    description:
      "Reliable transportation for office commutes, school pickups, airport transfers, and everyday travel.",
    icon: "/icons/daily.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 font-semibold px-4 py-2 rounded-full text-sm uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Premium Car Rental Services
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Quick Karachi Transportation Service provides reliable, affordable,
            and comfortable transportation solutions for individuals,
            businesses, families, and special occasions across Karachi.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-reveal-card
              className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-red-600 active:bg-red-600"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-white group-active:bg-white group-[.in-view]:bg-white transition-all duration-300 mx-auto">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={42}
                  height={42}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 text-center transition-colors duration-300 group-hover:text-white group-active:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 text-center leading-7 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {service.description}
              </p>

              {/* Button */}
              <div className="mt-8 flex justify-center">
                <button className="px-6 py-3 bg-red-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 group-hover:bg-white group-hover:text-red-600 group-active:bg-white group-active:text-red-600 group-[.in-view]:bg-white group-[.in-view]:text-red-600">
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