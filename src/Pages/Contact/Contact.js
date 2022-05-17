import React from 'react';
import bg from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`}}>
            <h1 className='text-center text-3xl text-white'>Contact us</h1>
            <h1 className='text-center text-2xl text-white'> Stay Connected with us</h1>
            <form action="" className='text-center p-4'>
                <input className='m-4 w-96 p-4' type="email" placeholder='Enter your email' /> <br />
                <input className='m-4 w-96 p-4' type="text" placeholder='subject' name="" id="" /> <br />
                <textarea name="" id="" cols="50" rows="10" placeholder='Your message'></textarea> <br />
                <input className='btn btn-primary' type="submit" value="submit" />
            </form>

        </div>
    );
};

export default Contact;