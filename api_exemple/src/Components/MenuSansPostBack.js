import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class MenuSansPostBack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activeStyle = { color: "pink" };
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">EXEMPLES API</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink exact to="/" activeStyle={activeStyle}>
              Home
            </NavLink>{" "}
            {"  |  "}
            <NavLink to="/PersonnageV2" activeStyle={activeStyle}>
              Version 2
            </NavLink>{" "}
            {"  |  "}
            <NavLink to="/PersonnageV3" activeStyle={activeStyle}>
              Version 3
            </NavLink>{" "}
            {"  |  "}
            <NavLink to="/PersonnageV4" activeStyle={activeStyle}>
              Version 4
            </NavLink>{" "}
            {"  |  "}
            <NavLink to="/ShortenURL" activeStyle={activeStyle}>
              POST
            </NavLink>
          </Nav>
        </Navbar>
        <br />
      </>
    );
  }
}
