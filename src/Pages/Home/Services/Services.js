import React from "react";
import ServicesCards from "./ServicesCards";
import flouride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  return (
    <div>
      <h2 className="text-5xl text-center mb-4 m-3">Our services</h2>
      <p className="text-3xl text-center mb-4 m-3">The services we provide </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ServicesCards title="Flouride Treatment" img={flouride}></ServicesCards>
        <ServicesCards title="Cavity filling" img={cavity}></ServicesCards>
        <ServicesCards title="Teeth Whitening" img={whitening}></ServicesCards>
      </div>
    </div>
  );
};

export default Services;
