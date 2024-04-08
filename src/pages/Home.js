import React from 'react';
import MyCarousel from '../Components/Carousel';
import { Link } from 'react-router-dom';
import Card from '../Components/Card'; 
import '../css/Home.css'; 


function Home() {
  return (
    <div className="homepage">
      <MyCarousel />
      <div className="container" style={{ textAlign: 'center', padding: '40px' }}>
        <h1>Welcome to Why Recycle</h1>
        <p>A sustainable solution for a better future</p>
        <Link to="/about">
          <button className="primary-button">About Us</button>
        </Link>
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
      <h2>Why Recycle?</h2>
      <div className="container" style={{backgroundColor:'white', textAlign: 'center'}}>
        <p>
          Recycling helps reduce pollution, conserve natural resources, and minimize the amount of waste sent to landfills.
          Join us in our mission to create a cleaner, greener planet for future generations.
        </p>
      </div>
      <Link to="/tips">
          <button className="large-button">Learn More</button>
        </Link>
      <br/>
      <br/>
    </div>
  );
};

export default Home;
