import React from "react";
import Col from "react-bootstrap/Col";

export class TvShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};
  }
  render() {
    return (
      <Col xs lg="2">
        <img
          src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
          className="img-fluid"
          onMouseOut={() => this.setState({hovered: false})}
          onMouseOver={() => this.setState({hovered: true})}
          style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`}}
        />
      </Col>
    );
  }
}
