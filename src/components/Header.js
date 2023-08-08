import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const location = useLocation();

  return (
    <Navbar>
      <Container>
        <NavLink to="/" className={location.pathname === '/' ? 'active-link' : ''} style={{ textDecoration: 'none', color: '#fff' }}>
          <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '5px' }} />
          2015
        </NavLink>
        <Navbar.Brand className="white-text">
          most views
        </Navbar.Brand>
        <Navbar.Brand className="justify-content-end" style={{ marginRight: '12px', color: '#fff' }}>
          <Navbar.Text>
            <FontAwesomeIcon icon={faMicrophone} style={{ marginRight: '16px', color: '#fff' }} />
          </Navbar.Text>
          <Navbar.Text>
            <FontAwesomeIcon icon={faCog} style={{ marginLeft: '15px', color: '#fff' }} />
          </Navbar.Text>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
