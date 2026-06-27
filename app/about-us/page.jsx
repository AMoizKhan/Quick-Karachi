import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutHero from "./Components/AboutHero";
import AboutIntro from "./Components/AboutIntro";
import WhoWeAre from "./Components/WhoWeAre";
import MissionVision from "./Components/MissionVision";
import OurPromises from "./Components/OurPromises";
import Leadership from "./Components/Leadership";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <AboutHero />
      <Leadership />
      <AboutIntro />
      <WhoWeAre />
      <MissionVision />
      <OurPromises />
      <Footer />
    </div>
  );
}
