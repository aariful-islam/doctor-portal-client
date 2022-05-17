import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import InfoCard from './InfoCard';
import map from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            <InfoCard description="10am-11pm" cardTitle="Opening hours" img={clock}></InfoCard>
            <InfoCard description="Dhaka-1216" cardTitle="Visit our location" img={map}></InfoCard>
            <InfoCard description="0199999999" cardTitle="Contact us" img={phone}></InfoCard>
            
        </div>
    );
};

export default Info;