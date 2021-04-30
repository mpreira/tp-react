import React from 'react';

import Items from './Items';
import Apple from '../images/4.png';
import Grapes from '../images/2.png';
import Kiwi from '../images/3.png';

class Fruits extends React.Component {
  transfertShop(fruit) {
    console.log(fruit);
    /* this.state.panier.push(fruit);
    this.setState({ panier: this.state.panier });
    console.log(this.state); */
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="d-flex">
          <Items
            panier={true}
            transfertShop={this.transfertShop.bind(this)}
            name="Pomme"
            src={Apple}
            price="3"
            style={{ width: '30%' }}
          />
          <Items
            panier={true}
            transfertShop={this.transfertShop.bind(this)}
            name="Raisins"
            src={Grapes}
            price="5"
            style={{ width: '30%' }}
          />
          <Items
            panier={true}
            transfertShop={this.transfertShop.bind(this)}
            name="Kiwi"
            src={Kiwi}
            price="1"
            style={{ width: '30%' }}
          />
        </div>
      </div>
    );
  }
}

export default Fruits;
