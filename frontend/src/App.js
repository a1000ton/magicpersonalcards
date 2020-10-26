import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MagicCards from "./pages/magicCards";
import MyCards from "./pages/myCards";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/magiccards">Magic Cards</Link>
            </li>
            <li>
              <Link to="/">My Cards</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/magiccards">
              <MagicCards />
            </Route>
            <Route path="/">
              <MyCards />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
