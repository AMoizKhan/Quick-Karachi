import Image from "next/image";
import Link from "next/link";


const rides = [
  {
    id: 1,
    title: "Economy Cars",
    icon: "/icons/economy.png",
    image: "/images/alto.png",
    bg: "transparent",

    width: "w-[270px] sm:w-[260px] lg:w-[400px]",
    bottom: "-bottom-2 sm:-bottom-3 lg:-bottom-4",
    right: "-right-53 sm:-right-16 lg:-right-88",
  },
  {
    id: 2,
    title: "Standard Cars",
    icon: "/icons/standard.png",
    image: "/images/civic1.png",
    bg: "transparent",

    width: "w-[240px] sm:w-[280px] lg:w-[430px]",
    bottom: "-bottom-2 sm:-bottom-4 lg:-bottom-6",
    right: "-right-48 sm:-right-16 lg:-right-90",
  },
  {
    id: 3,
    title: "SUVs",
    icon: "/icons/suv.png",
    image: "/images/tucso1.png",
    bg: "transparent",

    width: "w-[230px] sm:w-[270px] lg:w-[390px]",
    bottom: "-bottom-6 sm:-bottom-8 lg:-bottom-20",
    right: "-right-48 sm:-right-14 lg:-right-82",
  },
  {
    id: 4,
    title: "Leisure & Events",
    icon: "/icons/placeholder.svg",
    image: "/images/camry.png",
    bg: "transparent",

    width: "w-[350px] sm:w-[340px] lg:w-[600px]",
    bottom: "-bottom-6 sm:-bottom-8 lg:-bottom-20",
    right: "-right-63 sm:-right-20 lg:-right-115",
  },
];
export default function ChooseRide() {
  return (
    <section className="w-full py-16 bg-white overflow-x-clip">
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
              className="relative overflow-visible rounded-2xl min-h-[230px] sm:min-h-[250px] flex items-center border-2 border-red-600"
              style={{ backgroundColor: ride.bg }}
            >
              {/* Left Content */}
              <div className="relative w-[55%] sm:w-1/2 p-5 sm:p-6 md:p-8 text-white z-10">
                {/* <div className="w-12 h-12 rounded-full bg-[#fd0014] flex items-center justify-center mb-4 shadow-md">
                  <Image
                    src={ride.icon}
                    alt={ride.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div> */}
                <div
                  className={`absolute ${ride.right} ${ride.bottom} z-20 pointer-events-none`}
                >
                  <Image
                    src={ride.image}
                    alt={ride.title}
                    width={600}
                    height={400}
                    className={`${ride.width} h-auto object-contain`}
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 leading-snug text-black">
                  {ride.title}
                </h3>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-white hover:bg-red-50 border-2 border-red-600 text-red-600 px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  View Vehicles
                  <span>→</span>
                </Link>
              </div>

              {/* Right Image */}
              {/* <div className="absolute right-0 bottom-0 w-[48%] sm:w-1/2 max-w-[360px] flex items-end justify-end z-20 pointer-events-none">
                <Image
                  src={ride.image}
                  alt={ride.title}
                  width={600}
                  height={360}
                  className="object-contain w-full h-auto"
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}