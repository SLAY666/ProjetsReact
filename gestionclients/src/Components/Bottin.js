import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Client } from "./Client";

const liste = [
  {
    nom: "Homer Simpson",
    travail: "Inspecteur de la sécurité",
    src: require("../img/homer.png"),
  },
  {
    nom: "Marge Simpson",
    travail: "Femme au foyer",
    src: require("../img/marge.jpeg"),
  },
  {
    nom: "Bart Simpson",
    travail: "Étudiant",
    src: require("../img/bart.png"),
  },
  {
    nom: "Lisa Simpson",
    travail: "Étudiante",
    src: require("../img/lisa.jpeg"),
  },
  {
    nom: "Apu Nahasape",
    travail: "Propriétaire 7 eleven",
    src: require("../img/apu.png"),
  },
  {
    nom: "Barney Gumble",
    travail: "Propriétaire Plow King",
    src: require("../img/barney.jpeg"),
  },
  {
    nom: "Edna Krapabelle",
    travail: "Enseignante",
    src: require("../img/edna.jpeg"),
  },
  {
    nom: "Krusty le clown",
    travail: "Clown",
    src: require("../img/krusty.jpeg"),
  },
  {
    nom: "Milhouse Van Houten",
    travail: "Étudiant",
    src: require("../img/milhouse.png"),
  },
  {
    nom: "Ned Flanders",
    travail: "Propriétaire boutique Lefty",
    src: require("../img/ned.jpeg"),
  },
  {
    nom: "Ralph  Wiggum",
    travail: "Étudiant",
    src: require("../img/ralph.jpeg"),
  },
  {
    nom: "Waylon Smithers",
    travail: "Assitant usine nucléaire Springfield",
    src: require("../img/waylon.jpeg"),
  },
];


export class Bottin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rechercher:"",
                  listeClients : liste};
    this.Rechercher = this.Rechercher.bind(this);
    this.Effacer = this.Effacer.bind(this);
  }
  Rechercher(){
    let nom = document.getElementById("inputRechercher").value;
    this.setState({rechercher:nom});
  }
  Effacer(){
    document.getElementById("inputRechercher").value = "";
    this.setState({rechercher:""});
  }
  render() {
    return (
    
      <Container fluid>
        <Row>
        <Form>
        <InputGroup className="mb-3">
          <FormControl
            id="inputRechercher"
            placeholder="Rechercher"
            aria-label="Rechercher"
            aria-describedby="Rechercher"
            onChange={this.Rechercher}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.Rechercher}>Rechercher</Button>
          </InputGroup.Append>
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.Effacer}>Annuler</Button>
          </InputGroup.Append>
        </InputGroup>
  
</Form>
        </Row>
        <Row>
          <h1>Bottin téléphonique des Simpsons</h1>
        </Row>
        <Row>{this.AfficherBottin()}</Row>
      </Container>
    );
  }

  AfficherBottin() {
    if(this.state.rechercher === ""){
       return this.state.listeClients.map((element, i) => (
        <Client
          key={"perso" + i}
          src={element.src}
          nom={element.nom}
          travail={element.travail}
        ></Client>
      ));
    }
    else{
      const searchResult = this.state.listeClients.filter(l => l.nom.toLowerCase().includes(this.state.rechercher.toLowerCase()));
      return searchResult.map((element, i) => (
        <Client
          key={"perso" + i}
          src={element.src}
          nom={element.nom}
          travail={element.travail}
        ></Client>
      ));
    }
  }
}
