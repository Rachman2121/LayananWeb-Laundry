import React, { useState } from "react";
import "../style/Signup.css";
import { Form, Button } from "react-bootstrap";

function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDOB] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here
  };

  return (
    <div className="body">
      
        <div className="login-wrapper">
          <div className="login-form">
            <h1 className="text-center">Sign Up</h1>
            <div className="signup-text">
              Already have an account? <a href="/" className="signup-link">Login</a>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your date of birth"
                    value={dob}
                    onChange={(event) => setDOB(event.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
              </div>
              <Form.Group controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                block
                className="login-button"
                style={{ marginTop: "10px" }}
              >
                Sign Up
              </Button>
            </Form>
          </div>
          <div className="right-section"></div>
        </div>
    </div>
  );
}

export default Signup;
