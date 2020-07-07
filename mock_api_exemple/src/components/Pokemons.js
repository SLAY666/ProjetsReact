import React from "react";
import { Pokemon } from "./Pokemon";


export class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }

  //Ajout de la gestion des erreurs
  async componentDidMount() {
      try {
        const response = await fetch("http://localhost:3001/pokemons");
        const reponseDeApi = await response.json();
        this.setState({ donneesRecues: reponseDeApi });
        if (!response.ok) {
          //Permet d'attraper l'erreur 500 et l'erreur 400
          throw Error(response.statusText);
        }
      } catch (error) {
        //On gère l'erreur
        console.log(error);
      }
    }

  render() {
    return (
      <div>
        <h1>Affichage de la liste de tous les Pokemons</h1>
        {this.state.donneesRecues.map((key,i) => (
          <Pokemon nom={key.name} toutLobjet={key} id={i+1}></Pokemon>
        ))}
      </div>
    );
  }
}
