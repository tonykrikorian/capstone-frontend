import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContainer from "../components/containers/MainContainer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
