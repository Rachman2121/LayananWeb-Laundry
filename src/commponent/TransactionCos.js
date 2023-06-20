import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./../style/TransactionCos.css";

const TransactionCos = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Status:", status);
    // Reset the form
    setStatus("");
  };

  return (
    <div className="TransactionForm">
      <h1>Transaction</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="transactionId">
          <Form.Label>Transaction ID</Form.Label>
          <Form.Control type="text" value="TRX-001" readOnly />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value="Rachman" readOnly />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value="2023-06-19" readOnly />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">-- Payment --</option>
            <option value="Complete">Dana</option>
            <option value="Washed">OVO</option>
            <option value="Iron">Go-Pay</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="total">
          <Form.Label>Total</Form.Label>
          <Form.Control type="number" value={1000} readOnly />
        </Form.Group>
        <Button type="submit">Pay</Button>
      </Form>
    </div>
  );
};

export default TransactionCos;
