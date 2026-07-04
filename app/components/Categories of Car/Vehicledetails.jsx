
"use client";

import Image from "next/image";
import Link from "next/link";

function BooleanBadge({ value }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        value
          ? "border-green-600/30 bg-green-50 text-green-700"
          : "border-black/10 bg-gray-100 text-gray-500",
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 rounded-full",
          value ? "bg-green-600" : "bg-gray-400",
        ].join(" ")}
      />
      {value ? "Available" : "Not Available"}
    </span>
  );
}

function SpecRow({ label, value, isLast, striped }) {
  return (
    <tr className={[isLast ? "" : "border-b border-red-600/15", striped ? "bg-red-50/40" : "bg-white"].join(" ")}>
      <th
        scope="row"
        className="w-1/2 py-3 pl-5 pr-4 text-left text-sm font-medium text-black/60 sm:w-2/5"
      >
        {label}
      </th>
      <td className="py-3 pr-5 text-sm font-medium text-black">{value}</td>
    </tr>
  );
}

export default function VehicleDetails({ vehicle }) {
  if (!vehicle) return null;

  const rows = [
    { label: "Vehicle Name", value: vehicle.name },
    { label: "Seating Capacity", value: `${vehicle.seatingCapacity} Passengers` },
    { label: "Air Conditioning", value: <BooleanBadge value={vehicle.airConditioning} /> },
    { label: "Price Per Day", value: `PKR ${vehicle.pricePerDay.toLocaleString()}` },
    { label: "Maximum Rental Hours", value: `${vehicle.maxRentalHours} Hours` },
    // { label: "Fuel Policy", value: vehicle.fuelPolicy },
    { label: "Description", value: vehicle.description },
    { label: "Pick & Drop Availability", value: <BooleanBadge value={vehicle.pickDrop} /> },
    { label: "Corporate Booking", value: <BooleanBadge value={vehicle.corporateBooking} /> },
    { label: "In-City Service", value: <BooleanBadge value={vehicle.inCityService} /> },
    { label: "Out-of-City Service", value: <BooleanBadge value={vehicle.outCityService} /> },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
      {/* Large image */}
      <div className="lg:col-span-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-red-600 bg-white ">
          <Image
            key={vehicle.id}
            src={vehicle.imageLarge || vehicle.image}
            alt={vehicle.name}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
            className="object-contain p-6 animate-[fadeIn_0.4s_ease]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-white">
            {vehicle.category}
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-black sm:text-3xl">
              {vehicle.name}
            </h2>
            <p className="mt-1 text-sm text-black/60">
              {vehicle.seatingCapacity} seats &middot; {vehicle.fuelPolicy}
            </p>
          </div>
          <div className="text-right">
            <p className="font-heading text-2xl font-semibold text-red-600">
              PKR {vehicle.pricePerDay.toLocaleString()}
            </p>
            <p className="text-xs text-black/50">per day</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-black/70">
          {vehicle.description}
        </p>
      </div>

      {/* Spec sheet */}
      <div className="lg:col-span-2">
        <div className="overflow-hidden rounded-2xl border-2 border-red-600 bg-white shadow-[0_10px_30px_-12px_rgba(220,38,38,0.25)]">
          <div className="border-b-2 border-red-600 bg-red-600 px-5 py-4 sm:px-6">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              Vehicle Spec Sheet
            </p>
          </div>

          <table className="w-full border-collapse">
            <tbody>
              {rows.map((row, i) => (
                <SpecRow
                  key={row.label}
                  label={row.label}
                  value={row.value}
                  striped={i % 2 === 1}
                  isLast={i === rows.length - 1}
                />
              ))}
            </tbody>
          </table>

          <div className="p-5 pt-4 sm:p-6 sm:pt-4">
            <Link
              href="/contact-us"
              className="flex w-full items-center justify-center rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}