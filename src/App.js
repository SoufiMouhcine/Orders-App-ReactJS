import React from 'react';
import './App.css';
import { Orders } from './Components/Orders'
import  {Navigation} from './Components/Navigation'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h2 className="m-3 d-flex justify-content-center">
          Welcome to Orders Management page.
        </h2>
        <Navigation/>
        <Switch>
          <Route path='/' component={Orders} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
