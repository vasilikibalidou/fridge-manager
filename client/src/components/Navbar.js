import React from "react";
import axios from "axios";

import { Nav, NavLink, NavTitle } from "./StyledComponents";

const Navbar = props => {
  const logout = () => {
    props.setUser(null);
    axios.delete("/api/auth/logout").then(() => {});
  };
  return (
    <Nav>
      <div>
        <NavLink to="/">
          <NavTitle>Fridgy</NavTitle>
        </NavLink>
      </div>
      <div>
        <NavLink to="/">{props.user.username}</NavLink>
        <NavLink to="/" onClick={logout}>
          Logout
        </NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
