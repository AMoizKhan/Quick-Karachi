

// ─── Reusable SVG Icons ───────────────────────────────────────────────────────

export function MissionIcon({ width = 36, height = 36, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      {/* Outer ring */}
      <circle cx="18" cy="18" r="15" stroke={color} strokeWidth="2" fill="none" />
      {/* Inner ring */}
      <circle cx="18" cy="18" r="9" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Bullseye dot */}
      <circle cx="18" cy="18" r="3.5" fill={color} />
      {/* Cross-hairs */}
      <line x1="18" y1="3" x2="18" y2="9" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="27" x2="18" y2="33" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="18" x2="9" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="27" y1="18" x2="33" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function VisionIcon({ width = 36, height = 36, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      {/* Eye outline */}
      <path
        d="M3 18C3 18 9 7 18 7C27 7 33 18 33 18C33 18 27 29 18 29C9 29 3 18 3 18Z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Iris */}
      <circle cx="18" cy="18" r="6" fill={color} />
      {/* Pupil */}
      <circle cx="18" cy="18" r="3" fill="white" />
      {/* Pupil inner dot */}
      <circle cx="18" cy="18" r="1.2" fill={color} />
      {/* Shine */}
      <circle cx="21" cy="15" r="1" fill="white" fillOpacity="0.8" />
      {/* Lashes top-left */}
      <line x1="7" y1="13" x2="9" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Lashes top-right */}
      <line x1="29" y1="13" x2="27" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MissionVision() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <article
            data-reveal-card
            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-red-600 hover:shadow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5">
              <MissionIcon width={36} height={36} color="#fd0014" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300">
              Our Purpose
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8 transition-colors duration-300">
              To connect people to their destinations through a secure,
              affordable, and convenient ride service built on verified drivers,
              customer loyalty, and digital innovation.
            </p>
          </article>

          {/* Vision Card */}
          <article
            data-reveal-card
            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-red-600 hover:shadow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5">
              <VisionIcon width={36} height={36} color="#fd0014" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-widest text-[#fd0014] mb-2 transition-colors duration-300">
              Our Future
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8 transition-colors duration-300">
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