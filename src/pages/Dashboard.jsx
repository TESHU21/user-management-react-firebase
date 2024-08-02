import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UpdateProfile from "./UpdateProfile";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout, sucessMessage, setSucessMessage } = useAuth();
  const navigate = useNavigate();
  // console.log(sucessMessage);

  async function handleLogout() {
    setError("");
    await logout();
    navigate("/login");
  }
  return (
    <>
      <Card>
        <Card.Body>
          {sucessMessage && <Alert variant=" sucess">{sucessMessage}</Alert>}
          <h2 className="  d-flex text-center p-3 justify-content-center">
            Profile
          </h2>
          <p className=" text-center">{currentUser.email}</p>
          <Link to="/updateprofile" className=" btn btn-primary w-100 mt-3">
            <div className=" p-1">Update Profile</div>
          </Link>
        </Card.Body>
      </Card>

      <div className=" w-100  text-center mt-2 ">
        <Button variant="primary" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
