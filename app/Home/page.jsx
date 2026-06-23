import React from "react";
import Header from "../components/header";
import Hero from "./Components/hero";
import ChooseRide from "./Components/ride";
import AboutSection from "./Components/AboutSection";

export default function Mainpage() {
    return (
        <div>
            <Header/>
            <Hero/>
            <ChooseRide/>
            <AboutSection/>
        </div>
    )
}