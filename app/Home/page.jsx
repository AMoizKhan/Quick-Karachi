import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQs from "../components/FAQs/FAQs";
import ContactSection from "../components/Contact/ContactSection";
import Hero from "./Components/hero";
import ChooseRide from "./Components/ride";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import FeaturesSection from "./Components/FeaturesSection";
import ServiceStats from "../servicess/Components/ServiceStats";

export default function Mainpage() {
  return (
    <div>
      <Header />
      <Hero />
      <ChooseRide />
      <ServiceStats />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <FAQs />
      <ContactSection showFormOnly />
      <FeaturesSection/>
      <Footer />
    </div>
  );
}
