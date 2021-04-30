import React from 'react';

class Items extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      apple : '',
      grapes : '',
      kiwi : '',
      quantity : 1,
      prixFinal : parseInt(this.props.price) ,
    }

    this.addToShop = this.addToShop.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  increment(){
    const total = this.state.quantity +1
    this.setState({
      quantity : total,
      prixFinal: total * this.props.price
    })
  }
  decrement(){
    const total = this.state.quantity -1

    if (this.state.quantity >0) {
      this.setState({
        quantity : total,
        prixFinal: total * this.props.price
      })
    }
  }

  addToShop(){
    this.props.transfertShop()
  }

  reset(){
    this.setState({
      quantity: 1,
      prixFinal: this.props.price
    })
  }

  render(){
    const { name, price, src } = this.props;
    const { quantity, prixFinal } = this.state;
    console.log(`rendered :  ${quantity}`);

    return(


        <div className="card flex-fill">
          <div className="card-body card_container">
            <h4 className="card-title">{ name }</h4>
            
            <img src={src} alt={name} style={{width:'50%'}} />

            <p className="card-text">Prix à l'unité: { price }€</p>
            <p className="flex-row d-flex justify-content-center align-items-center btn-group-horizontal">
              <button onClick={this.increment} className="mr-2 btn btn-primary">+</button> 
                {quantity } 
              <button onClick={this.decrement} className="ml-2 btn btn-primary">-</button>
            </p>
            <p>Prix final : {prixFinal} euros</p>
            <button onClick={this.reset} className="btn btn-warning mb-3">Reset</button>
           {this.props.panier &&(
              <button onClick={this.addToShop} className="btn btn-primary">Ajouter au panier</button>
           )
           }
            
          </div>
        </div>

    )
  }
}

export default Items;