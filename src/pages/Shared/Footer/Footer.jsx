import React from 'react';
import logo from '../../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content rounded-b-xl shadow-2xl p-10">
            <aside>
                <img className='ml-14' src={logo} alt="" />
                <div>
                
                <div className='ms-4'>
                <a className="font-bold font-serif text-3xl">Car<span className='text-red-600'>Villa</span></a>
                    <br />
                    Providing reliable tech since 1992
                </div>
                
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;