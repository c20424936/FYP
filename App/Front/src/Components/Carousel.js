import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';



function MyCarousel() {
  return (
    <Link to="/"><Carousel>
      {/*Clicking the Carousel will link to all books*/}
      <Carousel.Item>
      <img
        className="d-block mx-auto"
        src="Images/children-outside-recycling.jpg" alt="/" height='300px' 
      />{/*Image in the Carousel */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="" alt="Map" height='300px' 
        />{/*Image in the Carousel */} 
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="Images/Dublin.png" alt="/" height='300px'/>{/*Image in the Carousel */}
      </Carousel.Item>
    </Carousel></Link>
  );
}

export default MyCarousel;