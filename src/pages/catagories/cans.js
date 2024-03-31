
import '../../css/catagory.css';
import React from 'react';
import MyCarousel from '../../Components/Carousel';
import { Button } from 'react-bootstrap';


function Cans() {
  return (

    <div>
      <MyCarousel />
      <br />

      <div className="card-container">

        <div className="info-card">
          <h3 className='info-title'>Paper and Cardboard, what is it?</h3>
          <div className="info-text">
            <p>
              Paper is made from cellulose, collected from wood or grasses, pressed together and dried into flexable sheets.
              <br/>
              Cardboard is made up of a thick layer of paper, or several layers of paper glued together.
            </p>
            <hr />
            As paper and cardboard is made with natural resources, it is important for us to recycle them when we can. 
            <br/>
            <Button href="/map">Go to the Map!</Button>
          </div>
        </div>

        
        <div className="info-card" >
          <h3 className="info-title">How can we recycle paper and cardboard?</h3>
          <p className="info-text">
            It is a common misconception that paper and cardboard can be put straight into the recyling bin at home, however it is not always the case.
            <br />
            <br />
            <ul>
              <li>Paper and cardboard must be clean, loose and dry, so for example, a greasy pizza box must be torn and thrown seperatly into the organics bin and the dry section can be recycled </li>
              <hr />
              <li>If you cannot use a bin at home, the next location is a recycling center, offering free disposal of paper and cardboard. </li>
              <hr />
              
            </ul>
          </p>
        </div>
        <br />
        <div className="info-card" >
          <h3 className="info-title">What are the benifits of recycling paper and cardboard?</h3>
          <p className="info-text">
            <li>Environmental Protection: Reduces deforestation, saves water, and decreases air and water pollution associated with paper production.</li>
            <hr />
            <li>Economic Benefits: Creates jobs in the recycling industry, reduces manufacturing costs, and generates revenue from the sale of recycled paper products.
            </li>
            <hr />
            <li>Energy Efficiency: Requires less energy compared to producing paper from virgin materials, leading to reduced carbon emissions and fossil fuel consumption.</li>
            <hr />
            <li>Sustainable Resource Management: Promotes the sustainable use of natural resources and encourages responsible consumption and waste management practices.
            </li>
                        
          </p>
        </div>
        <br/>
      </div>
    </div>
  );
}

export default Cans;
