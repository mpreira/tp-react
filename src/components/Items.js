import React from 'react';
import STATE from "./FruitList";
import Apple from '../images/4.png';
import Grapes from '../images/2.png';
import Kiwi from '../images/3.png';


export default class Items extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fruit : [
                {
                    name: "pomme",
                    img: Apple,
                    quantity : 0,
                    price : 2
                },
                {
                    name: "raisins",
                    img: Grapes,
                    quantity : 0,
                    price : 2
                },
                {
                    name: "kiwi",
                    img: Kiwi,
                    quantity : 0,
                    price : 2
                },
            ]
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
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

    render() {

        const {fruit} = this.state;



        return (
            fruit.map((f, i) =>
                <div className="card-body d-flex flex-column align-items-center" key={i}>
                    <div >
                        <h4 className="card-title">{f.name}</h4>
                        <img src={f.img} alt={f.name} style={{width: '50%'}}/>
                        <p className="card-text">Prix à l'unité: {f.price}€</p>
                        <button onClick={this.decrement} className="ml-2 btn btn-primary">-</button>
                        {f.quantity}
                        <button onClick={this.increment} className="mr-2 btn btn-primary">+</button>
                        <button type="button" className="btn btn-danger">Reset</button>
                    </div>
                </div>



            )



        )
    }
}
