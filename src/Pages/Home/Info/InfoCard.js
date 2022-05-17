import React from "react";

const InfoCard = ({img,cardTitle}) => {
  return (
    <div>
      <div class="card lg:card-side bg-accent text-white shadow-xl">
        <figure>
          <img
            src={img}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
         
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
