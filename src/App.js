import PaginaPrincipal from "./componentes/PaginaPrincipal";
import Pruebas from "./componentes/Pruebas";
import React from "react";
import Estatico from "./componentes/Estatico";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pais from "./componentes/Pais";
function App() {
  return (
    <Router>
      <div className="App">
        <Estatico />
        <Switch>
          <Route path="/:Slug">
          <Pais/>
          </Route>
          <Route path="/pruebas">
            <Pruebas />
          </Route>
          <Route path="/" exact>
            <PaginaPrincipal />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
