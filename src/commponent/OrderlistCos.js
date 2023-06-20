import React from "react";
import "./../style/Orderlist.css";
const OrderlistCos = () => {
  return (
    <div>
      <h1>Order List</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by ID"
          className="search-input"
        />
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Status</th>
            <th>Transaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderlistCos;
