import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";


const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <p className="text-2xl text-center">
        Avaible Services for : {format(date, "PP")}.
      </p>
      <p className="text-xl text-center">Please select a service</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 md:grid-cols-2">
      {
          services.map(service=> <Service service={service} key={service.id}></Service>)
      }

      </div>
    
    </div>
  );
};

export default AvailableAppointment;
