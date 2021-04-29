import React from 'react';

import Items from './Items';
import Apple from '../images/4.png';
import Grapes from '../images/2.png';
import Kiwi from '../images/3.png';

class Fruits extends React.Component{

  render(){

    return(

      <div className="container mt-4">
        
        <div className="d-flex">
          <div className="d-flex flex-column align-items-center">
            <Items name="Pomme" src={Apple} price="0" style={{width:'30%'}} /> 
            <button type="button" class="btn btn-secondary mt-2">Ajouter au panier</button> 
          </div>
          
          <div className="d-flex flex-column align-items-center">
            <Items name="Raisins" src={Grapes} price="0" style={{width:'30%'}} />
            <button type="button" class="btn btn-secondary mt-2">Ajouter au panier</button>
          </div>
          
          <div className="d-flex flex-column align-items-center">
            <Items name="Kiwi" src={Kiwi} price="0" style={{width:'30%'}} />
            <button type="button" class="btn btn-secondary mt-2">Ajouter au panier</button>
          </div>
          

          
        </div>
        
      </div>

    )
  }
}

export default Fruits;
