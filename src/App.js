import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import Shop from './Component/Shop';

const App = () => {

  return (
    <Router>
   <NavBar/>
    <Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/login">
        
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/shop">
       <Shop/>
      </Route>
    </Switch>
  </Router>
  );
};

export default App;