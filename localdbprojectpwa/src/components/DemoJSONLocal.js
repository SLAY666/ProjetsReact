import React from "react";

function DemoJSONLocal() {
    test();
  return (
    <h1>Liste des pokemons</h1>
  );
}

function test(){
  //OUVERTURE DE LA BD  
  let json = require('../localDB/db.json');

    console.log("AFFICHER"); 
    //READ, on pourrait aussi prendre un for traditionnel comme en bas
    json.pokemons.forEach(readPokemon);

    function readPokemon(pokemon) {
      console.log(pokemon);
    }

    
    //AJOUT
    json.pokemons.push(
      {
      "id": 3,
      "name": "Shany",
      "picture": "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/500px-025Pikachu.png",
      "abilities": [
        {
          "name": "Statics"
        },
        {
          "name": "Lightning Rod"
        }
      ]
    });
    
    console.log("AJOUTER"); 
    json.pokemons.forEach(readPokemon);


    //MODIFIER
    for (var i = 0; i < json.pokemons.length; i++) {
      if (json.pokemons[i].id === 3) {
        json.pokemons[i].name = "Shany Carle";
        break;
      }
    }
    console.log("MODIFIER"); 
    json.pokemons.forEach(readPokemon);

    //SUPRESSION
    for (var i = 0; i < json.pokemons.length; i++) {
      if (json.pokemons[i].id === 3) {
        //json.pokemons.splice(i);
        break;
      }
    }
    console.log("SUPRESSION"); 
    json.pokemons.forEach(readPokemon);

    //Le problème avec cette approche est que c'est non persistant. Les sécurités des navigateurs ne permettent pas d'écrire dans un fichier côté client.
    
}



export default DemoJSONLocal;