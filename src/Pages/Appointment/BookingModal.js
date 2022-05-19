import React from "react";
import { format } from "date-fns";
const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />

      <div class="modal modal-bottom sm:modal-middle">

        <div class="modal-box">
          <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">Booking for {name}

          </h3>
          <form action="" className="grid grid-cols-1 gap-3 justify-items-center mt-4">

            <input type="text" disabled value={format(date, "PP")} class="input input-bordered w-full max-w-xs" />
            <select class="select select-bordered w-full max-w-xs">
              {
                slots.map(slot=><option value={slot}>{slot}</option>)
              }
              
            </select>
            <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
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
