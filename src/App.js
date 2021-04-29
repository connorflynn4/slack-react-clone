import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="app">
      <Router>
      <>
      <Header />
      <AppBody>
      <Sidebar />
      <Switch>
          <Route path="/" exact>
          </Route>
        </Switch>
      </AppBody>
        
      </>
    </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
`;