import React from 'react';

const DataTable = ({booking,handlebookingDelete, handleBookingStatus}) => {
    const {_id, service, img, price, date, status} = booking
    return (
            <tr>
                <th>
                    <label>
                        <button onClick={() => handlebookingDelete(_id)} className="btn btn-square btn-error btn-sm btn-outline">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </label>
                </th>
                <td>
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img
                                    src={img}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    
                        
                    
                </td>
                <td>
                <div>
                            <div className="font-bold text-lg  text-start">{service}</div>
                        </div>
                </td>
                <td>
                    <span className="font-bold text-lg">{price} $</span>
                </td>
                <td className='text-base'>{date}</td>
                <th>
                    {
                        status === 'confirmed' ?
                        <p className='text-success text-md'>Confirmed</p>:

                    <button onClick={() => handleBookingStatus(_id)} className="btn btn-ghost btn-xs ">pending</button>
                    }
                </th>
            </tr>

    );
};

export default DataTable;