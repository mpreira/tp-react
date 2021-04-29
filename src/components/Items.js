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

  increment(){
    this.setState({
      quantity : this.state.quantity +1
    })
  }
  decrement(){
    this.setState({
      quantity : this.state.quantity -1
    })
  }

  render(){

    const { name, price, src } = this.props;
    const { quantity } = this.state;

    return(

      <>
        <div className="m-2 card flex-fill">

          <div className="card-body d-flex flex-column align-items-center">

            <h4 className="card-title">{ name }</h4>
            
            <img src={src} alt={name} style={{width:'50%'}} />

            <p className="card-text">Prix à l'unité: { price }€</p>
            
            <p className="flex-row d-flex justify-content-center align-items-center btn-group-horizontal">
              
              <button onClick={this.increment.bind(this)} className="mr-2 btn btn-primary">+</button> 
              
              { quantity } 
              
              <button onClick={this.decrement.bind(this)} className="ml-2 btn btn-primary">-</button>              
            </p>

            <button type="button" class="btn btn-danger">Reset</button>
            
          </div>
        </div>
      </>
    )
  }
}

export default Items;