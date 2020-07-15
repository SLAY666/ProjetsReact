import React from "react";
import { Link } from "react-router-dom";

export class BoutonRetourAccueil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <> 
        <Link to="/" className="btn btn-primary mt-5">
          Retour à la liste de Pokémons
        </Link>
      </>
    );
  }
}
