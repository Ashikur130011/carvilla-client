import { useContext, useEffect, useState } from 'react';
import Service from '../Service/Service';
import { AuthContext } from '../../provider/AuthProvider';
const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect( () => {

    //     fetch('https://carvilla-server.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[])

    useEffect(() => {
        setLoading(true);  // Set loading state to true before fetching
        fetch('https://carvilla-server.vercel.app/services')
          .then(response =>  response.json())
          .then(result => {
            setServices(result);
            setLoading(false);  // Set loading state to false after fetching
          })
          
      }, [loading]);

      if(loading){
        <span className="loading loading-ring loading-lg"></span>
      }

    return (
        <div className='space-y-6 my-24'>
            <h2 className='text-xl font-bold text-orange-600'>Service</h2>
            <h1 className='text-5xl font-bold'>Our Service Area</h1>
            <p className=' mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable.</p>
            <div className='md:mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                {
                    services.map(service => <Service 
                        key={service._id}
                        service={service}
                        ></Service>)
                }
            </div>
            <div className='pt-8'>
            <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default Services;