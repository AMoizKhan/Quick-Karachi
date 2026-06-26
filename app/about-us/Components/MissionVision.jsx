import IconPlaceholder from "../../components/IconPlaceholder/IconPlaceholder";

export default function MissionVision() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article
            data-reveal-card
            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:bg-red-600 active:bg-red-600 hover:shadow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-[#fd0014]/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white group-active:bg-white group-[.in-view]:bg-white">
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-white group-active:text-white">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-8 transition-colors duration-300 group-hover:text-white group-active:text-white">
              To connect people to their destinations through a secure,
              affordable, and convenient ride service built on verified drivers,
              customer loyalty, and digital innovation.
            </p>
          </article>

          <article
            data-reveal-card
            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:bg-red-600 active:bg-red-600 hover:shadow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-[#fd0014]/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white group-active:bg-white group-[.in-view]:bg-white">
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-white group-active:text-white">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-8 transition-colors duration-300 group-hover:text-white group-active:text-white">
              To redefine urban mobility in Karachi by setting the standard for
              safe, affordable, and reliable transportation powered by trust and
              innovation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
