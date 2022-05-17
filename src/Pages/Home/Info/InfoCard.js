import React from "react";

const InfoCard = ({img,cardTitle,description,bg}) => {
  return (
    <div>
      <div class={`m-4 card lg:card-side text-white shadow-xl ${bg}`} >
        <figure>
          <img
            src={img}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{cardTitle}</h2>
          <p>{description}</p>
         
        </div>
      </div>
    </div>
  );
};
 
export default InfoCard;
