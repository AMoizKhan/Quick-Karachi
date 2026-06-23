import Image from "next/image";

const rides = [
  {
    id: 1,
    title: "Economy Cars",
    icon: "/icons/economy.png",
    image: "/images/alto.png",
    bg: "#fd0014",
  },
  {
    id: 2,
    title: "Standard Cars",
    icon: "/icons/standard.png",
    image: "/images/civic.png",
    bg: "#fd0014",
  },
  {
    id: 3,
    title: "SUVs",
    icon: "/icons/suv.png",
    image: "/images/tucso.png",
    bg: "#fd0014",
  },
  {
    id: 4,
    title: "Leisure & Events",
    icon: "/icons/events.png",
    image: "/images/camry.png",
    bg: "#fd0014",
  },
];

export default function ChooseRide() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4
            className="text-sm md:text-base font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#fd0014" }}
          >
            CHOOSE YOUR RIDE
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Wide Range of Vehicles
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="relative overflow-hidden rounded-2xl min-h-[250px] flex items-center"
              style={{
                backgroundColor: ride.bg,
              }}
            >
              {/* Left Content */}
              <div className="w-[55%] p-6 md:p-8 text-white z-10">
                <div className="w-12 h-12 rounded-full bg-[#fd0014] flex items-center justify-center mb-4 shadow-md">
                  <Image
                    src={ride.icon}
                    alt={ride.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-6 leading-snug">
                  {ride.title}
                </h3>

                <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                  View Vehicles
                  <span>→</span>
                </button>
              </div>

              {/* Right Image */}
              <div className="absolute right-0 bottom-0 w-[52%] h-full flex items-end justify-center bg-white">
                <Image
                  src={ride.image}
                  alt={ride.title}
                  width={320}
                  height={220}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
