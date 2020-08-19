import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"

function FormEditerPokemonHooks(props){
  const [donneesRecues , setDonneesRecues] = useState({name: '', picture:"", abilities : ["",""] });
  const [pokemonID , setPokemonID] = useState(props.location.search.substring(4,props.location.search.length));
  const [photos , setPhotos] = useState("");
  //Ajout de la gestion des erreurs
  useEffect(() => {
    getPokemonInfos();
  },[]); //Si on enlève le second paramètre, on obtient une boucle infinie.

  //On récupère le Pokemon pour ensuite remplir le formulaire.
  async function getPokemonInfos() {
    try {
      
      const response = await fetch("http://localhost:3001/pokemons/"+pokemonID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editPokemon(nom,photo,attaque1, attaque2) { 
    try{ 
      const response = await fetch('http://localhost:3001/pokemons/'+ pokemonID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({id : pokemonID,
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
        props.history.push("/");
        toast.success("Modification du Pokémon " + nom);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

async function removePokemon() { 
    try{ 
    const response = await fetch('http://localhost:3001/pokemons/'+ pokemonID, { 
      method:'delete', 
    }); 
    if(response.ok){ 
      const jsonResponse = await response.json(); 
      props.history.push("/");
      toast.error("Supression du Pokémon ");

      return jsonResponse; 
    } 
    throw new Error('Request failed!'); 
} 
 catch(error){ 
    console.log(error); 
 } 
}

  function handleEdit(event){
    event.preventDefault();
    
    const nom = document.getElementById('nomPokemon').value;
    const photo = document.getElementById('photoPokemon').value;
    const attaque1 = document.getElementById('attaque1').value;
    const attaque2 = document.getElementById('attaque2').value;

    editPokemon(nom,photo,attaque1,attaque2);
  }

  function handlePhoto(event){
    const photos = document.getElementById('photoPokemon').value;
    setPhotos(photos);
  }
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="nomPokemon">
                <Form.Label>Nom du Pokemon</Form.Label>
                <Form.Control type="text" defaultValue={donneesRecues.name}/> {/*/ Faire le test avec value*/}
              </Form.Group>
              <Form.Group controlId="photoPokemon">
                <Form.Label>URL d'une photo du Pokemon</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto} defaultValue={donneesRecues.picture}/>
              </Form.Group>
              {donneesRecues.picture !== "" && <Image src={donneesRecues.picture} rounded width="125"/>}
              <Form.Group controlId="attaque1">
                <Form.Label>Nom de l'attaque 1</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 1" defaultValue={donneesRecues.abilities[0].name}/>
              </Form.Group>
              <Form.Group controlId="attaque2">
                <Form.Label>Nom de l'attaque 2</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 2" defaultValue={donneesRecues.abilities[1].name}/>
              </Form.Group>

            <Button variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
          <p className="btn btn-danger mt-5" onClick={removePokemon}>Supprimer le Pokemon</p>
        </Container>
      </>
    );
  }

  export default FormEditerPokemonHooks;