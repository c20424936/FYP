import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import SimpleMap from './map-page';
import "./App.css";


function App() {
    return (
      <div className='App' >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
           <li><Link to="/map">Map</Link></li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/map" element={<SimpleMap/>} />
        </Routes>
      </div>
    );
  }
  export default App;