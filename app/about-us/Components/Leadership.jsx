import { FaUserTie } from "react-icons/fa";

const leaders = [
  {
    name: "Sayed Naimatullah Shah",
    role: "CEO and Founder",
    description:
      "Visionary leader committed to excellence and customer satisfaction.",
  },
  {
    name: "Sayed Ali Raza",
    role: "Chief Finance Officer",
    description:
      "Leading financial planning and ensuring effective management of company resources.",
  },
  {
    name: "Syeda Faiza Ali Naqvi",
    role: "Marketing Manager",
    description:
      "Focused on connecting customers with trusted transportation solutions.",
  },
];

export default function Leadership() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              data-reveal-card
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center hover:bg-red-600 active:bg-red-600 hover:shadow-md transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-[#fd0014]/10 flex items-center justify-center mx-auto mb-5 transition-colors duration-300 group-hover:bg-white group-active:bg-white group-[.in-view]:bg-white">
                <FaUserTie className="w-8 h-8 text-[#fd0014]" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {leader.role}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {leader.name}
              </h3>
              <p className="text-gray-600 leading-7 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {leader.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
