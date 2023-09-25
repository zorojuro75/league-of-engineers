import React from "react";
import AboutSection from "./components/AboutSection";
import TournamentRules from "./components/TournamentRules";
import Overview from "./components/Overview";
import Ready from "./components/Ready";

const About = () => {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <TournamentRules />
      <Overview />
      <Ready />
    </div>
  );
};

export default About;
