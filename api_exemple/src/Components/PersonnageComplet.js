import React from "react";

export class PersonnageComplet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <>{this.props.match.params.slug + this.props.location.aboutProps}</>;
  }
}
