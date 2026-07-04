// app/vehicles/VehiclesPageClient.jsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import VehicleDetails from "../components/Categories of Car/Vehicledetails";
import VehicleCard from "../components/Categories of Car/Vehiclecard";
import { getCategoryMeta, getVehiclesByCategory } from "../data/vehicles";
import VehiclesBanner from "./banner";
// import VehicleCard from "@/components/VehicleCard";
// import VehicleDetails from "@/components/VehicleDetails";
// import { getVehiclesByCategory, getCategoryMeta } from "@/data/vehicles";

export default function VehiclesPageClient() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  const [categoryVehicles, setCategoryVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Re-derive the vehicle list whenever the category in the URL changes,
  // and default-select the first vehicle in that list.
  useEffect(() => {
    const list = getVehiclesByCategory(category);
    setCategoryVehicles(list);
    setSelectedVehicle(list.length > 0 ? list[0] : null);
  }, [category]);

  const categoryMeta = getCategoryMeta(category);

  return (
    <main className="min-h-screen bg-white pb-20 ">
      {/* Header */}
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* <Link
            href="/"
            className="mb-3 inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-brand"
          >
            &larr; Back to Categories
          </Link> */}
          <p className="font-heading text-[11px] uppercase tracking-[0.18em] text-[#fd0014]">
            {categoryMeta?.tagline}
          </p>
          <h1 className="mt-1 font-heading text-3xl font-semibold text-black sm:text-4xl">
            {category || "All Vehicles"}
          </h1>
        </div>
      </div>

      <div className="mx-auto  px-4 pt-8 sm:px-6 lg:px-8">
        {categoryVehicles.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center text-black ring-1 ring-black/10 shadow-sm">
            <p className="text-black">
              No vehicles found for this category yet.
            </p>
            <Link
              href="/"
              className="mt-4 inline-block text-sm font-medium text-[#fd0014] hover:underline"
            >
              Browse other categories
            </Link>
          </div>
        ) : (
          <>
            {/* Vehicle selector row */}
            <div className="mb-10 grid  grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-10 xl:grid-cols-5">
              {categoryVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  isActive={selectedVehicle?.id === vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle)}
                />
              ))}
            </div>

            {/* Selected vehicle details */}
            <VehicleDetails vehicle={selectedVehicle} />
          </>
        )}
      </div>

      {/* "Looking for a different vehicle?" CTA banner */}
      <VehiclesBanner />
    </main>
  );
}
