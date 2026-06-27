export function CorporateIcon({ width = 42, height = 42, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      {/* Briefcase body */}
      <rect x="6" y="16" width="30" height="20" rx="3" fill={color} />
      {/* Briefcase handle */}
      <path
        d="M15 16V13C15 11.343 16.343 10 18 10H24C25.657 10 27 11.343 27 13V16"
        stroke={color}
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Center divider */}
      <rect
        x="6"
        y="23"
        width="30"
        height="2.5"
        fill="white"
        fillOpacity="0.25"
      />
      {/* Lock clasp */}
      <rect
        x="18.5"
        y="21"
        width="5"
        height="4"
        rx="1"
        fill="white"
        fillOpacity="0.5"
      />
      {/* Tie */}
      <polygon
        points="21,18 23,22 21,36 19,22"
        fill="white"
        fillOpacity="0.18"
      />
    </svg>
  );
}

export function WeddingIcon({ width = 42, height = 42, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      {/* Large heart */}
      <path
        d="M21 35C21 35 6 25 6 15.5C6 11.358 9.358 8 13.5 8C16.1 8 18.4 9.4 21 12C23.6 9.4 25.9 8 28.5 8C32.642 8 36 11.358 36 15.5C36 25 21 35 21 35Z"
        fill={color}
      />
      {/* Rings — left */}
      <circle
        cx="15"
        cy="10"
        r="3.5"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        fillOpacity="0.6"
      />
      {/* Rings — right overlapping */}
      <circle
        cx="19"
        cy="10"
        r="3.5"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        fillOpacity="0.6"
      />
      {/* Shine */}
      <circle cx="14" cy="17" r="2" fill="white" fillOpacity="0.2" />
    </svg>
  );
}

export function DriverCarIcon({ width = 42, height = 42, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      {/* Car body */}
      <rect x="4" y="22" width="34" height="12" rx="3.5" fill={color} />
      {/* Roof */}
      <path
        d="M10 22L14 12H28L32 22"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Windshield */}
      <path d="M14.5 22L17.5 14H24.5L27.5 22" fill="white" fillOpacity="0.22" />
      {/* Left wheel */}
      <circle cx="12" cy="34" r="4.5" fill="white" />
      <circle cx="12" cy="34" r="2.2" fill={color} />
      {/* Right wheel */}
      <circle cx="30" cy="34" r="4.5" fill="white" />
      <circle cx="30" cy="34" r="2.2" fill={color} />
      {/* Driver silhouette in window */}
      <circle cx="17" cy="17.5" r="2" fill={color} fillOpacity="0.5" />
      <path
        d="M14.5 22C14.5 20 15.6 18.5 17 18.5C18.4 18.5 19.5 20 19.5 22"
        fill={color}
        fillOpacity="0.3"
      />
      {/* Headlight */}
      <rect
        x="33"
        y="25"
        width="3"
        height="2"
        rx="1"
        fill="white"
        fillOpacity="0.7"
      />
      {/* Tail light */}
      <rect
        x="6"
        y="25"
        width="3"
        height="2"
        rx="1"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
}

export function SubscriptionIcon({
  width = 42,
  height = 42,
  color = "#fd0014",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      {/* Calendar base */}
      <rect x="5" y="10" width="32" height="27" rx="3.5" fill={color} />
      {/* Calendar top bar */}
      <rect x="5" y="10" width="32" height="8" rx="3.5" fill={color} />
      <rect x="5" y="14" width="32" height="4" fill={color} />
      {/* Top bar darker stripe */}
      <rect
        x="5"
        y="10"
        width="32"
        height="7"
        rx="3"
        fill="white"
        fillOpacity="0.15"
      />
      {/* Pin left */}
      <rect x="13" y="6" width="3" height="8" rx="1.5" fill={color} />
      {/* Pin right */}
      <rect x="26" y="6" width="3" height="8" rx="1.5" fill={color} />
      {/* Star (loyalty) */}
      <polygon
        points="21,17 23,22 28,22 24,25.5 25.5,31 21,27.5 16.5,31 18,25.5 14,22 19,22"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
}

export function PaymentIcon({ width = 42, height = 42, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      {/* Card body */}
      <rect x="4" y="10" width="34" height="22" rx="4" fill={color} />
      {/* Magnetic stripe */}
      <rect x="4" y="16" width="34" height="6" fill="white" fillOpacity="0.2" />
      {/* Chip */}
      <rect
        x="9"
        y="20"
        width="8"
        height="6"
        rx="1.5"
        fill="white"
        fillOpacity="0.5"
      />
      {/* Chip lines */}
      <line x1="13" y1="20" x2="13" y2="26" stroke={color} strokeWidth="1" />
      <line x1="9" y1="23" x2="17" y2="23" stroke={color} strokeWidth="1" />
      {/* Contactless waves */}
      <path
        d="M22 21C23.5 21 25 21.9 25 23"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 18C25.3 18 28 20 28 23"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 15C27 15 31 18.8 31 23"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* PKR label */}
      <text
        x="9"
        y="29"
        fontSize="6"
        fontWeight="bold"
        fontFamily="Arial"
        fill="white"
        fillOpacity="0.7"
      >
        ₨ PAY
      </text>
    </svg>
  );
}

export function BookingIcon({ width = 42, height = 42, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      {/* Phone body */}
      <rect x="11" y="4" width="16" height="28" rx="4" fill={color} />
      {/* Screen */}
      <rect
        x="13.5"
        y="7"
        width="11"
        height="18"
        rx="2"
        fill="white"
        fillOpacity="0.2"
      />
      {/* Home button */}
      <circle cx="19" cy="28" r="1.5" fill="white" fillOpacity="0.6" />
      {/* WhatsApp chat bubble */}
      <rect
        x="23"
        y="3"
        width="14"
        height="10"
        rx="3.5"
        fill={color}
        stroke="white"
        strokeWidth="1.5"
      />
      <polygon points="24,12 27,12 25,16" fill={color} />
      {/* Dots in bubble */}
      <circle cx="27" cy="8" r="1.2" fill="white" />
      <circle cx="30" cy="8" r="1.2" fill="white" />
      <circle cx="33" cy="8" r="1.2" fill="white" />
      {/* Checkmark on screen */}
      <path
        d="M15 15L17.5 18L23 12"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity="0.7"
      />
    </svg>
  );
}

export function FamilyTripIcon({ width = 42, height = 42, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      {/* Dad head */}
      <circle cx="11" cy="10" r="4" fill={color} />
      {/* Dad body */}
      <path
        d="M6 26C6 20.477 8.239 16 11 16C13.761 16 16 20.477 16 26H6Z"
        fill={color}
      />
      {/* Mom head */}
      <circle cx="31" cy="10" r="4" fill={color} />
      {/* Mom body / skirt */}
      <path
        d="M25 26C25 20.477 27.239 16 31 16C34.761 16 37 20.477 37 26H25Z"
        fill={color}
      />
      {/* Mom hair */}
      <path
        d="M27 8C27 5.5 29 4 31 4C33 4 35 5.5 35 8"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      {/* Child head */}
      <circle cx="21" cy="13" r="3" fill={color} />
      {/* Child body */}
      <path
        d="M17 26C17 21.582 18.791 18 21 18C23.209 18 25 21.582 25 26H17Z"
        fill={color}
      />
      {/* Ground */}
      <line
        x1="4"
        y1="28"
        x2="38"
        y2="28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Map pin */}
      <path
        d="M21 30C21 30 17 34 17 37C17 39.2 18.8 41 21 41C23.2 41 25 39.2 25 37C25 34 21 30 21 30Z"
        fill={color}
        fillOpacity="0.4"
      />
      <circle cx="21" cy="37" r="1.5" fill="white" fillOpacity="0.7" />
    </svg>
  );
}

export function WomenRideIcon({ width = 42, height = 42, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      {/* Shield */}
      <path
        d="M21 4L6 10V23C6 31 13 36.5 21 39C29 36.5 36 31 36 23V10L21 4Z"
        fill={color}
      />
      {/* Female symbol — circle */}
      <circle
        cx="21"
        cy="20"
        r="7"
        stroke="white"
        strokeWidth="2.2"
        fill="none"
      />
      {/* Female symbol — cross */}
      <line
        x1="21"
        y1="27"
        x2="21"
        y2="34"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <line
        x1="17"
        y1="30.5"
        x2="25"
        y2="30.5"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DailyRideIcon({ width = 42, height = 42, color = "#fd0014" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      {/* Road */}
      <rect
        x="4"
        y="30"
        width="34"
        height="6"
        rx="3"
        fill={color}
        fillOpacity="0.25"
      />
      {/* Dashes on road */}
      <rect
        x="10"
        y="32"
        width="5"
        height="2"
        rx="1"
        fill={color}
        fillOpacity="0.5"
      />
      <rect
        x="19"
        y="32"
        width="5"
        height="2"
        rx="1"
        fill={color}
        fillOpacity="0.5"
      />
      <rect
        x="28"
        y="32"
        width="5"
        height="2"
        rx="1"
        fill={color}
        fillOpacity="0.5"
      />
      {/* Car body */}
      <rect x="6" y="19" width="30" height="12" rx="3.5" fill={color} />
      {/* Roof */}
      <path
        d="M12 19L15 11H27L30 19"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Window */}
      <path d="M15.5 19L17.5 13H24.5L26.5 19" fill="white" fillOpacity="0.22" />
      {/* Left wheel */}
      <circle cx="13" cy="31" r="4" fill="white" />
      <circle cx="13" cy="31" r="2" fill={color} />
      {/* Right wheel */}
      <circle cx="29" cy="31" r="4" fill="white" />
      <circle cx="29" cy="31" r="2" fill={color} />
      {/* Sun / clock above — daily timing */}
      <circle cx="34" cy="8" r="4" fill={color} fillOpacity="0.35" />
      <line
        x1="34"
        y1="3"
        x2="34"
        y2="5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="34"
        y1="11"
        x2="34"
        y2="13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="29"
        y1="8"
        x2="31"
        y2="8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="37"
        y1="8"
        x2="39"
        y2="8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="34"
        y1="8"
        x2="34"
        y2="6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="34"
        y1="8"
        x2="36"
        y2="8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Services data ────────────────────────────────────────────────────────────

const services = [
  {
    title: "Corporate Transfers",
    description:
      "Travel with business associates and VIP clients in style with our premium executive car rental service in Karachi.",
    Icon: CorporateIcon,
  },
  {
    title: "Weddings",
    description:
      "Make your special day unforgettable with our luxury wedding transportation services.",
    Icon: WeddingIcon,
  },
  {
    title: "Car With Driver",
    description:
      "Enjoy a comfortable and stress-free journey with our experienced and professional drivers.",
    Icon: DriverCarIcon,
  },
  {
    title: "Subscription & Loyalty Plans",
    description:
      "Save more with our flexible monthly packages and exclusive loyalty rewards for regular customers.",
    Icon: SubscriptionIcon,
  },
  {
    title: "Flexible Payment Options",
    description:
      "Pay conveniently using cash, bank transfer, or digital payment methods that suit your needs.",
    Icon: PaymentIcon,
  },
  {
    title: "Easy Booking",
    description:
      "Book your ride within minutes through WhatsApp or a simple phone call with instant confirmation.",
    Icon: BookingIcon,
  },
  {
    title: "Family Trips",
    description:
      "Comfortable and spacious vehicles for family outings, vacations, shopping, and weekend trips.",
    Icon: FamilyTripIcon,
  },
  {
    title: "Women-Only Ride Service",
    description:
      "Safe and reliable transportation designed to provide women with peace of mind while traveling.",
    Icon: WomenRideIcon,
  },
  {
    title: "Daily Ride Service",
    description:
      "Reliable transportation for office commutes, school pickups, airport transfers, and everyday travel.",
    Icon: DailyRideIcon,
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-14">
            <div className="relative inline-block px-8 py-4">
              {/* Top Left Border */}
              <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>

              {/* Bottom Right Border */}
              <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
                Our Services
              </h2>
            </div>
          </div>
        
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              data-reveal-card
              className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-red-600 active:bg-red-600"
            >
              {/* Icon circle — white bg on hover, icon stays red */}
              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-white group-active:bg-white group-[.in-view]:bg-white transition-all duration-300 mx-auto">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Icon width={42} height={42} color="#fd0014" />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 text-center transition-colors duration-300 group-hover:text-white group-active:text-white">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 text-center leading-7 transition-colors duration-300 group-hover:text-white group-active:text-white">
                {description}
              </p>

              {/* Button */}
              <div className="mt-8 flex justify-center">
                <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 group-hover:bg-white group-hover:text-red-600 group-active:bg-white group-active:text-red-600 group-[.in-view]:bg-white group-[.in-view]:text-red-600">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
