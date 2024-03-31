import React from 'react';
import { Routes, Route } from 'react-router-dom';


import CustomNavbar from './Components/Navbar';


import "./css/App.css";


import Home from './pages/Home';
import SimpleMap from './pages/map-page';
import Login from './pages/login';
import ViewLocInfo from './pages/info'
import UserList from './pages/UserList';
import LocList from './pages/LocList';
import AddLoc from './pages/AddLoc';
import EditLoc from './pages/EditLoc';
import About from './pages/About';
import Battery from './pages/catagories/battery';
import Paper from './pages/catagories/paper';
import Plastic from './pages/catagories/plastic';
import Cans from './pages/catagories/cans';
import Electronics from './pages/catagories/electric';
import Glass from './pages/catagories/glass';


function App() {
    return (
        <div className='App'>
            <CustomNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<SimpleMap />} />
                <Route path="/login" element={<Login />} />

                <Route path="/info/:_id" element={<ViewLocInfo />} />
                <Route path="/about" element={<About />} />

                <Route path="/Userlist" element={<UserList />} />

                <Route path="/LocList" element={<LocList />} />
                <Route path="/LocList/add" element={<AddLoc />} />
                <Route path="/LocList/edit/:id" element={<EditLoc />} />

                <Route path='/battery' element={<Battery />} />
                <Route path='/paper' element={<Paper />} />
                <Route path='/plastic' element={<Plastic />} />
                <Route path='/cans' element={<Cans />} />
                <Route path='/glass' element={<Glass />} />
                <Route path='/electronics' element={<Electronics />} />
            </Routes>
        </div>
    );
}

export default App;
