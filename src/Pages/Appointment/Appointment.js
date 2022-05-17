import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const Appointment = () => {
  return (
    <div style={{ backgroundImage: `url(${appointment})` }} className="flex justify-center items-center">
      <div
        className="flex-1 hidden lg:block"
        style={{ marginTop: "-140px" }}
      >
        <img src={doctor} alt="" />
      </div>
      <div className="text-white flex-1 justify-center items-center">
        <h1 className="text-4xl ">Appointment</h1>
        <h1 className="text-3xl py-6">Make an Appointment Today</h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
          nihil consequuntur. Neque perspiciatis recusandae tenetur, illum
          molestias in atque quidem a quibusdam sapiente ex ipsa quod, quis
          fugit beatae exercitationem autem optio facilis. Aliquid alias sit,
          doloremque possimus rerum, aut officia, molestiae ullam quaerat quidem
          repudiandae voluptatibus consequatur perferendis suscipit!
        </p>
        <button className="btn btn-primary">Make Appointment</button>
      </div>
    </div>
  );
};

export default Appointment;
