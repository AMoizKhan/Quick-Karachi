import IconPlaceholder from "../IconPlaceholder/IconPlaceholder";

const reasons = [
  "Fast booking for everyday travel",
  "Verified and trusted service",
  "Affordable monthly plans and flexible ride options",
  "Safe travel for students, women, professionals, and families",
  "Customer-first support built around Karachi’s real commuting needs",
];

export default function ContactWhy() {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Why Contact QKTS?
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reasons.map((reason) => (
          <div
            key={reason}
            className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              <IconPlaceholder
                src="/icons/professional-driver.svg"
                alt="Professional Driver"
                width={32}
                height={32}
              />
            </div>
            <p className="text-gray-700 leading-7 pt-2">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
