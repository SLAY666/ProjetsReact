import React from "react";
import { Pokemon } from "./Pokemon";


export class ManagePokemons extends React.Component {
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
          throw Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }

  render() {
    return (
      <div>
        <h1>Affichage de la liste de tous les Pokemons</h1>
        {this.state.donneesRecues.map((key,i) => (
          <Pokemon nom={key.name} id={key.id} key={key.name+key.id}></Pokemon>
        ))}
      </div>
    );
  }
}
