import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"

export class FormAjouterPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: "", setErrors : {}};

    this.handleAdd = this.handleAdd.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
  }

  async addPokemon(nom,photo,attaque1, attaque2) { 
    try{ 
      const newID = await this.getID();
      const response = await fetch('http://localhost:3001/pokemons/', { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({id : newID,
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
  //Retourne le prochain ID pour savoir où ajouter
  async getID() {
    try {
      let nextID = 0 
      const response = await fetch("http://localhost:3001/pokemons");
      const reponseDeApi = await response.json();
      for (let i=0;i<reponseDeApi.length;i++){
        if(reponseDeApi[i].id > nextID){
            nextID = reponseDeApi[i].id;
        }
      }   
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return nextID+1;
    } catch (error) {
      console.log(error);
    }
  }

  handleAdd(event){
    event.preventDefault();
    
    const nom = document.getElementById('nomPokemon').value;
    const photo = document.getElementById('photoPokemon').value;
    const attaque1 = document.getElementById('attaque1').value;
    const attaque2 = document.getElementById('attaque2').value;

    this.addPokemon(nom,photo,attaque1,attaque2);
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
                <Form.Control type="text" placeholder="Entrer le nom du Pokemon" />
              </Form.Group>
              <Form.Group controlId="photoPokemon">
                <Form.Label>URL d'une photo du Pokemon</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
              </Form.Group>
              {this.state.photo !== "" && <Image src={this.state.photo} rounded width="125"/>}
              <Form.Group controlId="attaque1">
                <Form.Label>Nom de l'attaque 1</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 1" />
              </Form.Group>
              <Form.Group controlId="attaque2">
                <Form.Label>Nom de l'attaque 2</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 2" />
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
