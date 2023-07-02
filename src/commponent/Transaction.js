import React, { useState } from 'react';
import './../style/Transaction.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    toast.success('Transaction submitted!');
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
    <div className="form-Transaction">
      <ToastContainer position="top-right" /> {/* Tampilkan ToastContainer di atas */}
      <h1>Transaction</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{transactionId}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{date}</td>
            </tr>
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
        <button className="submit-button" type="submit">
          Transaction
        </button>
      </form>
    </div>
  );
};

export default Transaction;
