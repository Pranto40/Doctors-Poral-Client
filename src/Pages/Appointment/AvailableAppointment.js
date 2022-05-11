import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const url = 'services.json';
const AvailableAppointment = ({date}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [services, setSercices] = useState([]);

    const fetchData = async (url) => {
        setIsLoading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            setSercices(data);
            setIsLoading(false);
            setError(null);
        }
        catch{
            setIsLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [])
    return (
        <div>
            {isLoading && <h2>Loadding.......</h2>}
            {error && <h2>{error.message}</h2>}
            <h4 className='text-xl text-secondary text-center'>Available appointment on {format(date, 'pp')}</h4>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;