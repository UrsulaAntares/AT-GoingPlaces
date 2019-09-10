import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const styles = {
    navbarColor: {
        backgroundColor: 'white',
        color: '#f5f5f5'
    }
};
    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation" style = {styles.navbarColor}>
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              Going Places
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <NavLink
                className = "navbar-item"
                to = "/home"
                exact
              >Home</NavLink>
              <NavLink
                className = "navbar-item"
                to = "/login"
                exact
              >Login</NavLink>
              <NavLink
                className = "navbar-item"
                to = "/triplist"
                exact
              >Trip List</NavLink>
              <NavLink
                className = "navbar-item"
                to = "/trip"
                exact
              >Trip</NavLink>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
    );
  };

export default NavBar