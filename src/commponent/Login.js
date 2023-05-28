import React, { useState } from "react";
import "../style/Login.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    
    <div className="login-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="login-form">
              <h1 className="text-center">Get's Started</h1>
              <h2 className="text-center">Don't have Account?</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
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

                <Button variant="primary" type="submit" block style={
                    { marginTop:"10px"}
                }>
                  Login
                </Button>
              </Form>

              <div className="text-center mt-3">
                <Button variant="link" onClick={( ) => console.log("Daftar")}>
                  Daftar
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
