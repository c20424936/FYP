import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SimpleMap from './pages/map-page';
import Catagories from './pages/catagory';
import "./css/App.css";
import CustomNavbar from './Components/Navbar';
import Login from './pages/login';
import Info from './pages/info';


function App() {
    return (
        <div className='App'>
            <CustomNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<SimpleMap />} />
                <Route path="/catagories" element={<Catagories />} />
                <Route path="/login" element={<Login />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </div>
    );
}

export default App;
