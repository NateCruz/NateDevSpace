import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className='d-flex justify-content-center'
      style={{ backgroundColor: "#697565" }}
    >
      <Navbar
        className='d-flex justify-content-center'
        style={{ backgroundColor: "#697565" }}
        {...args}
      >
        <NavbarToggler
          onClick={toggle}
          className='h'
          style={{ width: "100%", borderWidth: "3px" }}
        />
        <Collapse style={{ textAlign: "center" }} isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                className='justify-content-center'
                style={{ textAlign: "center", color: "orange" }}
                href='/components/'
              >
                About the Developer
              </NavLink>
            </NavItem>
            <NavItem className='justify-content-center'>
              <NavLink
                style={{ textAlign: "center", color: "orange" }}
                href='https://github.com/reactstrap/reactstrap'
              >
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                style={{ textAlign: "center", color: "orange" }}
                nav
                caret
              >
                Project Portfolio
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Advanced805</DropdownItem>
                <DropdownItem>Guy With a Truck</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Close</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Click Around and Find Out</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
