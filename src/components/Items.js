import React from 'react';

class Items extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      apple : '',
      grapes : '',
      kiwi : '',
      quantity : 0,
    }
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
            <p className="flex-row d-flex justify-content-center align-items-center"><i class="fas fa-plus"></i> <i class="fas fa-minus"></i> { quantity }</p>
          </div>
        </div>
      </>
    )
  }
}

export default Items;
