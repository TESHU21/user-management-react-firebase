import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UpdateProfile from "./UpdateProfile";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    await logout();
    navigate("/login");
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="  d-flex text-center p-3 justify-content-center">
            Profile
          </h2>
          <p className=" text-center">{currentUser.email}</p>
          <Link to="/updateprofile" className=" btn btn-primary w-100 mt-3">
            <div className=" p-1">Update Profile</div>
          </Link>

          {error && <Alert variant="danger">{error}</Alert>}
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
