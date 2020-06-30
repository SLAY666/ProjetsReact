import React from "react";
import {Link} from 'react-router-dom'

export class ExempleLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <Link exact to="/" className="btn btn-primary">Retour à l'accueil</Link>
        </>
    );
  }
}
