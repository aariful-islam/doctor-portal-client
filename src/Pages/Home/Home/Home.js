import React from 'react';
import Appointment from '../../Appointment/Appointment';
import Contact from '../../Contact/Contact';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;