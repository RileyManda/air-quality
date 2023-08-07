import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
