import React from "react";
import {Nav,Navbar} from "react-bootstrap"

export class MenuAvecPostBack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">EXEMPLES API</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Version 1</Nav.Link>
      <Nav.Link href="PersonnageV2">Version 2</Nav.Link>
      <Nav.Link href="PersonnageV3">Version 3</Nav.Link>
      <Nav.Link href="PersonnageV4">Version 4</Nav.Link>
      <Nav.Link href="ShortenURL">POST</Nav.Link>
    </Nav>
  </Navbar>
  <br />
</>
    );
  }
}
