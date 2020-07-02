import React from "react";
import { Link } from "react-router-dom";

export class Perso extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.toutLobjet);
    return (
      <>
        {/* On aurait tendance à passer en props les informations du personnage. 
            On ne peut pas faire ça car si l'usager entre /Luke Skywalker sans cliquer sur le lien
            Ou s'il met la page en favoris...
            On doit donc appeler de nouveau l'API après le clique sur le lien.
        */}      
        <Link to={"Perso/" + this.props.nom}>
          <h1>nom : {this.props.nom}</h1>
        </Link>
        <h2>Exemple de l'objet : {this.props.toutLobjet.name}</h2>
      </>
    );
  }
}
