import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { red, yellow } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Default } from "../src/templates/Default";

const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: yellow[900],
    },
  },
});

function App() {
  return (
    <Default>
      <Router>
        <Switch>
          <Route path="/">
            <ThemeProvider theme={theme}>
              <Home />
            </ThemeProvider>
          </Route>
        </Switch>
      </Router>
    </Default>
  );
}

export default App;
