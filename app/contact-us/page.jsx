import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/Contact/ContactSection";
import ContactHero from "./Components/ContactHero";

export default function ContactPage() {
  return (
    <div>
      <Header />
      {/* <ContactHero /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
