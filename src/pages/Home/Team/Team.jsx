import React from 'react';
import image1 from '../../../assets/images/team/1.jpg'
import image2 from '../../../assets/images/team/2.jpg'
import image3 from '../../../assets/images/team/3.jpg'
import { FcGoogle } from "react-icons/fc";
import facebook from '../../../assets/icons/facebook_145802.png'
import instagram from '../../../assets/icons/instagram_4494488.png'
import twitter from '../../../assets/icons/twitter_145812.png'
import whatsapp from '../../../assets/icons/whatsapp_4494494.png'

const Team = () => {
    return (
        <div className='space-y-6 my-24'>
            <h2 className='text-xl font-bold text-orange-600'>Team</h2>
            <h1 className='text-5xl font-bold'>Meet Our Team</h1>
            <p className=' mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable.</p>
            <div className='md:mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
            <div className="card bg-base-100 w-96 shadow-xl transition ease-in-out delay-150 hover:scale-110 hover:bg-base-200 duration-300">
            <figure className="px-10 pt-10">
                <img
                    src={image1}
                    alt="Shoes"
                    className="rounded-xl border" />
            </figure>
            <div className="card-body items-center text-center">
                
                <h2 className="card-title font-bold text-3xl ">Car Engine Plug</h2>
                <p>Engine Expart</p>
                <div className='flex gap-2'>
                {/* <FcGoogle /> */}
                <img className='w-8' src={whatsapp} alt="" />
                <img className='w-8' src={facebook} alt="" />
                <img className='w-8' src={twitter} alt="" />
                <img className='w-8' src={instagram} alt="" />
               

                </div>
            </div>
        </div>
            <div className="card bg-base-100 transition ease-in-out delay-150  hover:scale-110 hover:bg-base-200 duration-300 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image2}
                    alt="Shoes"
                    className="rounded-xl border" />
            </figure>
            <div className="card-body items-center text-center">
                
                <h2 className="card-title font-bold text-3xl ">Car Engine Plug</h2>
                <p>Engine Expart</p>
                <div className='flex gap-2'>
                {/* <FcGoogle /> */}
                <img className='w-8' src={whatsapp} alt="" />
                <img className='w-8' src={facebook} alt="" />
                <img className='w-8' src={twitter} alt="" />
                <img className='w-8' src={instagram} alt="" />
               

                </div>
            </div>
        </div>
            <div className="card transition ease-in-out delay-150 hover:scale-110 hover:bg-base-200 duration-300 bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image3}
                    alt="Shoes"
                    className="rounded-xl border" />
            </figure>
            <div className="card-body items-center text-center">
                
                <h2 className="card-title font-bold text-3xl ">Car Engine Plug</h2>
                <p>Engine Expart</p>
                <div className='flex gap-2'>
                {/* <FcGoogle /> */}
                <img className='w-8' src={whatsapp} alt="" />
                <img className='w-8' src={facebook} alt="" />
                <img className='w-8' src={twitter} alt="" />
                <img className='w-8' src={instagram} alt="" />
               

                </div>
            </div>
        </div>
            </div>
            
        </div>
    );
};

export default Team;