import React, { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";

function ManagePokemonsHooks() {
  const [donneesRecues, setDonneesRecues] = useState([]);

  //Ajout de la gestion des erreurs
  useEffect(() => {
    getPokemons();
  }, [donneesRecues.join(",")]); //Si on enlève le second paramètre, on obtient une boucle infinie.

  async function getPokemons() {
    try {
      const response = await fetch("https://crudcrud.com/api/5da054a8c5cf4211b57c0aa0a9460262/pokemons");
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Affichage de la liste de tous les Pokemons</h1>
      {donneesRecues.map((key, i) => (
        <Pokemon nom={key.name} id={key._id} key={key.name + key._id}></Pokemon>
      ))}
    </div>
  );
}

export default ManagePokemonsHooks;
