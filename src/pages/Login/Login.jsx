import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle} from "react-icons/fc";

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => {
            console.log(err.message)
            console.log(err.code)
        })
    }


    const handlelogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className='w-1/2'>
                    <img src={loginImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full lg:py-16 max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handlelogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>Don't have account? Please <Link to="/register" className='text-blue-600'>Register</Link></p>
                        </div>
                        <p>or</p>
                    </form>
                        <div className=''>
                            <button onClick={handleGoogleLogin} className="btn text-green-700">
                                <FcGoogle className='text-3xl me-4'/>
                                Continue with Google
                            </button>
        
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;