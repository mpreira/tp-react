import React from "react";
import {state} from './FruitList'

export default function Fruit() {

const increment = () => {
    setState({ quantity : this.quantity + 1, message: '', disabled: false }) ;
}

    const decrement = () => {
        if (quantity <= 0) {
            this.setState({message: "Vous ne pouvez pas descendre sous 0"})
            return;
        }
        this.setState({count: this.state.count - 1, message: '', disabled: false});



   }
    return (
        state.fruit.map((list, i) =>
            <li key={i}>
                {list.name} ,
                <button onClick={increment}>+1</button>
                <input {list.quantity}/>
                <button onClick={decrement}>-1</button>
                {list.price}€ ,
            </li>)
    )
}
