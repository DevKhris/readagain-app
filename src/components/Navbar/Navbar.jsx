import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Topbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light fixed="top" expand="lg">
        <NavbarBrand href="/">
        <img src="../logo.png" alt="ReadAgain" width="128" height="64"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="catalog">Catalog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="bookshelf">Bookshelf</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {props.username}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="dashboard">Dashboard</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="settings">Settings</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="logout">Logout</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topbar;