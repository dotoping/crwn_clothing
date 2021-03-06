import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

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
          <Route exact path='/shop' component={ShopPage} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
