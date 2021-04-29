import React from 'react';

class Items extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      pomme : '',
      raisins : '',
      kiwi : '',
      quantity : 0,
    }
  }

  render(){

    const { name } = this.props;
    const { quantity } = this.state;

    return(

      <p>{name} +- { quantity }</p>
    )
  }
}

export default Items;
