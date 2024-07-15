import React from 'react';

const Service = ({service}) => {
    const {_id, title, img, price} = service
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="services image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                
                <div className='flex justify-between'>
                    <div>
                        <h1 className='font-semibold'>Price: ${price}</h1>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;