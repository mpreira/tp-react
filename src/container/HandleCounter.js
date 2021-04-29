import React from 'react';

import App from '../App';

class HandleCounter extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      quantity :0,
      message : 'Sélectionner une quantité',
      disabled : false,
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // modifier la valeur de quantity au click + condition + pas de nombre négatif
  
    increment(){
      const { quantity } = this.state;

      this.setState({ quantity : quantity + 1, message: '', disabled: false }) ;
    }

    decrement() {
      const { quantity } = this.state;
      
      if (quantity <= 0) {
        this.setState({message: "Vous ne pouvez pas sélectionner une quantité négative"})
        return;
    }
      this.setState({quantity: quantity - 1, message: '', disabled: false});
    }


  render(){
    return(
      <App />
    )
  }
}

export default HandleCounter;
