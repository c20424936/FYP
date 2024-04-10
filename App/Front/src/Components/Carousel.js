import React from 'react';
import Carousel from 'react-bootstrap/Carousel';




function MyCarousel() {
  return (
    <div>
     
      <div>
        <Carousel style={{height: '500px' }}>
          <Carousel.Item>
           <a href='/tips'>
            <img
              className="d-block mx-auto"
              src="Images/children-outside-recycling.jpg"
              alt="/"
              height="500px"
            />
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <a href='/'>
            <img
              className="d-block mx-auto"
              src="Images/Recycling.png"
              alt="Map"
              height="500px"
            />
            </a>
          </Carousel.Item>
          

          <Carousel.Item>
            <a href="/map">
            <img
              className="d-block mx-auto"
              src="Images/Dublin.png"
              alt="Map"
              height="500px"
            />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default MyCarousel;