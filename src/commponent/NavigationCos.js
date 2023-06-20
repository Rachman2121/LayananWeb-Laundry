import React from 'react';
import './../style/Navigation.css';

const NavigationCos = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href='/Dasboard'>GO Laundry</a></li>
        <li><a href="/Order">Order</a></li>
        <li><a href="#">Oder List</a></li>
        <li><a href="#">Transaction</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </nav>
  );
};

export default NavigationCos;
