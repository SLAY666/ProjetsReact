import React from "react";

export class MonPremierComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>BOO YA</h1>
        <p>Un component</p>
      </div>
    );
  }
}
