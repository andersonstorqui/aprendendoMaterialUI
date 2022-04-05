import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "../src/templates/Default";
import { Page } from "../src/templates/Page";
import { Customer } from "./pages/Customer";

function App() {
  return (
    <Router>
      <Default>
        <Switch>
          <Route exact path="/">
            <Page title="Home" Component={Home} />
          </Route>
          <Route path="/customer">
            <Page title="Clientes" Component={Customer} />
          </Route>
        </Switch>
      </Default>
    </Router>
  );
}

export default App;
