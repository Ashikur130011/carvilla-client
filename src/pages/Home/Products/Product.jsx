import React from 'react';
import { IoStar } from "react-icons/io5";

const Product = ({product}) => {
    const {name, image, rating, price} = product
    return (
        <div className="card bg-base-100 w-96 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-base-200 duration-300 ">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-60  w-80 border" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex gap-1 text-yellow-400'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                </div>
                <h2 className="card-title font-bold text-3xl ">{name}</h2>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Product;