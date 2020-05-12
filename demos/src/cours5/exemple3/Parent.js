import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Ami } from './Ami';

export class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Patate' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Ami name={this.state.name} />
      </div>
    );
  }
}
