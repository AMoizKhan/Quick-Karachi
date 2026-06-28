// components/ContactWhy/ContactWhy.jsx
// Next.js + Tailwind CSS — unique reusable SVG icons, single-line text on desktop

// ─── Reusable SVG Icon Components ────────────────────────────────────────────

export function FastBookingIcon({
  width = 32,
  height = 32,
  color = "#fd0014",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      {/* Clock face */}
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      {/* Hour hand */}
      <line
        x1="16"
        y1="16"
        x2="16"
        y2="9"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Minute hand — pointing to ~10 past */}
      <line
        x1="16"
        y1="16"
        x2="22"
        y2="13"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="16" cy="16" r="1.5" fill={color} />
      {/* Lightning bolt — speed */}
      <path
        d="M13 4L10 10H14L11 17"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VerifiedIcon({ width = 32, height = 32, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      {/* Badge shape */}
      <path
        d="M16 2L4 7V17C4 23.5 9.5 28.5 16 31C22.5 28.5 28 23.5 28 17V7L16 2Z"
        fill={color}
      />
      {/* Checkmark */}
      <path
        d="M10 16L14 20L22 12"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AffordableIcon({ width = 32, height = 32, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      {/* Coin circle */}
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      {/* PKR / rupee symbol */}
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill={color}
      >
        ₨
      </text>
      {/* Small sparkle top-right */}
      <circle cx="25" cy="7" r="2" fill={color} />
      <line
        x1="25"
        y1="4"
        x2="25"
        y2="5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="25"
        y1="9"
        x2="25"
        y2="10"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="7"
        x2="23"
        y2="7"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="27"
        y1="7"
        x2="28"
        y2="7"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SafeTravelIcon({ width = 32, height = 32, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      {/* Family figures */}
      {/* Adult 1 head */}
      <circle cx="10" cy="8" r="3" fill={color} />
      {/* Adult 1 body */}
      <path
        d="M6 20C6 16.134 7.8 13 10 13C12.2 13 14 16.134 14 20H6Z"
        fill={color}
      />
      {/* Adult 2 head */}
      <circle cx="22" cy="8" r="3" fill={color} />
      {/* Adult 2 body */}
      <path
        d="M18 20C18 16.134 19.8 13 22 13C24.2 13 26 16.134 26 20H18Z"
        fill={color}
      />
      {/* Child head */}
      <circle cx="16" cy="10" r="2.2" fill={color} />
      {/* Child body */}
      <path
        d="M13 20C13 17.239 14.343 15 16 15C17.657 15 19 17.239 19 20H13Z"
        fill={color}
      />
      {/* Ground line */}
      <line
        x1="4"
        y1="22"
        x2="28"
        y2="22"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Heart above */}
      <path
        d="M16 5.5C16 5.5 14 3 12.5 4C11 5 12 7 13.5 8.5L16 11L18.5 8.5C20 7 21 5 19.5 4C18 3 16 5.5 16 5.5Z"
        fill={color}
        fillOpacity="0.25"
      />
    </svg>
  );
}

export function SupportIcon({ width = 32, height = 32, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      {/* Headset band */}
      <path
        d="M6 16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left ear cup */}
      <rect x="4" y="15" width="5" height="8" rx="2.5" fill={color} />
      {/* Right ear cup */}
      <rect x="23" y="15" width="5" height="8" rx="2.5" fill={color} />
      {/* Mic arm */}
      <path
        d="M26 22 Q30 24 28 28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Mic dot */}
      <circle cx="27.5" cy="28.5" r="1.5" fill={color} />
      {/* Heart in center */}
      <path
        d="M16 22C16 22 12 19 12 16.5C12 15 13 14 14.5 14C15.3 14 16 14.8 16 14.8C16 14.8 16.7 14 17.5 14C19 14 20 15 20 16.5C20 19 16 22 16 22Z"
        fill={color}
        fillOpacity="0.35"
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  );
}

// ─── Reasons data ─────────────────────────────────────────────────────────────

const reasons = [
  {
    text: "Fast booking for everyday travel",
    icon: FastBookingIcon,
  },
  {
    text: "Verified and trusted service",
    icon: VerifiedIcon,
  },
  {
    text: "Affordable monthly plans and flexible ride options",
    icon: AffordableIcon,
  },
  {
    text: "Safe travel for students, women, professionals, and families",
    icon: SafeTravelIcon,
  },
  {
    text: "Customer-first support built around Karachi's real commuting needs",
    icon: SupportIcon,
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactWhy() {
  return (
    <div>
        <div className="flex justify-center mb-16">
            <div className="relative inline-block px-8 py-4">
              <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>
              <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
                Why QKTS?
              </h2>

             
            </div>
          </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {reasons.map(({ text, icon: Icon }) => (
          <div
            key={text}
            data-reveal-card
            className="group flex-1 flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-red-600 hover:shadow-md transition-all duration-300"
          >
            {/* Icon circle - transparent background */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Icon width={28} height={28} color="#fd0014" />
            </div>

            {/* Single-line text on desktop via whitespace-nowrap + overflow handling */}
            <p className="flex-1 text-sm lg:text-base text-gray-700 leading-6 transition-colors duration-300 break-words">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}