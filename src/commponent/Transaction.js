import React, { useState } from 'react';
import "./../style/Transaction.css"
const Transaction = () => {
  const [transactionId, setTransactionId] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [total, setTotal] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your transaction logic here
    console.log('Transaction ID:', transactionId);
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Total:', total);
    // Reset the form
    setTotal('');
    setShowModal(true);
  };


  const Modal = ({ closeModal }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Transaction Successful!</h2>
          <p>Your transaction has been processed.</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };

  return (
    <div className="form-Transaction" onSubmit={handleSubmit}>
      <h1>Transaction</h1>
      <table>
        <thead>
        <th>Transaction ID</th>
        </thead>
          <tbody>
          <td>{transactionId}</td>
          </tbody>
          <th>Name</th>
          <tbody> 
            <td>{name}</td>
          </tbody>
          <thead>
          <th>Date</th>
          </thead>
          <tbody>
          <td>{date}</td>
          </tbody>
         
        
      </table>
      <div className="form-group">
        <label htmlFor="total">Total:</label>
        <input
          type="number"
          id="total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          required
          
        />
    </div>
    <button className="submit-button" type="submit">Transaction</button>
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default Transaction
