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
        <div className="booking-tab">
            
            <div className='form-content'>
              <h2 className='headers'>Welcome aboard</h2>

              <p>Let's go places!</p>
                  <form>
                        <input type='radio'></input>
                        <label htmlFor=''>One Way</label>

                        <input type='radio'></input>
                        <label htmlFor=''>Round Trip</label>

                        <br></br>
                        
                        <label htmlFor=''>From</label>
                        <input type='text'></input>

                        <label htmlFor=''>To</label>
                        <input type="text"></input>

                        <label htmlFor=''>Travel Date</label>
                        <input type="date"></input>


                        <br></br>
                        <label htmlFor=''>Passengers</label>
                        <input type='number'></input>

                        <br></br>

                        <table className='table-radio'>

                              <tr>
                                <td><input type='radio'></input></td>
                                <td><label htmlFor=''>Family & Friends</label></td>

                                <td><input type='radio'></input></td>
                                <td><label htmlFor=''>Senior Citizen</label></td>

                                <td><input type='radio'></input></td>
                                <td><label htmlFor=''>Armed Forces</label></td>
                              </tr>

                              <tr>
                                <td><input type='radio'></input></td>
                                <td><label htmlFor=''>Family & Friends</label></td>

                                <td><input type='radio'></input></td>
                                <td><label htmlFor=''>Senior Citizen</label></td>

                                <td><input type='radio'></input></td>
                                <td><label htmlFor=''>Students</label></td>
                              </tr>
                        </table>

                        <button type='submit' className='search-btn'>Search Flight</button>

                  </form>
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