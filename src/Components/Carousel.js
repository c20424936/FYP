import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';



function MyCarousel() {
  return (
   <Carousel>
      <Carousel.Item>
      <img
        className="d-block mx-auto"
        src="Images/children-outside-recycling.jpg" alt="/" height='400px' 
      />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="Images/Recycle.png" alt="Map" height='400pxpx' 
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="Images/Dublin.png" alt="Map" height='400px'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;