import React from 'react';
import './../style/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href='/Dasboard'>GO Laundry</a></li>
        <li><a href="/Orderlist">Order List</a></li>
        <li><a href="#">Transection</a></li>
        <li><a href="#">Transection Data</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
