import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";

import { Nav, NavLink } from "./StyledComponents";

const Navbar = props => {
  const logout = () => {
    axios.delete("/auth/logout").then(() => {
      props.setUser(null);
    });
  };
  if (props.user) {
    return (
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/" onClick={logout}>
          Logout
        </NavLink>
      </Nav>
    );
  }
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </Nav>
  );
};

export default Navbar;
