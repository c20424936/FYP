import '../css/catagory.css';
import React from 'react';
import MyCarousel from '../Components/Carousel';
import { Button } from 'react-bootstrap';

function info() {
    return (
        <div className="">
            <MyCarousel />
            <br />
            <div className="card">
                <img className="card-img-top" src="/" alt="Recycle Type:" />
                <div className="card-body">
                    <h5 className="card-title">Batteries</h5>
                    <p className="card-text">Recycling Information!</p>
                    <Button variant="success" href="/map">Go to the Map!</Button>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="/" alt="Recycle Type:" />
                <div className="card-body">
                    <h5 className="card-title">Waste Paper and Cardboard</h5>
                    <p className="card-text">Recycling Information!</p>
                    <Button variant="success" href="/info">More Information</Button>
                    <Button variant="success" href="/map">Go to the Map!</Button>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="/" alt="Recycle Type:" />
                <div className="card-body">
                    <h5 className="card-title">Plastic</h5>
                    <p className="card-text">Recycling Information!</p>
                    <Button variant="success" href="/map">Go to the Map!</Button>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="/" alt="Recycle Type:" />
                <div className="card-body">
                    <h5 className="card-title">Cans</h5>
                    <p className="card-text">Recycling Information!</p>
                    <Button variant="success" href="/map">Go to the Map!</Button>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="/" alt="Recycle Type:" />
                <div className="card-body">
                    <h5 className="card-title">Batteries</h5>
                    <p className="card-text">Recycling Information!</p>
                    <Button variant="success" href="/map">Go to the Map!</Button>
                </div>
            </div>
        </div>
    );
}

export default info;
