import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "../src/templates/Default";
import { Customer } from "./pages/Customer";

function App() {
  return (
    <Default>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
        </Switch>
      </Router>
    </Default>
  );
}

export default App;
