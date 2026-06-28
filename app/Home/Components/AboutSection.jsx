import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-block px-8 py-4">
            <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>
            <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
              About Us
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

          {/* Left */}
          <div>
            <h3 className="text-3xl lg:text-5xl text-black font-bold leading-tight mb-6">
              Quick Karachi <br />
              <span className="text-[#fd0014]">Transportation</span> <br />
              Service
            </h3>

            <p className="text-gray-600 text-base md:text-lg leading-8 mb-5">
              Quick Karachi Transportation Service is committed to providing
              reliable, comfortable, and affordable travel solutions for
              individuals, families, and businesses. We focus on delivering
              safe rides, professional drivers, and a smooth booking experience
              for every customer.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-8 mb-8">
              Whether you need daily commuting, airport transfers, corporate
              transportation, or special event travel, our wide range of
              vehicles ensures that you always find the perfect ride for your
              journey.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center bg-[#fd0014] hover:bg-red-700 text-white px-7 py-3 rounded-md font-semibold transition"
            >
              Read More
            </Link>
          </div>

          {/* Right */}
          <div className="relative h-[320px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/bg-6.jpeg"
              alt="About Quick Karachi"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}