import React from "react";
import "./../style/TransactionData.css";

const TrasactionData = () => {
  return (
    <div className="head">
      <div className="Transaction-data">
        <h1>Transaction Data</h1>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Nominal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="button-back">Back</button>
    </div>
  );
};

export default TrasactionData;
