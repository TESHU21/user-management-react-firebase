import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Protected = ({ element: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? <Component {...rest} /> : <Navigate to="/login" />;
};

Protected.propTypes = {
  // component: PropTypes.elementType.isRequired,
};

export default Protected;
