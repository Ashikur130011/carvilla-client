import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext) 

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )

    //Update State on toggle
    const handleToggle = e => {
        if(e.target.checked){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }

    useEffect ( () => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.documentElement.setAttribute("data-theme", localTheme)
    },[theme])

    //handle Logout
    const handleLogOut = () => {
        logOut()   
    }

    //navlinks
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li className='ml-2'><NavLink  to="/services">Services</NavLink></li>
        <li className='ml-2'><NavLink  to="/about">About</NavLink></li>
        <li className='ml-2'><NavLink  to="/contact">Contact</NavLink></li>
        {
            user && <li className='ml-2'><NavLink  to="/booking">My Bookings</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 rounded-t-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div className='ms-4'>
                <a className="font-bold font-serif text-3xl">Car<span className='text-red-600'>Villa</span></a>
                <input type="checkbox"
                    onChange={handleToggle}
                    checked={theme === "light" ? false : true}
                    className='toggle mx-3 theme-controller'
                />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            
            {
                user ? <>
                    <div className=''>
                    <img className='rounded-full w-12 mx-auto' src={user.photoURL} alt="" />
                    <p>{user?.displayName}</p>
                    </div>
                    <button onClick={handleLogOut} className='btn btn-outline btn-error ms-3'>Log Out</button>
                </>:
                    <NavLink className='btn btn-success'  to="/login">Login</NavLink>
            }
            </div>
        </div>
    );
};

export default Navbar;