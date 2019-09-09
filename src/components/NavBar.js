import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className = "navbar">
        <NavLink
          to = "/home"
          exact
        >Home</NavLink>
        <NavLink
          to = "/login"
          exact
        >Login</NavLink>
        <NavLink
          to = "/trip"
          exact
        >Trip</NavLink>
        <NavLink
          to = "/tripslist"
          exact
        >Trips</NavLink>
      </div>
    );
  };

export default NavBar