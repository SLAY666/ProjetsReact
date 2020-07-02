import React from "react";
import { PersonnageV1 } from "./PersonnageV1";
import { PersonnageV2 } from "./PersonnageV2";
import { PersonnageV3 } from "./PersonnageV3";
import { PersonnageV4 } from "./PersonnageV4";
import { PersonnageComplet } from "./PersonnageComplet";
import { ShortenURL } from "./ShortenURL";
import { PageNotFound } from "./PageNotFound";
import { MenuSansPostBack } from "./MenuSansPostBack";
import { ExempleLink } from "./ExempleLink";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <MenuSansPostBack />
      <Switch>
        <Route path="/" exact component={PersonnageV1} />
        <Route path="/PersonnageV2" component={PersonnageV2} />
        <Route path="/PersonnageV3" component={PersonnageV3} />
        <Route path="/PersonnageV4" component={PersonnageV4} />
        <Route path="/ShortenURL" component={ShortenURL} />
        <Route path="/Perso/:id" component={PersonnageComplet} />
        <Redirect from="/about-page" to="about" />
        <Route component={PageNotFound} />
      </Switch>
      <br></br>
      <ExempleLink />
    </>
  );
}

export default App;
