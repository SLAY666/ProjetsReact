import React from 'react';
import Row from "react-bootstrap/Row";
import {TvShow} from '../TvShow/TvShow';

const tabSuspense = [
    {
      src : require("../../img/Suspense/lesinvincibles.jpg"),
      alt: "Les invincibles",
      title: "Les Invincibles"
    },
    {
      src : require("../../img/Suspense/lesinvincibles.jpg"),
      alt: "Les invincibles",
      title: "Les Invincibles"
    },
    {
      src : require("../../img/Suspense/lesinvincibles.jpg"),
      alt: "Les invincibles",
      title: "Les Invincibles"
    },
    {
      src : require("../../img/Suspense/lesinvincibles.jpg"),
      alt: "Les invincibles",
      title: "Les Invincibles"
    },
    {
      src : require("../../img/Suspense/lesinvincibles.jpg"),
      alt: "Les invincibles",
      title: "Les Invincibles"
    },
    {
      src : require("../../img/Suspense/lesinvincibles.jpg"),
      alt: "Les invincibles",
      title: "Les Invincibles"
    }
]

export class Categorie extends React.Component{
  handleClick() {
    alert();
  }
  
  render() {
    return (
      <>
      <Row>
        <h1>{this.props.nom}</h1>
      </Row>
      <Row>
        {this.AfficherCategorie()}
      </Row>
      </>
      )
  }
  
  

  AfficherCategorie(){
    if(this.props.nom === "Suspense"){
      return (
        tabSuspense.map((element,i) => <TvShow key={"suspense"+i}
                                           src={element.src}
                                           alt={element.alt}
                                           title={element.title}
                                           onClick={this.handleClick}
                                      ></TvShow>)
       /* <>
        <TvShow src= {require("../../img/Suspense/district31.jpg")}/>
        <TvShow src= {require("../../img/Suspense/unite9.jpg")}/>
        <TvShow src= {require("../../img/Suspense/lesinvincibles.jpg")}
                alt="Les invincibles"
                title="Les Invincibles"
        />
        <TvShow src= {require("../../img/Suspense/serienoire.jpg")}/>
        <TvShow src= {require("../../img/Suspense/fugueuse.jpg")}/>
        <TvShow src= {require("../../img/Suspense/19-2.jpg")}/>
        </>*/
      )
    }
    else if(this.props.nom === "Humour"){
      return (
        <>
        <TvShow src= {require("../../img/Humour/lanceEtCompte.jpg")}/>
        <TvShow src= {require("../../img/Humour/lapetitevie.jpg")}/>
        <TvShow src= {require("../../img/Humour/lesboys.jpg")}/>
        <TvShow src= {require("../../img/Humour/lesbeauxmalaises.jpg")}/>
        <TvShow src= {require("../../img/Humour/lesbougon.jpg")}/>
        <TvShow src= {require("../../img/Humour/minuitlesoir.jpg")}/>
        </>
      )
    }
    else if(this.props.nom === "Séries américaines"){
      return (
        <>
        <TvShow src= {require("../../img/Series americaines/betterCallSaul.jpg")}><h4>Better Call Saul</h4></TvShow>
        <TvShow src= {require("../../img/Series americaines/breakingbad.jpg")}/>
        <TvShow src= {require("../../img/Series americaines/dexter.jpg")}/>
        <TvShow src= {require("../../img/Series americaines/got.jpg")}/>
        <TvShow src= {require("../../img/Series americaines/mandalorian.jpg")}/>
        <TvShow src= {require("../../img/Series americaines/vikings.jpg")}/>
        </>
      )
    }
  }
}
Categorie.defaultProps = { nom: 'Suspense' };