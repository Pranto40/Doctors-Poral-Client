import React from 'react';
import Fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
import Treatment from './Treatment';

const Services = () => {
    const Services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: Fluoride
        },
        {
            _id: 2,
            name: 'Cavity filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth whitening',
            description: '',
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'>
                {
                    Services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
            <div>
                <Treatment />
            </div>
        </div>
    );
};

export default Services;