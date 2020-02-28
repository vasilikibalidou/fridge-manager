import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";

import { Nav, NavLink, LogoImg } from "./StyledComponents";

const Navbar = props => {
  const logout = () => {
    axios.delete("/auth/logout").then(() => {
      props.setUser(null);
    });
  };
  return (
    <Nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/" onClick={logout}>
          Logout
        </NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
