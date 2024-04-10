import '../../css/catagory.css';
import React from 'react';
import MyCarousel from '../../Components/Carousel';
import { Button } from 'react-bootstrap';

function Glass() {
  return (
    <div>
      <MyCarousel />
      <br />

      <div className="card-container">
        <div className="info-card">
          <h3 className='info-title'>Glass Recycling: An Important Environmental Practice</h3>
          <div className="info-text">
            <p>
              Glass is a highly recyclable material that can be melted down and reused indefinitely without losing quality. Recycling glass conserves natural resources, reduces energy consumption, and minimizes waste.
            </p>
            <hr />
            Proper disposal and recycling of glass contribute to a cleaner environment and a more sustainable future.
            <br/>
            <Button href="/map">Locate Glass Recycling Facilities</Button>
          </div>
        </div>

        <img className="info-img" src="Images/Glass_recycled.png" alt="Recycle Type:" />

        <div className="info-card" >
          <h3 className="info-title">How Glass Recycling Works</h3>
          <p className="info-text">
            Glass recycling involves several key steps to transform used glass into new products:
            <br />
            <br />
            <ul>
              <li>Collection: Used glass containers are collected from homes, businesses, and recycling centers.</li>
              <hr />
              <li>Sorting: Glass is sorted by color (clear, green, brown) to maintain purity during the recycling process.</li>
              <hr />
              <li>Cleaning: Glass is washed to remove any contaminants or impurities.</li>
              <hr />
              <li>Melting: Clean glass is melted in furnaces at high temperatures to form molten glass.</li>
              <hr />
              <li>Forming: Molten glass is shaped into new products, such as bottles, jars, and fiberglass.</li>
            </ul>
          </p>
        </div>

        <br />

        <img className="info-img" src="Images/Glass_bin.png" alt="Recycle Type:" />

        <div className="info-card" >
          <h3 className="info-title">Benefits of Glass Recycling</h3>
          <p className="info-text">
            Recycling glass offers numerous environmental and economic benefits, including:
            <ul>
              <li>Resource Conservation: Saves raw materials and energy required to produce new glass from virgin materials.</li>
              <hr />
              <li>Waste Reduction: Diverts glass waste from landfills, where it can take centuries to decompose.</li>
              <hr />
              <li>Air Pollution Reduction: Reduces air pollution associated with glass production, including greenhouse gas emissions.</li>
              <hr />
              <li>Economic Opportunities: Supports local recycling industries and creates jobs in collection, sorting, and processing.</li>
            </ul>
          </p>
        </div>

        <br/>
      </div>
    </div>
  );
}

export default Glass;
