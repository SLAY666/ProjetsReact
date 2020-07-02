import React from "react";

export class PersonnageComplet extends React.Component {
  
  render() {
    console.log(this.props);
    return <>{this.props.match.params.id + " " + this.props.location.search}</>;
  }
}
