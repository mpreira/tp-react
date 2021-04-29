import 'bootswatch/dist/minty/bootstrap.min.css'; 

import './App.css';

import React from 'react';
import Home from './components/Home.js';

class App extends React.Component{

  render(){
    return(
      <div>
        <Home />
      </div>
      
    )
  }
}

export default App;
