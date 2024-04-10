import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, link }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Need Information?</p>
        <Link to={link}>Click here!</Link>
        <br />
        <Link to="/map">Go to the Map!</Link>
      </div>
    </div>
  );
};

export default Card;
