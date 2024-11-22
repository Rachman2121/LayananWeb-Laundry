import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "admin") {
      toast.success("Login successful!");
    } else {
      toast.error("Invalid username or password");
    }
    if (username === "costumer" && password === "costumer") {
      toast.success("Login Successfull");
    } else {
      toast.error("Invalid username or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="body">
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-form">
            <ToastContainer />
            <h1 className="text-Login">Get's Started</h1>
            <div className="signup-text">
              Don't have an Account? <a href="/Signup">Sign Up</a>
            </div>
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
                <div className="password-input-container">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <div
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </div>
                </div>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                block
                className="login-button"
                style={{ marginTop: "10px" }}
              >
                Login
              </Button>
            </Form>
          </div>
          <div className="right-section"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
