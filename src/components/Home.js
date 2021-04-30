import React from 'react';

import Image from '../images/G4_FruityBio_1.png';

class Home extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      message_home : 'Bienvenue sur notre boutique',
    }
  }

  render(){

    const { message_home } = this.state;

    return(

      <div className="home">
        <h2 className="mt-4 mb-2">{message_home}</h2>
        <img src={Image} style={{ width: '35%'}} alt="logo G4" />
      </div>

    )
  }
}

export default Home;
