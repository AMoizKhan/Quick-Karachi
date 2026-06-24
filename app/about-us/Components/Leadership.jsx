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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#fd0014]/10 flex items-center justify-center mx-auto mb-5">
                <FaUserTie className="w-8 h-8 text-[#fd0014]" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#fd0014] mb-2">
                {leader.role}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {leader.name}
              </h3>
              <p className="text-gray-600 leading-7">{leader.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
