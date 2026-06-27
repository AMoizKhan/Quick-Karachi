// import { FaUserTie } from "react-icons/fa";

// const leaders = [
//   {
//     name: "Sayed Naimatullah Shah",
//     role: "CEO and Founder",
//     description:
//       "Visionary leader committed to excellence and customer satisfaction.",
//   },
//   {
//     name: "Sayed Ali Raza",
//     role: "Chief Finance Officer",
//     description:
//       "Leading financial planning and ensuring effective management of company resources.",
//   },
//   {
//     name: "Syeda Faiza Ali Naqvi",
//     role: "Marketing Manager",
//     description:
//       "Focused on connecting customers with trusted transportation solutions.",
//   },
// ];

// export default function Leadership() {
//   return (
//     <section className="w-full py-16 bg-white">
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center mb-16">
//           <div className="relative inline-block px-8 py-4">
//             <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>
//             <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
//               Our Leadership Team
//             </h2>
//           </div>
//         </div>


//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {leaders.map((leader) => (
//             <article
//               key={leader.name}
//               data-reveal-card
//               className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center hover:bg-red-600 active:bg-red-600 hover:shadow-md transition-all duration-300"
//             >
//               <div className="w-20 h-20 rounded-full bg-[#fd0014]/10 flex items-center justify-center mx-auto mb-5 transition-colors duration-300 group-hover:bg-white group-active:bg-white group-[.in-view]:bg-white">
//                 <FaUserTie className="w-8 h-8 text-[#fd0014]" />
//               </div>
//               <p className="text-sm font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300 group-hover:text-white group-active:text-white">
//                 {leader.role}
//               </p>
//               <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white group-active:text-white">
//                 {leader.name}
//               </h3>
//               <p className="text-gray-600 leading-7 transition-colors duration-300 group-hover:text-white group-active:text-white">
//                 {leader.description}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const leaders = [
  {
    name: "Sayed Naimatullah Shah",
    role: "CEO and Founder",
    description:
      "Visionary leader committed to excellence and customer satisfaction.",
    image: "/images/naimatullah.jpeg",
  },
  {
    name: "Sayed Ali Raza",
    role: "Chief Finance Officer",
    description:
      "Leading financial planning and ensuring effective management of company resources.",
    image: "/images/aliraza.jpeg",
  },
  {
    name: "Syeda Faiza Ali Naqvi",
    role: "Marketing Manager",
    description:
      "Focused on connecting customers with trusted transportation solutions.",
    image: "/images/faiza.jpeg",
  },
];

export default function Leadership() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <div className="relative inline-block px-8 py-4">
            <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>
            <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
              Our Leadership Team
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center hover:bg-red-600 hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 border-4 border-[#fd0014]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300 group-hover:text-white">
                {leader.role}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white">
                {leader.name}
              </h3>

              <p className="text-gray-600 leading-7 transition-colors duration-300 group-hover:text-white">
                {leader.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}