import React from 'react';
import { Navbar, Nav,  NavDropdown,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from "react-icons/fa";
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="custom-navbar">
      <Navbar.Brand href="#" className="navbar-brand">LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Qualification" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Submenu 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Submenu 2</NavDropdown.Item>
            
          </NavDropdown>
          <NavDropdown title="Organization" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Submenu 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Submenu 2</NavDropdown.Item>
            
          </NavDropdown>
          <NavDropdown title="Research & Analysis" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Submenu 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Submenu 2</NavDropdown.Item>
            
          </NavDropdown>
          <NavDropdown title="Lorem ispum" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Submenu 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Submenu 2</NavDropdown.Item>
            
          </NavDropdown>
          <NavDropdown title="Join Community" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Submenu 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Submenu 2</NavDropdown.Item>
            
          </NavDropdown>
          <Nav.Link href=""><FaSearch/></Nav.Link>
          <Nav.Link href=""><button className='buttonnav'>Enrollment</button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
