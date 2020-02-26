import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = props => {
  const logout = () => {
    axios.delete("/auth/logout").then(() => {
      props.setUser(null);
    });
  };
  if (props.user) {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      </nav>
    );
  }
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
};

export default Navbar;
