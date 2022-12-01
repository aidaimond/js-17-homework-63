import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-secondary bg-opacity-75">
      <div className="container-fluid">
        <span className="navbar-brand">My blog</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to={"/" || "/posts"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/new-post" className="nav-link">
                Add
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink  to="/contacts"  className="nav-link">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;