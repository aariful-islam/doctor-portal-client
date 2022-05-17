import React, { useEffect, useState } from "react";
import TestimonialDetails from "./TestimonialDetails";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div>
      <div className="m-12">
        <h1 className="text-4xl text-center">Testimonials</h1>
        <p className="text-2xl text-center">Our Customer Says</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 m-10'>
      {testimonials.map((testimonial) => (
        <TestimonialDetails
          key={testimonial.id}
          testimonial={testimonial}
        ></TestimonialDetails>
      ))}
      </div>
      
    </div>
  );
};

export default Testimonial;
