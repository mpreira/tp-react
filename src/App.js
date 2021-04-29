
import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Fruit from './components/Fruit';
import Cart from './components/Cart';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';


function App()  {

    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/fruit" component={Fruit}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route
                        path="/"
                        component={() =>
                            <p>Oups cette page n'existe pas</p>}
                    />

                </Switch>
            </Router>
        </div>
    );
}

export default App;
