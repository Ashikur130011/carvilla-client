import { ImLocation } from "react-icons/im";
import { MdPermPhoneMsg, MdOutlineMarkEmailUnread } from "react-icons/md";

const Contact = () => {
    return (
        <div className="hero w-full  min-h-screen font-serif ">
            <div className="grid lg:grid-flow-col lg:w-4/5 mx-auto">
                <div className=" mx-auto">
                    <h1 className="text-5xl text-blue-700 font-bold">Contact Us!</h1>
                    <p className="py-6">
                        Any question or remarks? Just write us a message!
                    </p>
                    <div className='card bg-base-10 w-full text-center max-w-lg shrink-0 shadow-2xl'>
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='number' placeholder="enter rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name='message' placeholder="your message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </form>
                    </div>
                    <div className='mt-8 text-lg text-blue-700 '>
                        <p className="text-left">Address: </p>
                        <div className="flex items-center gap-3">
                        < ImLocation className="text-" /> 
                        <p>123 Anyehere St, Any City, ST 12345</p>
                        </div>
                        <div className="flex items-center gap-3">
                        < MdPermPhoneMsg /> 
                    <p>+123-456-7890</p>
                        </div>
                    <div className="flex items-center gap-3">
                        < MdOutlineMarkEmailUnread />
                    <p> hello@reallygreatsite.com</p>
                    </div>
                    </div>

                </div>
                <div className="card bg-base-50 w-full max-w-lg shrink-0 shadow-2xl">
                    <h1 className='text-3xl mt-5 mx-2 text-blue-700 font-serif'>Drop your comment Here</h1>
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="email" placeholder="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name='number' placeholder="enter rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name='message' placeholder="your message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;