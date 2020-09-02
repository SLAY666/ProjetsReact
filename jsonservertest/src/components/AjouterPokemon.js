import React from "react";
import { FormAjouterPokemon } from "./FormAjouterPokemon";

export class AjouterPokemon extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <>
        <FormAjouterPokemon history={this.props.history} />
      </>
    );
  }
}
