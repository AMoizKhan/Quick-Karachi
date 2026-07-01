// components/CategoryCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ title, image, tagline, description }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#1E2229] ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:ring-[#C9A15C]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden sm:h-56">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171C] via-[#14171C]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A15C]">
          {tagline}
        </span>
        <h3 className="font-display text-xl font-semibold text-[#F2EFE9]">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[#8B93A1]">
          {description}
        </p>

        <Link
          href={`/vehicles?category=${encodeURIComponent(title)}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#C9A15C]/50 bg-transparent px-4 py-2.5 text-sm font-medium text-[#C9A15C] transition-colors duration-200 hover:bg-[#C9A15C] hover:text-[#14171C]"
        >
          View Vehicles
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}