import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class AjouterClient extends React.Component {
  constructor(props) {
    super(props);

    this.handleAjouter = this.handleAjouter.bind(this);
  }
  handleAjouter(){
    const nom = document.getElementById('nom').value;
    const travail = document.getElementById('travail').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    let newClient = {
      nom: nom,
      travail: travail,
      src: require("../img/homer.png")
    }
    console.log(newClient);
    this.props.onClick(newClient);  
  }
  render() {
    return (
      <Col md lg="2">
        <Card>
          <Card.Img variant="top" src={this.props.src}/>
          <Form>
          <Card.Body>
          <Form.Group controlId="nom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Enter name"/>
            </Form.Group>
            <Form.Group controlId="travail">
              <Form.Label>Travail</Form.Label>
              <Form.Control type="text" placeholder="Enter work"/>
            </Form.Group>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
          </ListGroupItem>
          <ListGroupItem>
          <Form.Group controlId="phone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control type="phone" placeholder="Enter phone"/>
            </Form.Group>
          </ListGroupItem>
          </ListGroup>
            <Button variant="primary" onClick={this.handleAjouter}>
                  Sauvegarder
            </Button>
          </Form>
        </Card>
      </Col>
    );
  }
}
