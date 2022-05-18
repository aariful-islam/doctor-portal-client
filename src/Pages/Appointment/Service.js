import React from 'react';

const Service = ({service}) => {
    const {name,slots}=service
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p> {slots.length} Available slots</p>
    
    <p>{slots}</p>
    <div class="card-actions justify-center bottom-0">
      <button class="btn btn-primary">Book Appointment</button>
    </div>
  </div>
</div>
            
            
        </div>
    );
};

export default Service;