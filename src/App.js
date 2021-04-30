import 'bootswatch/dist/minty/bootstrap.min.css'; 

import './App.css';

import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Fruits from './components/Fruits';
import Cart from './components/Cart';

import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

class App extends React.Component{

  render(){
    return(

      <div>

        <Router>

          <Nav />

          <Switch>

            <Route exact path="/" component={Home}/>
            <Route exact path="/fruits" component={Fruits}/>
            <Route exact path="/cart" component={Cart}/>
            <Route
                path="/"
                component={() =>
                    <p>Oups cette page n'existe pas</p>}
            />

          </Switch>

        </Router>

      </div>
      
    )
  }
}

export default App;
