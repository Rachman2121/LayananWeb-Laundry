import React from "react";
import { Link } from "react-router-dom";
import "./../style/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/Dasboard">GO Laundry</Link></li>
        <li><Link to="/Orderlist">Order List</Link></li>
        <li><Link to="/TransactionData">Transaction Data</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;