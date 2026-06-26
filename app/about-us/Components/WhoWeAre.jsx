import IconPlaceholder from "../../components/IconPlaceholder/IconPlaceholder";

export default function WhoWeAre() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-8 mb-6">
              Quick Karachi Transportation Service is dedicated to making travel
              easy, affordable, and stress-free. From daily commuting and
              family trips to corporate travel and special events, we are
              committed to delivering quality transportation solutions.
            </p>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <IconPlaceholder
                  src="/icons/professional-driver.svg"
                  alt="Professional Driver"
                  width={32}
                  height={32}
                />
              </div>
              <p className="text-gray-600 leading-8 pt-2">
                Our focus is on customer satisfaction, punctuality, safety, and
                making every journey comfortable.
              </p>
            </div>
          </div>

          <div
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
            <p className="text-gray-600 leading-8 transition-colors duration-300 group-hover:text-white group-active:text-white">
              Every QKTS journey is backed by verified drivers who understand
              Karachi&apos;s roads and the real needs of everyday commuters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
