export default function ContactHero() {
  return (
    <section className="w-full min-h-[50vh] flex items-center bg-white relative">
      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 py-24 items-center flex flex-col justify-center text-center">
        <h4 className="text-sm md:text-base font-semibold uppercase tracking-[5px] text-red-500 mb-4">
          Get In Touch
        </h4>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black leading-tight">
          Contact <br />
          <span className="text-red-500">Quick Karachi</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-900">
          We're here to help. Contact us anytime for bookings, inquiries, or
          transportation assistance across Karachi.
        </p>
      </div>
    </section>
  );
}