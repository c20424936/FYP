import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';

function CustomSidebar() {
  return (
    <div className="custom-sidebar">
      <Sidebar width="150px" background-color="#70ed8d">
        <Menu>
          <SubMenu label="Categories">
            <MenuItem><Link to="/plastic">Plastic</Link></MenuItem>
            <MenuItem><Link to="/paper">Paper</Link></MenuItem>
            <MenuItem><Link to="/cans">Cans</Link></MenuItem>
            <MenuItem><Link to="/battery">Batteries</Link></MenuItem>
            <MenuItem><Link to="/glass">Glass</Link></MenuItem>
            <MenuItem><Link to="/electronics">Electronics</Link></MenuItem>
          </SubMenu>
          <MenuItem><Link to="/map">Map</Link></MenuItem>
          <MenuItem><Link to="/login">Login</Link></MenuItem>
          <MenuItem><Link to="/about">About Us</Link></MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default CustomSidebar;
