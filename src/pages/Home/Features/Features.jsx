import React from 'react';
import team1 from '../../../assets/icons/person.svg'
import team2 from '../../../assets/icons/deliveryt.svg'
import team3 from '../../../assets/icons/Group 38729.svg'
import team4 from '../../../assets/icons/group.svg'
import team5 from '../../../assets/icons/Wrench.svg'
import team6 from '../../../assets/icons/check.svg'

const Features = () => {
    return (
        <div className='my-24'>
            <div className='space-y-6  mb-16'>
            <h2 className='text-xl font-bold text-orange-600'>Core Features</h2>
            <h1 className='text-5xl font-bold'>Why Choose Us</h1>
            <p className=' mx-auto '>The majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable.</p>
            </div>
            <div className='grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:w-2/3 mx-auto'>
                <div className='bg-base-100 border-1 shadow-xl hover:bg-red-500 hover:text-white p-8 transition ease-in-out delay-150 hover:-translate-y-8 hover:scale-110 duration-300 rounded-xl'>
                    <img className='lg:ps-10' src={team1} alt="" />
                    <p className='font-bold mt-3'>24/7 Support</p>
                </div>
                <div className='bg-base-100 border-1 shadow-xl hover:bg-red-500 hover:text-white p-8 transition ease-in-out delay-150 hover:-translate-y-8 hover:scale-110  duration-300 rounded-xl'>
                    <img className='lg:ps-7' src={team2} alt="" />
                    <p className='font-bold mt-3'>Timely Delivery</p>
                </div>
                <div className='bg-slate-300 border-1 shadow-xl hover:bg-red-500 hover:text-white p-8 transition ease-in-out delay-150 hover:-translate-y-8 hover:scale-110  duration-300 rounded-xl'>
                    <img className='ps-7' src={team3} alt="" />
                    <p className='font-bold mt-3'>Best Equipment</p>
                </div>
                <div className='bg-base-100 border-1 shadow-xl hover:bg-red-500 hover:text-white p-8 transition ease-in-out delay-150 hover:-translate-y-8 hover:scale-110  duration-300 rounded-xl'>
                    <img className='lg:ps-7' src={team4} alt="" />
                    <p className='font-bold mt-3'>Expert Team</p>
                </div>
                <div className='bg-base-100 border-1 shadow-xl hover:bg-red-500 hover:text-white p-8 transition ease-in-out delay-150 hover:-translate-y-8 hover:scale-110  duration-300 rounded-xl'>
                    <img className='lg:ps-8' src={team5} alt="" />
                    <p className='font-bold mt-3'>100% Guranty</p>
                </div>
                <div className='bg-base-100 border-1 shadow-xl hover:bg-red-500 hover:text-white p-8 transition ease-in-out delay-150 hover:-translate-y-8 hover:scale-110  duration-300 rounded-xl'>
                    <img className='ps-8' src={team6} alt="" />
                    <p className='font-bold mt-3'>Timely Delivery</p>
                </div>
                
            </div>
        </div>
    );
};

export default Features;