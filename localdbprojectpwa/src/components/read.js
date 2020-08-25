import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';  


function Read() {
    test();
  return (
    <h1>Liste des pokemons</h1>
  );
}

function test(){
    var json = require('../localDB/db.json');
    console.log(json);
}

export default Read;