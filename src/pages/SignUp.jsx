import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const { currentUser, signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handlesubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("password do not match ");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <h2 className=" text-center mb-4">Sign Up</h2>
          <Form onSubmit={handlesubmit}>
            <Form.Group className=" mb-3">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Adress"
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group className=" mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group className=" mb-3">
              <Form.Label>confirmPassword</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Confirm Password"
                ref={confirmPasswordRef}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                className="  w-50 text-center  "
                disabled={loading}
              >
                Sign Up
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className=" w-100  text-center mt-2">
        Aleready have an account?
        <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

export default Signup;
