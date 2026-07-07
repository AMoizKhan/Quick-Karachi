// import Image from "next/image";
// import Link from "next/link";

// const rides = [
//   {
//     id: 1,
//     title: "Economy Cars",
//     icon: "/icons/vehicle.png",
//     image: 
//     // "/images/alto.png",
//     "/icons/vehicle.png",
//     bg: "transparent",

//     width: "w-[270px] sm:w-[260px] md:w-[270px] lg:w-[400px]",
//     bottom: "-bottom-2 sm:-bottom-3 md:-bottom-[-8px] lg:-bottom-4",
//     right: "-right-53 sm:-right-16 md:-right-54 lg:-right-88",
//   },
//   {
//     id: 2,
//     title: "Standard Cars",
//     icon: "/icons/sports-car.png",
//     image: 
//     // "/images/civic1.png",
//     "/icons/sports-car.png",
//     bg: "transparent",

//     width: "w-[240px] sm:w-[280px] md:w-[240px] lg:w-[430px]",
//     bottom: "-bottom-2 sm:-bottom-4 md:-bottom-[-13px] lg:-bottom-6",
//     right: "-right-48 sm:-right-16 md:-right-50 lg:-right-90",
//   },
//   {
//     id: 3,
//     title: "SUVs",
//     icon: "/icons/suvss.png",
//     image: 
//     // "/images/tucso1.png",
//     "/icons/suvss.png",
//     bg: "transparent",

//     width: "w-[230px] sm:w-[270px] md:w-[250px] lg:w-[390px]",
//     bottom: "-bottom-6 sm:-bottom-8 md:-bottom-10 lg:-bottom-20",
//     right: "-right-48 sm:-right-14 md:-right-50 lg:-right-82",
//   },
//   {
//     id: 4,
//     title: "Leisure & Events",
//     icon: "/icons/car.png",
//     image:
//     //  "/images/camry.png",
//     "/icons/car.png",
//     bg: "transparent",

//     width: "w-[350px] sm:w-[340px] md:w-[350px] lg:w-[600px]",
//     bottom: "-bottom-6 sm:-bottom-8 md:-bottom-[-20px] lg:-bottom-20",
//     right: "-right-63 sm:-right-20 md:-right-65 lg:-right-115",
//   },
// ];
// export default function ChooseRide() {
//   return (
//     <section className="w-full py-16 bg-white overflow-x-clip">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h4
//             className="text-sm md:text-base font-semibold uppercase tracking-widest mb-3"
//             style={{ color: "#fd0014" }}
//           >
//             CHOOSE YOUR RIDE
//           </h4>

//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
//             Wide Range of Vehicles
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {rides.map((ride) => (
//             <div
//               key={ride.id}
//               className="relative overflow-visible rounded-2xl min-h-[230px] sm:min-h-[250px] flex items-center border-2 border-red-600"
//               style={{ backgroundColor: ride.bg }}
//             >
//               {/* Left Content */}
//               {/* <div className="relative w-[55%] sm:w-1/2 p-5 sm:p-6 md:p-8 text-white z-10"> */}
//               <div className="relative w-[58%] sm:w-[55%]  md:w-[50%] lg:w-1/2 p-5 sm:p-6 md:p-7 lg:p-8 text-white z-10">
//                 {/* <div className="w-12 h-12 rounded-full bg-[#fd0014] flex items-center justify-center mb-4 shadow-md">
//                   <Image
//                     src={ride.icon}
//                     alt={ride.title}
//                     width={50}
//                     height={50}
//                     className="object-contain"
//                   />
//                 </div> */}
//                 <div
//                   //  className={`absolute ${ride.right} ${ride.bottom} md:-right-[200px]  z-20 pointer-events-none`}
//                   className={`absolute ${ride.right} ${ride.bottom} z-20 pointer-events-none`}
//                 >
//                   <Image
                  
//                     src={ride.image}
//                     alt={ride.title}
//                     width={600}
//                     height={400}
//                     className={`${ride.width} h-auto object-contain`}
//                     // className={`${ride.width} md:w-[260px] lg:${ride.width} h-auto object-contain`}
//                   />
//                 </div>

//                 <h3
//                   // className="text-xl sm:text-2xl md:text-[15px] lg:text-2xl font-bold mb-5 sm:mb-6 md:mb-4 leading-snug md:leading-6 text-black">
//                   className="text-xl sm:text-2xl md:text-[15px] lg:text-2xl font-bold mb-5 sm:mb-6 md:mb-4 leading-snug md:leading-6 text-black md:-ml-4"
//                 >
//                   {ride.icon && (
//                     <Image
//                       src={ride.icon}
//                       alt={ride.title}
//                       width={50}
//                       height={50}
//                       className="object-contain mr-2"
//                     />
//                   )}
//                   {ride.title}
//                 </h3>

//                 {/* <Link
//                   href="/contact-us"
//                   className="inline-flex items-center gap-2 bg-white hover:bg-red-50 border-2 border-red-600 text-red-600 px-4 py-2 rounded-md text-sm font-medium transition"
//                 >
//                   View Vehicles
//                   <span>→</span>
//                 </Link> */}
//                 <Link
//                   href={`/vehicles?category=${encodeURIComponent(ride.title)}`}
//                     className="inline-flex items-center bg-white hover:bg-red-50 border-2 border-red-600 text-red-600 px-4 py-2 md:px-2 md:py-1.5 md:text-[12px] lg:px-4 lg:py-2 lg:text-sm rounded-md font-medium transition md:-ml-4"

//                   // className="inline-flex items-center  bg-white hover:bg-red-50 border-2 border-red-600 text-red-600 px-4 py-2 md:px-2 md:py-1.5 md:text-[12px]  lg:px-4 lg:py-2 lg:text-sm rounded-md font-medium transition"
//                 >
//                   View Vehicles
//                   <span>→</span>
//                 </Link>
//               </div>

//               {/* Right Image */}
//               {/* <div className="absolute right-0 bottom-0 w-[48%] sm:w-1/2 max-w-[360px] flex items-end justify-end z-20 pointer-events-none">
//                 <Image
//                   src={ride.image}
//                   alt={ride.title}
//                   width={600}
//                   height={360}
//                   className="object-contain w-full h-auto"
//                 />
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

const rides = [
  {
    id: 1,
    title: "Economy Cars",
    // icon: "/icons/vehicle.png",
    image: "/icons/vehicle.png",
  },
  {
    id: 2,
    title: "Standard Cars",
    // icon: "/icons/sports-car.png",
    image: "/icons/sports-car.png",
  },
  {
    id: 3,
    title: "SUVs",
    // icon: "/icons/suvss.png",
    image: "/icons/suvss.png",
  },
  {
    id: 4,
    title: "Leisure & Events",
    // icon: "/icons/car.png",
    image: "/icons/car.png",
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
              className="relative overflow-hidden rounded-2xl min-h-[230px] sm:min-h-[250px] flex items-center border-2 border-red-600"
            >
              {/* Left Content */}
              <div className="relative w-[58%] sm:w-[55%] md:w-[50%] lg:w-1/2 p-5 sm:p-6 md:p-7 lg:p-8 text-white z-10">
                <h3 className="text-xl sm:text-2xl md:text-[15px] lg:text-2xl font-bold mb-5 sm:mb-6 md:mb-4 leading-snug md:leading-6 text-black flex items-center gap-2">
                  {ride.icon && (
                    <Image
                      // src={ride.icon}
                      src={ride.image}
                      alt={ride.title}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  )}
                  {ride.title}
                </h3>

                <Link
                  href={`/vehicles?category=${encodeURIComponent(ride.title)}`}
                  className="inline-flex items-center bg-white hover:bg-red-50 border-2 border-red-600 text-red-600 px-4 py-2 md:px-2 md:py-1.5 md:text-[12px] lg:px-4 lg:py-2 lg:text-sm rounded-md font-medium transition"
                >
                  View Vehicles
                  <span>→</span>
                </Link>
              </div>

              {/* Right Image - same size/position for all, contained inside the box */}
              <div className="absolute right-4 bottom-0 top-0 w-[42%] flex items-center justify-center z-20 pointer-events-none">
                <Image
                  src={ride.image}
                  alt={ride.title}
                  width={220}
                  height={220}
                  className="w-[160px] sm:w-[180px] md:w-[190px] lg:w-[220px] h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}