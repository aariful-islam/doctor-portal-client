import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({date,setDate}) => {
  
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, 'PP')}.</p>;
  }
  return (
    <div>
      <div class="hero min-h-screen mr-20">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="mr-20">
            <DayPicker
             mode="single" 
             selected={date} 
             onSelect={setDate} 
             footer={footer}
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
