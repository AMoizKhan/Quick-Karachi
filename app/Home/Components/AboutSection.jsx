import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          
          {/* Left Content */}
          <div className="flex flex-col items-start justify-start leading-tight">
            <h4 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#fd0014] mb-3">
              About Us
            </h4>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 lg:text-6xl  mb-6">
              Quick Karachi <br />
            <span className="text-red-600">   Transportation </span> <br />
              Service
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-8 mb-4">
              Quick Karachi Transportation Service is committed to providing
              reliable, comfortable, and affordable travel solutions for
              individuals, families, and businesses. We focus on delivering
              safe rides, professional drivers, and a smooth booking experience
              for every customer.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-8 mb-6">
              Whether you need daily commuting, airport transfers, corporate
              transportation, or special event travel, our wide range of
              vehicles ensures that you always find the perfect ride for your
              journey.
            </p>

            <Link
              href="/about-us"
              className="inline-block bg-[#fd0014] hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Read More
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about.jpg"   // apni image ka path yahan do
              alt="About Quick Karachi Transportation Service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}