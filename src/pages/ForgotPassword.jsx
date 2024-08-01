import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import Signup from "./SignUp";
import { Link } from "react-router-dom";
function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [message, setMessage] = useState("");
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handlesubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your message for further instructions");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="sucess">{message}</Alert>}
          <h3 className=" text-center mb-4 ">Forgot Password</h3>
          <Form onSubmit={handlesubmit}>
            <Form.Group className=" mb-3">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Adress"
                ref={emailRef}
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                className="  w-50 text-center  "
                disabled={loading}
              >
                Reset Password
              </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className=" w-100  text-center mt-2">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
}

export default ForgotPassword;
