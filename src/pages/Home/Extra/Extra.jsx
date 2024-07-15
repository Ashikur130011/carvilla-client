import React from 'react';
import { FcOvertime } from "react-icons/fc";
import location from '../../../assets/location-pin_1189448.png';
import call from '../../../assets/call.png'

const Extra = () => {
    return (
        <div className='bg-black lg:flex justify-evenly py-16 my-16 rounded-xl p-3 lg:w-4/5 mx-auto overflow-x-auto'>
            <div className='flex items-center gap-4'>
                <div className='text-5xl'>
                <FcOvertime />
                </div>
                <div className='text-start'>
                    <p className=' text-white'>We are open monday-friday</p>
                    <p className='text-3xl font-bold text-white'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex items-center gap-4 my-4'>
            <div className='text-5xl'>
            <img className='w-11' src={call} alt="" />
                </div>
                <div className='text-start'>
                    <p className=' text-white'>Have a Question?</p>
                    <p className='text-3xl font-bold text-white'>+2546 889 6888</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <img className='w-11' src={location} alt="" />
                </div>
                <div className='text-start'>
                    <p className=' text-white'>Need to repair? Our address</p>
                    <p className='text-3xl font-bold text-white'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Extra;