// app/vehicles/VehiclesPageClient.jsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import VehicleDetails from "../components/Categories of Car/Vehicledetails";
import VehicleCard from "../components/Categories of Car/Vehiclecard";
import { getCategoryMeta, getVehiclesByCategory } from "../data/vehicles";
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
      <div className="border-b border-border bg-subtle">
        <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* <Link
            href="/"
            className="mb-3 inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-brand"
          >
            &larr; Back to Categories
          </Link> */}
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
            {categoryMeta?.tagline || "Vehicle Fleet"}
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {category || "All Vehicles"}
          </h1>
        </div>
      </div>
 
      <div className="mx-auto  px-4 pt-8 sm:px-6 lg:px-8">
        {categoryVehicles.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center text-black ring-1 ring-border shadow-card">
            <p className="text-ink">
              No vehicles found for this category yet.
            </p>
            <Link
              href="/"
              className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
            >
              Browse other categories
            </Link>
          </div>
        ) : (
          <>
            {/* Vehicle selector row */}
            <div className="mb-10 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
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
    </main>
  );
}