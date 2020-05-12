import React from "react";
import Row from "react-bootstrap/Row";
import './Categorie.css';
import { TvShow } from "../TvShow/TvShow";

const tabSuspense = [
  {
    src: require("../../img/Suspense/lesinvincibles.jpg"),
    alt: "Les invincibles",
    title: "Les Invincibles",
  },
  {
    src: require("../../img/Suspense/19-2.jpg"),
    alt: "19-2",
    title: "19-2",
  },
  {
    src: require("../../img/Suspense/district31.jpg"),
    alt: "District 31",
    title: "District 31",
  },
  {
    src: require("../../img/Suspense/fugueuse.jpg"),
    alt: "Fugueuse",
    title: "Fugueuse",
  },
  {
    src: require("../../img/Suspense/unite9.jpg"),
    alt: "Unite 9",
    title: "Unite 9",
  },
  {
    src: require("../../img/Suspense/serienoire.jpg"),
    alt: "serienoire",
    title: "serienoire",
  },
];

const tabAmericaine = [
  {
    src: require("../../img/Series americaines/betterCallSaul.jpg"),
    alt: "Better call Saul",
    title: "Better call Saul",
  },
  {
    src: require("../../img/Series americaines/breakingbad.jpg"),
    alt: "Breaking Bad",
    title: "Breaking Bad",
  },
  {
    src: require("../../img/Series americaines/dexter.jpg"),
    alt: "Dexter",
    title: "District 31",
  },
  {
    src: require("../../img/Series americaines/got.jpg"),
    alt: "Got",
    title: "Got",
  },
  {
    src: require("../../img/Series americaines/mandalorian.jpg"),
    alt: "mandalorian",
    title: "mandalorian",
  },
  {
    src: require("../../img/Series americaines/vikings.jpg"),
    alt: "vikings",
    title: "vikings",
  },
];

export class Categorie extends React.Component {
  // handleHover(e) {
  //   //e représente le Tvshow sur qui le hover est vrai
  //   console.log(e);
  //   //e.setStyle({ opacity: 0.5 });
  // }

  render() {
    return (
      <>
        <Row>
          <h1>{this.props.nom}</h1>
        </Row>
        <Row>{this.AfficherCategorie()}</Row>
      </>
    );
  }

  AfficherCategorie() {
    if (this.props.nom === "Suspense") {
      return tabSuspense.map((element, i) => (
        <TvShow
          key={"suspense" + i}
          src={element.src}
          alt={element.alt}
          title={element.title}
          //onHover={this.handleHover}
        ></TvShow>
      ));
    } else if (this.props.nom === "Humour") {
      return (
        //Première métode, si on avait 10 000 séries, ça prendrait 10 000 lignes...
        <>
          <TvShow src={require("../../img/Humour/lanceEtCompte.jpg")} />
          <TvShow src={require("../../img/Humour/lapetitevie.jpg")} />
          <TvShow src={require("../../img/Humour/lesboys.jpg")} />
          <TvShow src={require("../../img/Humour/lesbeauxmalaises.jpg")} />
          <TvShow src={require("../../img/Humour/lesbougon.jpg")} />
          <TvShow src={require("../../img/Humour/minuitlesoir.jpg")} />
        </>
      );
    } else if (this.props.nom === "Séries américaines") {
      return tabAmericaine.map((element, i) => (
        <TvShow
          key={"américaine" + i}
          src={element.src}
          alt={element.alt}
          title={element.title}
          //onHover={this.handleHover}
        ></TvShow>
      ));
    }
  }
}
Categorie.defaultProps = { nom: "Suspense" };
