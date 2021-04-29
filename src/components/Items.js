import React from 'react';

import HandleCounter from '../container/HandleCounter.js';

class Items extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      apple : '',
      grapes : '',
      kiwi : '',
      quantity : 1,
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render(){

    const { name, price, src } = this.props;
    const { quantity } = this.state;

    return(

      <>
        <div className="card flex-fill">
          <div className="card-body">
            <h4 className="card-title">{ name }</h4>
            <img src={src} alt={name} style={{width:'33%'}} />
            <p className="card-text">Prix à l'unité: { price }€</p>
            
            <p className="flex-row d-flex justify-content-center align-items-center btn-group-horizontal"onClick={increment} type="plus" >
              
              <button className="mr-2 btn btn-primary">+</button>
              { quantity }
              <button className="ml-2 btn btn-primary" onClick={decrement} type="moins">-</button>
              
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default Items;
