import React from "react";

export class Perso extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.toutLobjet);
    return (
      <>
        <h1>nom : {this.props.nom}</h1>
        <h2>Exemple de l'objet : {this.props.toutLobjet.name}</h2>
      </>
    );
  }
}
