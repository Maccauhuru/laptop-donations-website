import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      < div className = "text-white">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Laptop-Donations.Org</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">How it works</NavLink>
              </NavItem>
             <NavItem>
                <NavLink href="/components/">FAQ</NavLink>
              </NavItem>
             <NavItem>
                <NavLink href="/components/">Contact</NavLink>
              </NavItem>
              <div className="nav-divider">|</div>
             <NavItem>
            <NavLink href="/components/">Login</NavLink>
              </NavItem>
            <NavItem>
            <NavLink href="/components/">Sign Up</NavLink>
              </NavItem>
             
                
                


            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}