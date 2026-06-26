import IconPlaceholder from "../../components/IconPlaceholder/IconPlaceholder";

const services = [
  {
    title: "Daily Ride Service",
    description:
      "Reliable point-to-point travel for students, professionals, and families who need a comfortable and timely ride across Karachi.",
    bestFor:
      "Best for: university, office, hospital, and routine city travel.",
  },
  {
    title: "Women-Only Ride Service",
    description:
      "A dedicated service for women who want extra comfort and confidence during travel, especially for early-morning and late-night trips.",
    bestFor:
      "Best for: women commuters, students, and working professionals.",
  },
  {
    title: "Family Track Rides",
    description:
      "A smart travel option for families who want to keep track of their loved ones during the journey.",
    bestFor:
      "Best for: children, teens, and family members traveling alone.",
  },
  {
    title: "Easy Booking Options",
    description:
      "Book your ride through WhatsApp, social media, SMS, and our upcoming mobile app. We make booking simple, fast, and accessible for everyone.",
    bestFor:
      "Best for: customers who want quick and convenient booking.",
  },
  {
    title: "Flexible Payment Options",
    description:
      "Pay using cash, mobile wallets, or bank transfer for a smooth and convenient experience.",
    bestFor:
      "Best for: customers who prefer secure and easy payment methods.",
  },
  {
    title: "Subscription & Loyalty Plans",
    description:
      "Enjoy value-based travel with monthly packages, ride bundles, referral rewards, and special discounts for loyal customers.",
    bestFor: "",
  },
];

export default function OurServices() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:bg-red-600 active:bg-red-600 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#fd0014]/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white group-active:bg-white">
                <IconPlaceholder
                  src="/icons/professional-driver.svg"
                  alt="Professional Driver"
                  width={36}
                  height={36}
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300 group-hover:text-white group-active:text-white">
                Professional Driver
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7 mb-4 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {service.description}
              </p>

              {service.bestFor && (
                <p className="text-sm text-gray-500 italic transition-colors duration-300 group-hover:text-white group-active:text-white">
                  {service.bestFor}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
