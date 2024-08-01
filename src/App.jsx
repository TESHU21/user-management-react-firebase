import { useState } from "react";
import Routes from "./routes";

import { Container } from "react-bootstrap";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

// import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Container>
      <div
        className=" d-flex  align-items-center  justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className=" w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </div>
      </div>
    </Container>
  );
}

export default App;
