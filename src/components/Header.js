import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
// import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div>
    <Navbar>
      <Container className="white-text">
        <Navbar.Brand className="justify-content-start white-tex">
          <Navbar.Brand>
            <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '5px', color: '#fff' }} />
          </Navbar.Brand>
          <Navbar.Text style={{ marginRight: '5px', color: '#fff' }}>
            2015
          </Navbar.Text>
        </Navbar.Brand>
        <Navbar.Brand className="justify-content-end" style={{ marginRight: '5px', color: '#fff' }}>
          <Navbar.Text>
            <FontAwesomeIcon icon={faMicrophone} style={{ marginRight: '5px', color: '#fff' }} />
          </Navbar.Text>
          <Navbar.Text>
            <FontAwesomeIcon icon={faGear} style={{ marginRight: '5px', color: '#fff' }} />
          </Navbar.Text>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </div>
);
export default Header;
