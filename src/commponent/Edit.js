import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./../style/Edit.css"

function Edit() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [telephone, setTelephone] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform edit logic here
    console.log("Name:", name);
    console.log("Date:", date);
    console.log("Telephone:", telephone);
    console.log("Status:", status);
    // Reset the form
    setName("");
    setDate("");
    setTelephone("");
    setStatus("");
  };

  return (
    <div className="Edit">
      <h1>Edit</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <Form.Group controlId="telephone">
          <Form.Label>No Telephone</Form.Label>
          <Form.Control
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">-- Select Status --</option>
            <option value="Complate">Complate</option>
            <option value="Washed">Washed</option>
            <option value="Iron">Iron</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
}

export default Edit;
