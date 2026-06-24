import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ServicesHero from "./Components/ServicesHero";
import ServicesIntro from "./Components/ServicesIntro";
import OurServices from "./Components/OurServices";
import WhyChooseUs from "./Components/WhyChooseUs";

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <ServicesHero />
      <ServicesIntro />
      <OurServices />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
