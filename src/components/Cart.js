import React from 'react';

import Items from './Items';
import Apple from '../images/4.png';
import Grapes from '../images/2.png';
import Kiwi from '../images/3.png';

class Cart extends React.Component{

  render(){

    return(

      <div className="container">
        
        <div className="d-flex">
          <Items name="Pomme" src={Apple} price="0" style={{width:'30%'}} /> 
          <Items name="Raisins" src={Grapes} price="0" style={{width:'30%'}} /> 
          <Items name="Kiwi" src={Kiwi} price="0" style={{width:'30%'}} />
        </div>
        
      </div>

    )
  }
}

export default Cart;
