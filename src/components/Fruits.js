import React from 'react';

import Items from './Items';

class Fruits extends React.Component{

  render(){

    const { name } = this.props;

    return(

      <>
        <Items name="Fruiti" /> <Items name="Fruita" />
      </>

    )
  }
}

export default Fruits;
