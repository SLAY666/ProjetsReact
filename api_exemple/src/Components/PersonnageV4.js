import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class PersonnageV4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data : []};
  }

  //Ajout de la gestion des erreurs
  async componentDidMount(){
      try {
        const response = await fetch('https://swapi.dev/api/people/1/');
        const json = await response.json();
        this.setState({ data: json });
        if (!response.ok) {
          throw Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
      <ul>
        {Object.keys(this.state.data).map(key => (
          <li key={key}>{key} : {this.state.data[key]}</li>
        ))}
      </ul>
    </div>
    );
  }
}
