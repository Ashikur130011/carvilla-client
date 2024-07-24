import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css';

const reviews = [
    {
      name: "John Doe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQcRtWVDjSpn8k9DDCETUsh-LL3HVJGDMaQ&s",
      rating: 4.5,
      review: "Great product! Highly recommend.",
    },
    {
      name: "Jane Smith",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazGKny1CSlH3XZGzdceONvBwSZqNVKklLnA&s",
      rating: 4.0,
      review: "Good value for the price.",
    },
    {
      name: "Alice Johnson",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYA4yTn5sczM4j6psN48F0zJk8zELz2nT4A&s",
      rating: 5.0,
      review: "Excellent quality and service.",
    },
    {
      name: "Bob Brown",
      image: "https://img.freepik.com/free-photo/close-up-happy-laughing-bearded-man-smiling_176420-18793.jpg?size=626&ext=jpg&ga=GA1.1.1514929062.1720969110&semt=ais_user",
      rating: 4.2,
      review: "Very satisfied with my purchase.",
    }
  ];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return (
        <div className='my-24 lg:w-1/2 mx-auto'> 
            <div className='space-y-6  mb-16'>
            <h2 className='text-xl font-bold text-orange-600'>Testimonial</h2>
            <h1 className='text-5xl font-bold'>What Customer Says</h1>
            <p className=' mx-auto '>The majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable.</p>
            </div>
            <div className="slider-container">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.image} alt={review.name} className="review-image items-center" />
            <h3>{review.name}</h3>
            <p>{'⭐'.repeat(Math.floor(review.rating))}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </Slider>
    </div>
        </div>
    );
};

export default Testimonial;