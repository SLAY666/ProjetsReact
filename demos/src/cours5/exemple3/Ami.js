import React from 'react';

export class Ami extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <>
        <h1>Mon nom est: {name}!</h1>
        <h2>Ce nom {name} est le plus beau au monde?</h2>
      </>
    );
  }
}