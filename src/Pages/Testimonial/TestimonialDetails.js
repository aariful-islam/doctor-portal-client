import React from 'react';

const TestimonialDetails = ({testimonial}) => {
    const {name,img,description}=testimonial
    return (
        <div className='shadow-slate-200 border-2 p-5'>
            <div className='flex items-center gap-7'>
            <img src={img} alt="" />
            <h1 className='text-xl text-black'>{name}</h1>

            </div>
            
            
            <h1>{description}</h1>
            
        </div>
    );
};

export default TestimonialDetails;