import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        title: 'Opening',
        description: 'open 7 days and 24 hours',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Location',
        description: 'bhurugamari ,kurigram, Bangladesh',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+880179300000',
        icon: faPhone,
        background: 'primary'
    }
]

const ContactInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row-75 row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default ContactInfo;