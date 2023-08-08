import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
// import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div>
    <Navbar>
      <Container className="white-text">
        <Navbar.Brand className="justify-content-start white-text">
          <Navbar.Brand>
            <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '5px', color: '#fff' }} />
          </Navbar.Brand>
          <Navbar.Text style={{ marginRight: '5px', color: '#fff' }}>
            2015
          </Navbar.Text>
        </Navbar.Brand>
        <Navbar.Brand className="justify-content-start white-text">
          <Navbar.Text style={{ marginRight: '5px', color: '#fff' }}>
            most views
          </Navbar.Text>
        </Navbar.Brand>
        <Navbar.Brand className="justify-content-end" style={{ marginRight: '12px', color: '#fff' }}>
          <Navbar.Text>
            <FontAwesomeIcon icon={faMicrophone} style={{ marginRight: '16px', color: '#fff' }} />
          </Navbar.Text>
          <Navbar.Text>
            <FontAwesomeIcon icon={faGear} style={{ marginLeft: '15px', color: '#fff' }} />
          </Navbar.Text>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </div>
);
export default Header;
