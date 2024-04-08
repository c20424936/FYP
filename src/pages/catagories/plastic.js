import '../../css/catagory.css';
import React from 'react';
import MyCarousel from '../../Components/Carousel';
import { Button } from 'react-bootstrap';

function Plastic() {
  return (
    <div>
      <MyCarousel />
      <br />

      <div className="card-container">
        <div className="info-card">
          <h3 className='info-title'>Plastic: What Is It?</h3>
          <div className="info-text">
            <p>
              Plastic is derived from petroleum or natural gas through a refining process. It's then molded into various shapes and forms for consumer and industrial use.
            </p>
            <hr />
            Recycling plastic is crucial for environmental sustainability and resource conservation.
            <br/>
            <Button href="/map">Find Recycling Centers</Button>
          </div>
        </div>

        <img className="info-img" src="Images/Plastic_recycled.png" alt="Recycle Type:" />

        <div className="info-card" >
          <h3 className="info-title">How Can We Recycle Plastic?</h3>
          <p className="info-text">
            Plastic recycling involves several steps to ensure proper processing and reuse:
            <br />
            <br />
            <ul>
              <li>Sorting: Plastic waste is sorted based on its resin type, as different types require different recycling processes.</li>
              <hr />
              <li>Cleaning: Contaminants like food residue or labels are removed through washing and shredding.</li>
              <hr />
              <li>Melting and Remolding: The cleaned plastic is melted and reshaped into pellets or other forms for manufacturing new products.</li>
              <hr />
              <li>Manufacturing: These recycled pellets are used to create various items like packaging, clothing, furniture, and more.</li>
            </ul>
          </p>
        </div>

        <br />

        <img className="info-img" src="Images/Plastic_bin.png" alt="Recycle Type:" />

        <div className="info-card" >
          <h3 className="info-title">Benefits of Recycling Plastic</h3>
          <p className="info-text">
            Recycling plastic offers numerous benefits, including:
            <ul>
              <li>Reduced Environmental Impact: Lessens pollution, conserves energy, and mitigates greenhouse gas emissions compared to producing new plastic.</li>
              <hr />
              <li>Resource Conservation: Saves valuable natural resources like oil and gas, which are used in plastic production.</li>
              <hr />
              <li>Waste Reduction: Decreases the amount of plastic waste sent to landfills and incinerators, promoting a circular economy.</li>
              <hr />
              <li>Economic Opportunities: Creates jobs in recycling facilities and stimulates innovation in sustainable materials and processes.</li>
            </ul>
          </p>
        </div>

        <br/>
      </div>
    </div>
  );
}

export default Plastic;
