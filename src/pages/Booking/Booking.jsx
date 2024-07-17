import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import detailsBanner from '../../assets/images/checkout/checkout.png'
import DataTable from './DataTable';
import Swal from 'sweetalert2';

const Booking = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/booking?email=${user?.email}`

    const handlebookingDelete = (id) => {
        console.log('clicked')

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`,{
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    })
              
            }
          });  
    }

    const handleBookingStatus = (id) => {
        fetch(`http://localhost:5000/booking/${id}`,{
            method: "PATCH",
            headers: {
                'content-type':"application/json"
            },
            body: JSON.stringify({status:'confirmed'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: "Confirm!",
                    text: "Your order has confirmed",
                    icon: "success"
                  });
                  const remaining = bookings.filter(booking => booking._id !== id)
                  const updated = bookings.find(booking => booking._id === id)
                  updated.status = 'confirmed'
                  const newbooking = [updated, ...remaining]
                  setBookings(newbooking)
            }
        })
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [url])
    return (
        <div className=''>
            <div className="relative lg:w-3/5 mx-auto">
                <img className="" src={detailsBanner} alt="" />
                <h1 className="absolute lg:text-5xl font-bold left-28 text-white top-1/2 -translate-y-1/2 transform">Booking Details</h1>
                <Link to="/home"><button className="absolute rounded-t-xl left-10 right-10  bg-red-500 px-8 text-white bottom-0 ">Home / My Booking</button></Link>
            </div>
            <div className="overflow-x-auto rounded-xl bg-slate-50 md:max-w-6xl mx-auto my-10">
            <table className="table font-serif">
                {/* head */}
                <thead className=' text-black'>
                    <tr className='text-sm'>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" defaultChecked />
                            </label>
                        </th>
                        <th>Service Image</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Booking Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        bookings.map(booking => 
                            <DataTable key={booking._id}
                                booking={booking}
                                handlebookingDelete={handlebookingDelete}
                                handleBookingStatus={handleBookingStatus}
                            ></DataTable>
                        )
                    }

                </tbody>

            </table>
        </div>
        </div>
    );
};

export default Booking;