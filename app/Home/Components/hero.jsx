import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover "
      />

 

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-start min-h-screen text-start px-4 ">
        {/* Heading - 3 lines */}
        <h1 className="text-black font-bold leading-tight mt-6">
          <span className="block text-4xl sm:text-5xl lg:text-6xl">
            Quick Karachi
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl">
            Transportation
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl">
            Service
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-black text-base sm:text-lg max-w-2xl leading-relaxed mt-6">
          Quick Karachi Transportation Service (QKTS) is a Karachi-based ride
          service created to make daily travel safer, more affordable, and more
          reliable for students, professionals, and families. Built on real
          commuter problems in Karachi, QKTS focuses on verified drivers, fair
          pricing, and customer-first service, with booking available through
          WhatsApp and social media and a digital app expansion planned for
          better convenience.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mt-10 gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-base px-7 py-3 rounded transition-all duration-200"
        >
          <Image
            src="/images/whatsapp.svg"
            alt="WhatsApp"
            width={22}
            height={22}
          />
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
