import React from "react";
import { format } from "date-fns";
const BookingModal = ({ treatment, date,setTreatment }) => {
  const {_id, name, slots } = treatment
  const formatedDate = format(date,'pp')
  const handleBooking=e=>{
    e.preventDefault();
    const slot=e.target.slot.value;
     const email=e.target.email.value;
     const name=e.target.name.value;
     const phone =e.target.phone.value
     const booking ={
       
       treatmentId:_id,
       treatment:name,
       date:formatedDate,
       slot,
       patient:email,
       patientName:name,
       phone:phone

     }
     fetch('http://localhost:4000/booking', {
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(booking)
  })
  .then(res=>res.json())
  .then(data=>{
    alert('added succesfully')
    console.log(data);
  })


     setTreatment(null)
     
  }
  


  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />

      <div class="modal modal-bottom sm:modal-middle">

        <div class="modal-box">
          <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">Booking for {name}

          </h3>
          <form onSubmit={handleBooking} action="" className="grid grid-cols-1 gap-3 justify-items-center mt-4">

            <input type="text" disabled value={format(date, "PP")} class="input input-bordered w-full max-w-xs" />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {
                slots.map(slot=><option value={slot}>{slot}</option>)
              }
              
            </select>
            <input type="email" name="email" placeholder="Type email" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="name" placeholder="Type name" class="input input-bordered w-full max-w-xs" />
            <input type="number" name="phone" placeholder="Type Phone Nubmer" class="input input-bordered w-full max-w-xs" />
            <input type="submit" placeholder="Type here" class="btn btn-primary" />
          </form>

          {/* <p class="py-4">
            {slots}
          </p> */}

        </div>
      </div>
    </div>
  );
};

export default BookingModal;
