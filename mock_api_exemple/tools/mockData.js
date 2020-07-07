const pokemons = [
  {
    "name":"Bulbasaur",
    "picture" : "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/500px-001Bulbasaur.png",
    "abilities": [
      {
        "name": "Overgrow",
      },
      {
        "name": "Chlorophyll",
      },
    ],
  },
  {
    "name":"Pikachu",
    "picture" : "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/500px-025Pikachu.png",
    "abilities": [
      {
        "name": "Static",
      },
      {
        "name": "Lightning Rod",
      },
    ],
  },
  {
    "name":"Charmander",
    "picture" : "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/500px-004Charmander.png",
    "abilities": [
      {
        "name": "Blaze",
      },
      {
        "name": "Solar Power",
      },
    ],
  },
]

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  pokemons
};
