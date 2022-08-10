import React from "react";

import {NavLink } from "react-router-dom";

const NavLinksTest = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>{" "}
        |
        <NavLink to="/Test" activeClassName="active">
        Test
        </NavLink>{" "}
        |
      </nav>
    </div>
  );
};

export default NavLinksTest;
