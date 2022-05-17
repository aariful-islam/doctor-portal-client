import React from "react";

const ServicesCards = ({ img, description, title }) => {
  return (
    <div class="card w-100 glass">
      <figure>
        <img src={img} alt="car!" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aspernatur?</p>
        
      </div>
    </div>
  );
};

export default ServicesCards;
