import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, title, img, price} = service
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-base-200 duration-300">
            <figure>
                <img
                    src={img}
                    alt="services image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='font-semibold text-red-500'>Price: ${price}</h1>
                    </div>
                    <div >
                    
                    <Link to={`/checkout/${_id}`}>
                        <button className=" text-orange-600 text-xl "><BiRightArrowAlt /></button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;