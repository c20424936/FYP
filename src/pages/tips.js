import React from 'react';
import MyCarousel from '../Components/Carousel';
import Card from '../Components/Card'; 
import "../css/catagory.css"

function Recycle() {
  return (
    <div className="homepage">
      <MyCarousel />
      
      
      <br/>
      <h1>Everyone has to do their part of the environment.</h1>
      <div className="container" style={{ backgroundColor: 'white',justifyContent: 'center', padding: '40px 30px' }}>
        <p>Recycling is a very important process for our fight to combat global warming and preserve our environment for future generations. </p>
        <p>Recycling helps reduce pollution, conserve natural resources, and minimize the amount of waste sent to landfills.</p>
        <p> Join us in our mission to create a cleaner, greener planet for future generations.</p>
      </div>

      <div className="container" style={{marginBottom: '3em' }}>
        <h2>Explore Our Recycling Categories</h2>
        <div className="card-container">
          <Card
            imageUrl="/images/Battery.png"
            title="Batteries"
            link="/battery"
          />
          <Card
            imageUrl="/images/Waste Paper.png"
            title="Paper and Cardboard"
            link="/paper"
          />
          <Card
            imageUrl="/images/Plastic.png"
            title="Plastic"
            link="/plastic"
          />
          <Card
            imageUrl="/images/Can_recycling.png"
            title="Cans"
            link="/cans"
          />
          <Card
            imageUrl="/images/Electronics.png"
            title="Electronics"
            link="/electronics"
          />
           <Card
            imageUrl="/images/Glass.png"
            title="Glass"
            link="/glass"
          />
        </div>
      </div>

      <div className="container" style={{ backgroundColor:'white', justifyContent:'center' , padding: '40px 30px' }}>
      
      <h1>Recycling Facts!</h1>
      <br/>
        <ul>
        <li>It takes 650 recycled aluminum cans to make a bicycle. </li>
        <li>It takes up to 500 years for plastic to decompose.</li>
        <li>Each ton of recycled paper can save 17 trees, 2.2 cubic metres of landfill space and 7,000 gallons of water.</li>
        <li>It is possible to recycle one sheet of printer paper up to 7 times. </li>
        <li>It takes up to 500 years for plastic to decompose.</li>
        <li>Glass is 100% recyclable and can be recycled endlessly without loss in quality or purity.</li>
        </ul>
      </div>
      <br/>

      
      </div>
 
  );
};

export default Recycle;
