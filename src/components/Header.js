import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar className="header">
        <Container>
          <Nav className="me-auto">
            <ul className="nav-list">
              <li>
                <NavLink to="/" className={location.pathname === '/' ? 'active-link' : ''} style={{ textDecoration: 'none' }}>
                  <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px' }} />
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
