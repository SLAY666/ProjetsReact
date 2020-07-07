import React from "react";
import { Link } from "react-router-dom";

export class BoutonAjouterPokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <> 
        <Link to="/ajouterPokemon" className="btn btn-primary mt-5">
          Ajouter un Pokemon
        </Link>
      </>
    );
  }
}
