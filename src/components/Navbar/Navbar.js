import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <NavLink activeClassName={s.active} to="/homepage">
        Homepage
      </NavLink>
      <NavLink activeClassName={s.active} to="/posts">
        Posts
      </NavLink>
      <NavLink activeClassName={s.active} to="/photos">
        Photos
      </NavLink>
      <NavLink activeClassName={s.active} to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
};

export default Navbar;
