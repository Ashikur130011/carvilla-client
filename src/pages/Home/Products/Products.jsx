import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='space-y-6 my-24'>
            <h2 className='text-xl font-bold text-orange-600'>Popular Products</h2>
            <h1 className='text-5xl font-bold'>Browse Our Products</h1>
            <p className=' mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable.</p>
            <div className='grid grid-cols-1  md:grid-cols-2 mx-5 lg:grid-cols-3  gap-8 justify-items-center'>
                {
                    products.slice(1.9).map(product => <Product
                        product={product}
                        key={product._id}
                    ></Product>)
                }
            </div>
            <div className='pt-8'>
            <button className="btn btn-outline btn-error">More Products</button>
            </div>
        </div>
    );
};

export default Products;