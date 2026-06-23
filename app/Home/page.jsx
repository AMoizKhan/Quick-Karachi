import React from "react";
import Header from "../components/header";
import Hero from "./Components/hero";
import ChooseRide from "./Components/ride";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";

export default function Mainpage() {
    return (
        <div>
            <Header/>
            <Hero/>
            <ChooseRide/>
            <AboutSection/>
            <ServicesSection/>
        </div>
    )
}