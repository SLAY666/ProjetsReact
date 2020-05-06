import React from "react";
import logo from "../../img/logo.svg";
import { MonPremierComponent } from "../MonPremierComponent/MonPremierComponent";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MonPremierComponent image="Les Boys" />
        <MonPremierComponent />
        <MonPremierComponent />
      </header>
    </div>
  );
}

export default App;
