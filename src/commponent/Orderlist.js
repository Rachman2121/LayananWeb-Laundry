import React from "react";
import "./../style/Orderlist.css"
const Orderlist = () => {
    return(
        
            <div>

      <h1>Order List</h1>
      <div className="search-container">
        <input type="text" placeholder="Search by ID" className="search-input" />
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Telephone</th>
            <th>Status</th>
            <th>Transaction</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>test</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
              <button className="transaction-button"><a>+Create</a></button>
              </td>
              <td>
              <button className="action-button">Edit</button>
                <button className="action-button">Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
        
    )

} 

export default Orderlist