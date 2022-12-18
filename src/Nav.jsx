import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <ul className="navbar-nav me-auto mb-6 mt-2 mb-lg-0  ">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <span className="h5 text-black">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/GroupedTeamMembers">
            <span className="h5 text-black">Teams</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
