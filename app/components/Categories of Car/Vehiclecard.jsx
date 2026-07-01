// components/VehicleCard.jsx
import Image from "next/image";

export default function VehicleCard({ vehicle, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={[
        "group relative flex w-full flex-shrink-0 flex-col overflow-hidden rounded-xl text-left transition-all duration-300 sm:w-44",
        isActive
          ? "ring-2 ring-[#C9A15C] shadow-[0_10px_30px_-10px_rgba(201,161,92,0.5)]"
          : "ring-1 ring-white/10 hover:ring-white/30",
      ].join(" ")}
    >
      <div className="relative h-28 w-full overflow-hidden bg-[#1E2229] sm:h-24">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          sizes="180px"
          className={[
            "object-cover transition-transform duration-500",
            isActive ? "scale-105" : "group-hover:scale-105",
          ].join(" ")}
        />
        <div
          className={[
            "absolute inset-0 transition-opacity duration-300",
            isActive ? "bg-[#C9A15C]/10" : "bg-[#14171C]/30 group-hover:bg-[#14171C]/10",
          ].join(" ")}
        />
      </div>

      <div
        className={[
          "flex flex-col gap-0.5 px-3 py-2",
          isActive ? "bg-[#1E2229]" : "bg-[#1A1D23]",
        ].join(" ")}
      >
        <span
          className={[
            "truncate text-sm font-medium",
            isActive ? "text-[#F2EFE9]" : "text-[#C7CBD3]",
          ].join(" ")}
        >
          {vehicle.name}
        </span>
        <span className="font-mono text-xs text-[#C9A15C]">
          PKR {vehicle.pricePerDay.toLocaleString()}/day
        </span>
      </div>

      {isActive && (
        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A15C] text-[10px] font-bold text-[#14171C]">
          ✓
        </span>
      )}
    </button>
  );
}