import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
