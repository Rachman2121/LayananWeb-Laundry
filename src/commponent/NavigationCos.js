import React from 'react';
import './../style/Navigation.css';
import { Link } from "react-router-dom";

const NavigationCos = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link href='/DasboardCos'>GO Laundry</Link></li>
        <li><Link href="/Order">Order</Link></li>
        <li><Link href="/OrderListCos">Order List</Link></li>
        <li><Link href="TransactionCos">Transaction</Link></li>
        <li><Link href="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationCos;
