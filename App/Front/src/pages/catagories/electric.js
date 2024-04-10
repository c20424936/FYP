import '../../css/catagory.css';
import React from 'react';
import MyCarousel from '../../Components/Carousel';
import { Button } from 'react-bootstrap';

function Electronics() {
  return (
    <div>
      <MyCarousel />
      <br />

      <div className="card-container">
        
        <div className="info-card">
          <h3 className='info-title'>Recycling Large Electronics: Why It Matters</h3>
          <div className="info-text">
            <p>
              Large electronics, such as TVs, computers, and refrigerators, contain valuable materials like metals, plastics, and glass. Proper recycling of these items helps recover these resources and prevents environmental harm.
            </p>
            <hr />
            Responsible disposal of large electronics is essential to reduce electronic waste (e-waste) and promote sustainability.
            <br/>
            <Button href="/map">Find E-Waste Recycling Centers</Button>
          </div>
        </div>

        <img className="info-img" src="Images/Electric.png" alt="Recycle Type:" />

        <div className="info-card" >
          <h3 className="info-title">How to Recycle Large Electronics</h3>
          <p className="info-text">
            Recycling large electronics involves specialized processes to recover valuable materials and mitigate environmental impact:
            <br />
            <br />
            <ul>
              <li>Collection: E-waste can be collected through drop-off centers, municipal recycling programs, or manufacturer take-back programs.</li>
              <hr />
              <li>Disassembly: Electronics are disassembled to separate components and remove hazardous materials like batteries and mercury-containing lamps.</li>
              <hr />
              <li>Material Recovery: Valuable materials such as copper, aluminum, and gold are extracted through shredding, sorting, and smelting.</li>
              <hr />
              <li>Responsible Disposal: Non-recyclable components and hazardous substances are disposed of properly to prevent pollution and harm to human health.</li>
            </ul>
          </p>
        </div>

        <br />

        <img className="info-img" src="Images/microwave.png" alt="Recycle Type:" />
        <br/>
        <div className="info-card" >
          <h3 className="info-title">Benefits of Recycling Large Electronics</h3>
          <p className="info-text">
            Recycling large electronics offers various benefits, including:
            <ul>
              <li>Resource Conservation: Recovers valuable metals, plastics, and other materials for reuse in manufacturing.</li>
              <hr />
              <li>Energy Savings: Reduces the need for virgin materials and saves energy compared to producing new electronics.</li>
              <hr />
              <li>Waste Reduction: Diverts e-waste from landfills, where it can leach harmful chemicals into the environment.</li>
              <hr />
              <li>Environmental Protection: Prevents pollution and reduces greenhouse gas emissions associated with e-waste disposal.</li>
            </ul>
          </p>
        </div>

        <br/>
      </div>
    </div>
  );
}

export default Electronics;
