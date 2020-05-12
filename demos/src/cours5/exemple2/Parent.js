import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

export class Parent extends React.Component {
  constructor(props) { 
    super(props); 
    this.state = { totalClicks: 0 }; 
    this.handleClick = this.handleClick.bind(this); 
} 

handleClick() { 
    const total = this.state.totalClicks; 
    this.setState( 
        { totalClicks: total + 1 } 
    );
    console.log(this.state.totalClicks); 
} 
render() { 
    return ( 
        <Child onClick={this.handleClick} /> 
    ); 
}
}
