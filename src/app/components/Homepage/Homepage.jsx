import React from "react";
import HeroBanner from "./HeroBanner";
import About from "./About";
import ServiceCard from "./ServiceCard";

const Homepage = () => {
  return (
    <div>
      <HeroBanner />
      <About />
      <ServiceCard
        title="Service"
        header="Our Service Area"
        dis="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></ServiceCard>
    </div>
  );
};

export default Homepage;
