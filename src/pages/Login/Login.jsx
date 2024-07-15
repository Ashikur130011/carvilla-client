import React from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className='w-1/2'>
                    <img src={loginImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full lg:py-16 max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>Don't have account? Please <Link to="/register" className='text-blue-600'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;