import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {API} from "../constantes";
import {toast} from "react-toastify";

export class FormAjouterPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: "", errors : {}};

    this.handleAdd = this.handleAdd.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
  }

  async addPokemon(nom,photo,attaque1, attaque2) { 
    try{ 
      const response = await fetch(API, { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          name: nom,
          picture: photo,
          abilities: [
            {
              name: attaque1
            },
            {
              name: attaque2
            }
          ]
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        this.props.history.push("/");
        toast.success("Ajout du Pokémon " + nom);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

formulaireEstValide(nom,photos,attaque1,attaque2){
  const _errors ={};

  if(!nom) _errors.nom = "Le nom du pokémon est obligatoire";
  if(!photos) _errors.photos = "La photo du pokémon est obligatoire";
  if(!attaque1) _errors.attaque1 = "L'attaque1 du pokémon est obligatoire";
  if(!attaque2) _errors.attaque2 = "L'attaque2' du pokémon est obligatoire";

  this.setState({errors : _errors});
  return Object.keys(_errors).length === 0;
}

  handleAdd(event){
    event.preventDefault();
    
    const nom = document.getElementById('nomPokemon').value;
    const photo = document.getElementById('photoPokemon').value;
    const attaque1 = document.getElementById('attaque1').value;
    const attaque2 = document.getElementById('attaque2').value;

    if(this.formulaireEstValide(nom,photo,attaque1,attaque2)){
      this.addPokemon(nom,photo,attaque1,attaque2);
    }
    
  }

  handlePhoto(event){
    const photos = document.getElementById('photoPokemon').value;
    this.setState( {photo : photos});
  }


  render() {
    console.log(this.props.history);
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="nomPokemon">
                <Form.Label>Nom du Pokemon</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom du Pokemon" isInvalid={!!this.state.errors.nom}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.nom}
                </Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group controlId="photoPokemon">
                <Form.Label>URL d'une photo du Pokemon</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto} isInvalid={!!this.state.errors.photos}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.photos}
                </Form.Control.Feedback>
              </Form.Group>
              {this.state.photo !== "" && <Image src={this.state.photo} rounded width="125"/>}
             
              <Form.Group controlId="attaque1">
                <Form.Label>Nom de l'attaque 1</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 1" isInvalid={!!this.state.errors.attaque1}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.attaque1}
                </Form.Control.Feedback>
              </Form.Group>
             
              <Form.Group controlId="attaque2">
                <Form.Label>Nom de l'attaque 2</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 2" isInvalid={!!this.state.errors.attaque2}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.attaque2}
                </Form.Control.Feedback>
              </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleAdd}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
        </Container>
      </>
    );
  }
}
