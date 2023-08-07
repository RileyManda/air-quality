import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <Navbar>
      <Container>
        <Nav className="me-auto">
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</NavLink>
            </li>
          </ul>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
