import React from 'react';
import aboutImag1 from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='hero my-6'>
            <div className='hero-content flex-col gap-16 lg:flex-row'>
                <div className='relative'>
                    <img className='rounded-lg shadow-xl w-5/6' src={aboutImag1} alt="" />
                    <img className='rounded-lg border-8 border-white absolute w-1/2 top-1/2 right-5  shadow-xl' src={parts} alt="" />
                </div>
                <div className='text-start space-y-5'>
                    <h3 className='text-xl font-bold text-orange-600'>About Us</h3>
                    <h1 className='text-5xl font-bold'>We are qualified & of experience in this field</h1>
                    <p className=''>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br />
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className='btn btn-error'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;