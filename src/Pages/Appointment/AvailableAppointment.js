import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";


const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
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
          services.map(service => <Service
            setTreatment={setTreatment}
            service={service} key={service.id}></Service>)
        }

      </div>
      {treatment && <BookingModal
      date={date}
      treatment={treatment}
      setTreatment={setTreatment}
      ></BookingModal>}

    </div>
  );
};

export default AvailableAppointment;
