import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6 m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dolorem molestias, iure quasi dignissimos
              necessitatibus sint quod at rerum distinctio non illo accusantium
              totam nihil nam nulla magnam reiciendis officia sit est? Vitae
              commodi perferendis tenetur, ea, sed, voluptatibus quibusdam eius
              laboriosam aliquid vel illum? Officia repudiandae architecto nemo
              consectetur.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
