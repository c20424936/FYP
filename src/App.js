import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import SimpleMap from './map-page';
import Catagories from './catagory';
import "./App.css";


function App() {
    return (
      <div className='App' >
        <nav>
          <ul>
          <Link to="/">Home </Link>
          
          <Link to="/map">Map </Link>
       
          <Link to="/Catagories">Catagories </Link>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/map" element={<SimpleMap/>} />
          <Route path="/Catagories" element={<Catagories/>} />
        </Routes>
      </div>
    );
  }
  export default App;