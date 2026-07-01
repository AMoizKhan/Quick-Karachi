// app/vehicles/page.js
import { Suspense } from "react";
import VehiclesPageClient from "./Vehiclespageclient";
import Header from "../components/Header/Header";
import FAQs from "../components/FAQs/FAQs";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Hero from "../Home/Components/hero";

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
      <Hero />
      <VehiclesPageClient />
      <FAQs />
      <Testimonials />
      <Footer />
    </Suspense>
  );
}
