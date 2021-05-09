import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = ({ isAuthenticated = true }) => (
  <div>
    <NavLink
      exact
      to="/"
      className={style.link}
      activeClassName={style.activeLink}
    >
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        exact
        to="/contacts"
        className={style.link}
        activeClassName={style.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </div>
);

export default Navigation;
