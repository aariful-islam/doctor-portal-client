import React from 'react';

const Service = ({service}) => {
    const {name,slots}=service
    return (
        <div className='mb-12'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p> {slots.length} Available slots</p>
    
    <p>
        {
            slots.length
            ?
            <span>{slots[0]}</span>
            :
            <span>No slot avaible</span>

        }
        
    </p>
    
    <div class="card-actions justify-center ">
      <button disabled={slots.length===0}  class="btn btn-primary mt-4">Book Appointment</button>
    </div>
  </div>
</div>
            
            
        </div>
    );
};

export default Service;