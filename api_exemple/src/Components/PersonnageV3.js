import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class PersonnageV3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch("https://swapi.dev/api/people/2/");
    const json = await response.json();
    this.setState({ data: json });
  }

  render() {
    console.log("DATA SEUL");
    console.log(this.state.data);
    console.log("OBJET DATA");
    console.log(Object.keys(this.state.data));

    return (
      <div>
        <ul>
          {Object.keys(this.state.data).map((key) => (
            <li key={key}>
              {key} : {this.state.data[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
