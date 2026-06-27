import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQs from "../components/FAQs/FAQs";
import ServicesHero from "./Components/ServicesHero";
import ServicesIntro from "./Components/ServicesIntro";
import OurServices from "./Components/OurServices";
import ServiceProcess from "./Components/ServiceProcess";
import ServiceStats from "./Components/ServiceStats";
import WhyChooseUs from "./Components/WhyChooseUs";
import ServiceCTA from "./Components/ServiceCTA";

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <ServicesHero />
      {/* <ServicesIntro /> */}
      <OurServices />
      <ServiceProcess />
      <ServiceStats />
      <WhyChooseUs />
      <Testimonials />
      <FAQs />
      <ServiceCTA />
      <Footer />
    </div>
  );
}
