import React from "react";
import { Pokemons } from "./Pokemons";
import { AjouterPokemon } from "./AjouterPokemon";
import { PageNotFound } from "./PageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import { BoutonAjouterPokemon } from "./BoutonAjouterPokemon";
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
    <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={Pokemons} />
        <Route path="/ajouterPokemon" component={AjouterPokemon} />
        <Route component={PageNotFound} />
      </Switch>
  {location.pathname != "/ajouterPokemon" && <BoutonAjouterPokemon/> }
      <br></br>
    </>
  );
}

export default App;
