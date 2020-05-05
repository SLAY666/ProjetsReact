import React from 'react';
import logo from '../../img/becflix.png';
import './App.css';
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import {Catalogue} from '../Catalogue/Catalogue'

function App() {
  return (
    <Container fluid>
      <Row>
       <Col>
          <img src={logo} alt="BecFlix" width="100px"/>
       </Col>
      </Row>
      <Catalogue />
    </Container>
  );
}

export default App;
