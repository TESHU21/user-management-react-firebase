import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import Signup from "./SignUp";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const { currentUser, signup, login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisiblity = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };
  async function handlesubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const response = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(response.code);

      navigate("/");

      console.log();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("This Email is Invalid");
          break;
        case "auth/user-not-found":
          setError("Email is not found");
          break;
        case "auth/wrong-password":
          setError("Incorrect Passwrod");
          break;
        case "auth/weak-password":
          setError("The password is too weak.");
          break;

        default:
          // setError(error.message);
          break;
      }

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
          <h2 className=" text-center mb-4">Login</h2>
          <Form onSubmit={handlesubmit}>
            <Form.Group className=" mb-3">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Adress"
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group className=" mb-3   ">
              <Form.Label>Password</Form.Label>
              <div className=" position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  ref={passwordRef}
                />
                <span
                  className="  d-flex  position-absolute top-50 end-0 translate-middle-y   mx-2"
                  onClick={handlePasswordVisiblity}
                >
                  {" "}
                  {showPassword ? (
                    <FaRegEye size={18} />
                  ) : (
                    <FaRegEyeSlash size={25} />
                  )}
                </span>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                className="  w-50 text-center  "
                disabled={loading}
              >
                Log In
              </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgotpassword">Forgot Password</Link>
          </div>
        </Card.Body>
      </Card>
      <div className=" w-100  text-center mt-2">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
}

export default Login;
