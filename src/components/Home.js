import React from 'react';

import Image from '../images/G4_FruityBio_1.png';

import Nav from './Nav.js';
import Fruits from './Fruits';

class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      main_title : 'G4 bio',
      message_home : 'Bienvenue sur notre boutique',
    }
  }

  render(){

    const { main_title, message_home } = this.state;

    return(

      <div>
        <img src={Image} alt="logo G4" />
        <h1>{main_title}</h1>
        <p>{message_home}</p>
        <Nav />
        <Fruits />
        
      </div>

    )
  }
}

export default Home;
