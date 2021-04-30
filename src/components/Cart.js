import React from 'react';

import Items from './Items';
import Apple from '../images/4.png';
import Grapes from '../images/2.png';
import Kiwi from '../images/3.png';

class Cart extends React.Component{
  constructor(){
    super()
    this.state={
      active: false,
    }
  }

  componentDidMount(){
    this.setState({
      active: true
    })
    console.log('on est sur le panier');
  }

  componentWillUnmount(){
    this.setState({
      active: !this.state.active
    })

    console.log("on sort du panier");
  }


  render(){

    return(

      <div className="container">
        
        <div className="d-flex flex-column">
          <div className="mt-4 mb-4 d-flex">
            <Items panier={false} name="Pomme" src={Apple} price="3" style={{width:'30%'}} /> 
            <Items panier={false} name="Raisins" src={Grapes} price="5" style={{width:'30%'}} /> 
            <Items panier={false} name="Kiwi" src={Kiwi} price="2" style={{width:'30%'}} />
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <button type="button" className="btn btn-secondary" style={{width:'30%'}}>Payer</button>
          </div>
          
        </div>
        
      </div>

    )
  }
}

export default Cart;
