import React from 'react'
import "./../style/Transaction.css"

const Transaction = () => {
  return (
    <div className="transaction-menu">
    <h3>Transaction Menu</h3>
    <ul>
      <li>View Transactions</li>
      <li>Add Transaction</li>
      <li>Edit Transaction</li>
      <li>Delete Transaction</li>
    </ul>
  </div>
  )
}

export default Transaction