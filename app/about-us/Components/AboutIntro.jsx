export default function AboutIntro() {
  return (
    <section className="w-full py-16 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-left">
         <div className="flex justify-center mb-14">
          <div className="relative inline-block px-8 py-4">
            {/* Top Left Border */}
            <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>

            {/* Bottom Right Border */}
            <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
              About Us
            </h2>
          </div>
        </div>
        {/* <p className="text-[#fd0014] font-semibold mb-6">
          Your Trusted Transportation Partner
        </p> */}
        <p className="text-gray-600 text-base md:text-lg leading-8">
          At Quick Karachi Transportation Service (QKTS), we believe
          transportation should feel safe, reliable, and stress-free — especially
          in a fast-moving city like Karachi. What started with one Suzuki
          Mehran and a simple promise to help students reach class on time has
          grown into a trusted ride service for students, professionals,
          families, and institutions across the city.
        </p>
      </div>
    </section>
  );
}
