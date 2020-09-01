import React from "react";
import { Link } from "react-router-dom";
import {Card,Image} from "react-bootstrap"

export class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <Card>
        <Card.Body>
          <Image src={this.props.urlPhoto} rounded width="125"/>
          <Link to={"Pokemons/" + this.props.nom + "?id=" + this.props.id}>
            <h1>{this.props.nom}</h1>
          </Link>
        </Card.Body>
      </Card>     
      </>
    );
  }
}
