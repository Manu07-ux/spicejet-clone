import React, { useEffect, useState } from 'react'
import "./home.css";

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // const showSlide = (index) => {
  //   setCurrentIndex(index);
  // };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Automatically change image every 2 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      // Cleanup the interval when the component unmounts
      clearInterval(interval);
    };
  }, []);



  const images = ["../assets/image1.jpg", "../assets/image2.jpg","../assets/image3.jpg","../assets/image4.jpg"];

  return (
    <div className="carousel-container">
      <div className="booking-container">
        <div className="booking-tab-nav">
            <div>
            <a>Flights</a>
            </div>
            <div>
              <a>Check-In</a>
            </div>
            <div>
              <a>Flight Status</a>
            </div>
            <div>
              <a>Manage Booking</a>
            </div>
        </div>

        <div className="booking-tab">
            hi
        </div>
      </div>
      
    <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {images.map((image, index) => (
        <div className="carousel-item" key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
    <button className="carousel-button prev" onClick={prevSlide}>❮</button>
    <button className="carousel-button next" onClick={nextSlide}>❯</button>
  </div>
  )
}

export default Home