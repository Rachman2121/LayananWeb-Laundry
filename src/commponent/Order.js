import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./../style/Order.css"

const Order = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform create order logic here
    console.log("Name:", name);
    console.log("Address:", address);
    console.log("Date:", date);

    // Reset the form
    setName("");
    setAddress("");
    setDate("");
  };

  return (
    <div className="CreateOrderForm">
      <h1>Create Order</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Order</Button>
      </Form>
    </div>
  );
};

export default Order
