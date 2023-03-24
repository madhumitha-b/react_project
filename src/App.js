import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Calculator from "./components/Calculator";
import Result from "./components/Result";

/**
 * https://stackoverflow.com/questions/64378396/how-to-send-result-data-from-one-page-to-another-page-in-react
 */

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/result" component={Result} />
          <Route path="/" component={Calculator} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
