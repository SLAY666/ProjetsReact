import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"

export class FormEditerPokemon extends React.Component {
  constructor(props) {
    super(props);
    //Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.
    this.state = {
                  donneesRecues: {name: '', picture:"", abilities : ["",""] }, 
                  setErrors : {}};

    this.handleEdit = this.handleEdit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.editPokemon = this.editPokemon.bind(this);
    this.removePokemon = this.removePokemon.bind(this);
  }

  //On récupère le Pokemon pour ensuite remplir le formulaire.
  async componentDidMount() {
    try {
      await this.setState({pokemonID : this.props.location.search.substring(4,this.props.location.search.length)});
      await console.log(this.state.pokemonID);
      const response = await fetch("https://crudcrud.com/api/5da054a8c5cf4211b57c0aa0a9460262/pokemons/"+this.state.pokemonID);
      const reponseDeApi = await response.json();
      this.setState({ donneesRecues: reponseDeApi });
      console.log(this.state.donneesRecues);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async editPokemon(nom,photo,attaque1, attaque2) { 
    try{ 
      const response = await fetch('https://crudcrud.com/api/5da054a8c5cf4211b57c0aa0a9460262/pokemons/'+ this.state.pokemonID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({_id : this.state.pokemonID,
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
        toast.success("Modification du Pokémon " + nom);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

async removePokemon() { 
    try{ 
    const response = await fetch('https://crudcrud.com/api/5da054a8c5cf4211b57c0aa0a9460262/pokemons/'+this.state.pokemonID, { 
      method:'DELETE', 
    }); 
    if(response.ok){
      console.log(response);
      //const response = await response; 
      //const jsonResponse = await response.json(); 
      console.log("SUPPRESSION!");
      this.props.history.push("/");
      toast.error("Supression du Pokémon ");

      //return jsonResponse; 
      return response;
    } 
    throw new Error('Request failed!'); 
} 
 catch(error){ 
    console.log(error); 
 } 
}

  handleEdit(event){
    event.preventDefault();
    
    const nom = document.getElementById('nomPokemon').value;
    const photo = document.getElementById('photoPokemon').value;
    const attaque1 = document.getElementById('attaque1').value;
    const attaque2 = document.getElementById('attaque2').value;

    this.editPokemon(nom,photo,attaque1,attaque2);
  }

  handlePhoto(event){
    const photos = document.getElementById('photoPokemon').value;
    this.setState( {photo : photos});
  }

  render() {
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="nomPokemon">
                <Form.Label>Nom du Pokemon</Form.Label>
                <Form.Control type="text" defaultValue={this.state.donneesRecues.name}/> {/*/ Faire le test avec value*/}
              </Form.Group>
              <Form.Group controlId="photoPokemon">
                <Form.Label>URL d'une photo du Pokemon</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto} defaultValue={this.state.donneesRecues.picture}/>
              </Form.Group>
              {this.state.donneesRecues.picture !== "" && <Image src={this.state.donneesRecues.picture} rounded width="125"/>}
              <Form.Group controlId="attaque1">
                <Form.Label>Nom de l'attaque 1</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 1" defaultValue={this.state.donneesRecues.abilities[0].name}/>
              </Form.Group>
              <Form.Group controlId="attaque2">
                <Form.Label>Nom de l'attaque 2</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 2" defaultValue={this.state.donneesRecues.abilities[1].name }/>
              </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleEdit}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
          <p className="btn btn-danger mt-5" onClick={this.removePokemon}>Supprimer le Pokemon</p>
        </Container>
      </>
    );
  }
}
