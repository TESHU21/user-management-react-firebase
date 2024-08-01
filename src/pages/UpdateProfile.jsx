import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";

function UpdateProfile() {
  const { currentUser, UpdateEmail, UpdatePassword } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (sucessMessage) {
      console.log(sucessMessage);
    }
  }, [sucessMessage]);
  async function handlesubmit(e) {
    e.preventDefault();

    try {
      setError("");

      setLoading(true);
      if (emailRef.current.value !== currentUser.email) {
        await UpdateEmail(emailRef.current.value);
        setSucessMessage("Profile updated Sucessfully");
      }
      // Update password if a new one is provided

      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        setError("password do not match ");
      } else if (passwordRef.current.value !== currentUser.password) {
        await UpdatePassword(passwordRef.current.value);
        setSucessMessage("Profile updated Sucessfully");
        console.log("password changed");

        navigate("/");
      }
    } catch (error) {
      setError(error.message);
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

          {sucessMessage && <div>{sucessMessage}hello</div>}
          <h1>me</h1>
          <h2 className=" text-center mb-4">Update Profile</h2>
          <Form onSubmit={handlesubmit}>
            <Form.Group className=" mb-3">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type="email"
                defaultValue={currentUser.email}
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group className=" mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Leave blank to keep the same"
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
                Update Profile
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className=" w-100  text-center mt-2   ">
        <Link to="/">
          <button className=" w-25 py-1 px-2 rounded-2   bg-secondary-subtle text-white">
            Cancel
          </button>
        </Link>
      </div>
    </>
  );
}

export default UpdateProfile;
