import { useContext } from 'react';
import detailsBanner from '../../assets/images/checkout/checkout.png'
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
    const {user, loading} = useContext(AuthContext)
    const service = useLoaderData()
    const navigate = useNavigate()
    const {title, price, _id, img } = service

    if(loading){
        <span className="loading loading-ring loading-lg"></span>
    }

    
    const handleCheckout = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        const message = form.message.value
        const order = {
            CustomerName: name,
            date,
            img,
            email,
            booking_id: _id,
            price:price,
            service: title,
            message
        }

        
        console.log(order)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Checkout done!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
                form.reset()
                navigate('/booking')
        })

    }

    return (
        <div className=''>
            <div className="relative">
                <img className=' w-full h-60 mx-aut my-14' src={detailsBanner} alt="" />
                <h1 className="absolute text-5xl font-bold left-28 text-white top-1/2 -translate-y-1/2 transform">Check Out</h1>
                <Link to="/home"><button className="absolute rounded-t-btn  bg-red-500 px-8 text-white bottom-0">Home / Check Out</button></Link>
            </div>
            <div className="card bg-base-100 mb-16 lg:p-16 mx-auto max-w-80 lg:max-w-4xl shrink-0 shadow-2xl">
                    <p className='text-2xl font-bold'>{title}</p>
                <form onSubmit={handleCheckout} className="card-body">
                    <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Booking Date</span>
                            </label>
                            <input type="date" name='date'  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} placeholder="price" className="input input-bordered" required />
                        </div>
                    </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name='message' placeholder="your message"></textarea>
                        </div>
                    
                    <div className="form-control mt-6">
                        <button className="btn btn-error">Checkout</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;