import React from 'react';
import FruitList from './FruitList';

export default function Fruit() {
  const increment = () => {
    setState({
      quantity: 1,
      message: '',
      disabled: false,
      prixFinal: parseInt(this.props.price),
    });
  };

  const decrement = () => {
    if (quantity <= 0) {
      this.setState({ message: 'Vous ne pouvez pas descendre sous 0' });
      return;
    }
    this.setState({
      count: this.state.count - 1,
      message: '',
      disabled: false,
    });
  };

  const reset = () => {
    this.setState({
      quantity: 1,
      prixFinal: this.props.price,
    });
  };

  const addToShop = () => {
    this.props.transfertShop(this.props);
  };

  const { fruits } = FruitList.state;
  const { quantity, prixFinal } = this.state;
  console.log(`rendered :  ${quantity}`);
  return fruits.map((item, i) => (
    <li key={i}>
      {/* {item.name} ,<button className="ml-2 btn btn-primary" onClick={increment}>+1</button>
      <input />
      <button onClick={decrement}>-1</button>
      {item.price}€ , */}
      <div className="card flex-fill">
        <div className="card-body card_container">
          <h4 className="card-title">{item.name}</h4>

          <img src={src} alt={item.name} style={{ width: '50%' }} />

          <p className="card-text">Prix à l'unité: {item.price}€</p>
          <p className="flex-row d-flex justify-content-center align-items-center btn-group-horizontal">
            <button onClick={increment} className="mr-2 btn btn-primary">
              +
            </button>
            {quantity}
            <button onClick={decrement} className="ml-2 btn btn-primary">
              -
            </button>
          </p>
          <p>Prix final : {prixFinal} euros</p>
          <button onClick={reset} className="btn btn-warning mb-3">
            Reset
          </button>
          {this.props.panier && (
            <button onClick={addToShop} className="btn btn-primary">
              Ajouter au panier
            </button>
          )}
        </div>
      </div>
    </li>
  ));
}
