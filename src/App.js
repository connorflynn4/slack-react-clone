import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
      <>
        <Switch>
          <Route path="/" exact>
            <h1>This is the home page</h1>
          </Route>
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;
