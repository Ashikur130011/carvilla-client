import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full md:h-[600px] h-[400px] rounded-b-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={banner1}
                    className="w-full" />
                    <div className="absolute h-full items-center text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute bottom-1 right-5 flex -translate-y-2 gap-3 transform">
                    <a href="#slide6" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={banner2}
                    className="w-full" />
                    <div className="absolute h-full items-center text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute bottom-1 right-5 flex -translate-y-2 gap-3 transform">
                    <a href="#slide1" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={banner3}
                    className="w-full" />
                    <div className="absolute h-full items-center text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute bottom-1 right-5 flex -translate-y-2 gap-3 transform">
                    <a href="#slide2" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={banner4}
                    className="w-full" />
                    <div className="absolute h-full items-center text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute bottom-1 right-5 flex -translate-y-2 gap-3 transform">
                    <a href="#slide3" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={banner5}
                    className="w-full" />
                    <div className="absolute h-full items-center text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute bottom-1 right-5 flex -translate-y-2 gap-3 transform">
                    <a href="#slide4" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={banner6}
                    className="w-full" />
                    <div className="absolute h-full items-center text-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute bottom-1 right-5 flex -translate-y-2 gap-3 transform">
                    <a href="#slide5" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;