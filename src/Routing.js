import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
function Routing() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact to="/" component={Home} />

          <Route exact to="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routing;
