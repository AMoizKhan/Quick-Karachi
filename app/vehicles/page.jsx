// app/vehicles/page.js
import { Suspense } from "react";
import VehiclesPageClient from "./Vehiclespageclient";
import VehiclesHero from "./hero";
import Header from "../components/Header/Header";
import FAQs from "../components/FAQs/FAQs";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Vehicles | QKTS - Quick Karachi Transportation Service",
  description: "Browse and book vehicles by category.",
};

function VehiclesLoadingFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#14171C]">
      <p className="font-mono text-sm text-[#8B93A1]">Loading vehicles…</p>
    </main>
  );
}

export default function VehiclesPage() {
  return (
    <Suspense fallback={<VehiclesLoadingFallback />}>
      <Header />
      <VehiclesHero />
      <VehiclesPageClient />
      <FAQs />
      <Testimonials />
      <Footer />
    </Suspense>
  );
}
