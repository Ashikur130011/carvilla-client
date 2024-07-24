import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
import { AuthContext } from '../../provider/AuthProvider';

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect( () => {
    //     fetch('https://carvilla-server.vercel.app/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // },[])
    useEffect(() => {
        setLoading(true);  // Set loading state to true before fetching
        fetch('https://carvilla-server.vercel.app/services')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(result => {
            setProducts(result);
            setLoading(false);  // Set loading state to false after fetching
          })
          
      }, []);

      if(loading){
        <span className="loading loading-ring loading-lg"></span>
      }
      
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