import React from "react";
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap"

export class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.toutLobjet);
    return (
      <>
      <Card>
        <Card.Body>
          <Link to={"Perso/" + this.props.nom + "?id=" + this.props.id}>
            <h1>nom : {this.props.nom}</h1>
          </Link>
        </Card.Body>
      </Card>     
      </>
    );
  }
}
