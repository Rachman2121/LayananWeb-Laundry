import React from 'react';
import './../style/Navigation.css';

const NavigationCos = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href='/DasboardCos'>GO Laundry</a></li>
        <li><a href="/Order">Order</a></li>
        <li><a href="/OrderListCos">Order List</a></li>
        <li><a href="TransactionCos">Transaction</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </nav>
  );
};

export default NavigationCos;
