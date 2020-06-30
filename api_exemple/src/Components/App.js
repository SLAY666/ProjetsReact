import React from 'react';
import {PersonnageV1} from './PersonnageV1';
import {PersonnageV2} from './PersonnageV2';
import {PersonnageV3} from './PersonnageV3';
import {PersonnageV4} from './PersonnageV4';
import {ShortenURL} from './ShortenURL';
import {MenuSansPostBack} from './MenuSansPostBack'
import {ExempleLink} from './ExempleLink'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
      <MenuSansPostBack />
      <Route path="/" exact component={PersonnageV1} />
      <Route path="/PersonnageV2" component={PersonnageV2} />
      <Route path="/PersonnageV3" component={PersonnageV3} />
      <Route path="/PersonnageV4" component={PersonnageV4} />
      <Route path="/ShortenURL" component={ShortenURL} />
      <br></br>
      <ExempleLink/>
    </>
  );
}

export default App;
