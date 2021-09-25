import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/ShopePage' component={ShopPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
 