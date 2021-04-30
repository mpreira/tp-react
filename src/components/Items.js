import React from 'react';

class Items extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      apple : '',
      grapes : '',
      kiwi : '',
      quantity : 0,
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

      <>
        <div className="m-2 card flex-fill">

          <div className="card-body d-flex flex-column align-items-center">

            <h4 className="card-title">{ name }</h4>
            
            <img src={src} alt={name} style={{width:'50%'}} />

            <p className="card-text">Prix à l'unité: { price }€</p>
            
            <p className="flex-row d-flex justify-content-center align-items-center btn-group-horizontal">
              
              <button onClick={this.decrement.bind(this)} className="mr-2 btn btn-primary">-</button> 
              
              { quantity } 
              
              <button onClick={this.increment.bind(this)} className="ml-2 btn btn-primary">+</button>             
            </p>

            { this.state.quantity > 0 && (<p>Prix final : {prixFinal} €</p> ) }

            <button type="button" onClick={this.reset} class="btn btn-danger">Reset</button>
            {this.props.panier &&
            (
              <button type="button" onClick={this.addToShop} class="btn btn-secondary mt-2">Ajouter au panier</button>
            )
            }
          </div>
        </div>
      </>
    )
  }
}

export default Items;