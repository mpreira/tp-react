import React from 'react';

import Items from './Items';
import Apple from '../images/3.png';
import Grapes from '../images/4.png';
import Kiwi from '../images/5.png';

class Fruits extends React.Component{

  transfertShop(){
    console.log('transferé');
  }

  render(){

    return(

      <div className="container">
        
        <div className="d-flex">
          <Items transfertShop={this.transfertShop.bind(this)} name="Pomme" src={Apple} price="3" style={{width:'30%'}} /> 
          <Items name="Raisins" src={Grapes} price="5" style={{width:'30%'}} /> 
          <Items name="Kiwi" src={Kiwi} price="1" style={{width:'30%'}} />
        </div>
        
      </div>

    )
  }
}

export default Fruits;
