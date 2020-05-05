import React from 'react';
import Row from "react-bootstrap/Row";
import showImage from '../../img/lesinvincibles.jpg';
import {TvShow} from '../TvShow/TvShow';

let categorieName = "Suspense";

export class Categorie extends React.Component{
  render() {
    return (
      <>
      <Row>
        <h1>{categorieName}</h1>
      </Row>
      <Row>
        <TvShow />
        <TvShow />
        <TvShow />
        <TvShow />
        <TvShow />
        <TvShow />
      </Row>
      </>
      )
  }
}