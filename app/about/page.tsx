import React from "react";
import AboutSection from "./components/AboutSection";
import TournamentRules from "./components/TournamentRules";
import Footer from "@/components/Footer";
import Overview from "./components/Overview";
import Ready from "./components/Ready";

const About = () => {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <TournamentRules />
      <Overview />
      <Ready />
      <Footer className="md:sticky bottom-0 z-10"/>
    </div>
  );
};

export default About;
