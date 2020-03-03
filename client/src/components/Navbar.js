import React from "react";
import axios from "axios";

import { Nav, NavLink, LogoImg } from "./StyledComponents";

const Navbar = props => {
  const logout = () => {
    props.setUser(null);
    axios.delete("/auth/logout").then(() => {});
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
