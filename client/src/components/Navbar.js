import React from "react";
import axios from "axios";

import { Nav, NavLink, NavTitle } from "./StyledComponents";

const Navbar = props => {
  const logout = () => {
    props.setUser(null);
    axios.delete("/auth/logout").then(() => {});
  };
  return (
    <Nav>
      <div>
        <NavLink to="/">
          <NavTitle>Fridgy</NavTitle>
        </NavLink>
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
