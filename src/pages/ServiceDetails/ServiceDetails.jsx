import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useLoaderData } from 'react-router-dom';
import detailsBanner from '../../assets/images/checkout/checkout.png'

const ServiceDetails = () => {

    const services= [
        {
            "name": "Full Car Repair"
        },
        {
            "name": "Engne Repair"
        },
        {
            "name": "Autometic Services"
        },
        {
            "name": "Engine Oil Change"
        },
        {
            "name": "Battery Change"
        }
    ]

    const service = useLoaderData()

    const { _id, title, img, price, description, facility } = service

    console.log(service)

    return (
        <div className=''>
            <div className="relative">
                <img className=' w-full h-60 mx-auto my-14' src={detailsBanner} alt="" />
                <h1 className="absolute text-5xl font-bold left-8 text-white top-1/2 -translate-y-1/2 transform">Service Details</h1>
                <Link to="/home"><button className="absolute rounded-t-btn left-24 bg-red-500 px-8 text-white bottom-0">Home / Service Details</button></Link>
            </div>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-4 text-left'>
                <div className=' col-span-3'>
                    <img className='h-96 w-full rounded-xl' src={img} alt="" />
                    <h1 className='text-4xl font-bold my-8'>{title}</h1>
                    <p className='text-wrap'>{description}</p>
                    <div>
                        <div className='grid lg:grid-cols-2 my-8 gap-4 grid-cols-1'>
                            {
                                facility.map(facilityOne => 
                                    <div 
                                        className='border-t-2 shadow-xl border-red-500 rounded-xl bg-slate-100 py-8 px-4'
                                        key={facilityOne.name}
                                    >
                                        <h1 className='font-bold text-lg'>{facilityOne.name}</h1>
                                        <p>{facilityOne.details}</p>
                                    </div>
                                )
                            }
                        </div>
                        <p className='text-wrap mb-8'>{description}</p>
                        
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='grid grid-rows-5 gap-2 bg-slate-200 rounded-xl p-8 '>
                        <h1 className='text-xl font-bold'>Services</h1>
                        {
                            services.map(service=> 
                                <div 
                                className="bg-slate-50 flex rounded-xl items-center justify-between p-3"
                                key={service.index}>
                                    <p className=''>{service.name}</p>
                                    <Link to={`https://carvilla-server.vercel.app/services/${service.name}`}><p className="text-xl text-red-600"><BiRightArrowAlt /></p></Link>
                                </div>
                            )
                        }
                    </div>
                    <h1 className="text-3xl font-bold my-4">Price ${price}</h1>
                    <Link to={`/checkout/${_id}`}><button className="btn text-white btn-error">Proceed Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;