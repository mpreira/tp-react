import React from "react";
import { NavLink } from 'react-router-dom';

export default function Navigation(){

    return (
        <React.Fragment>
            <nav className="pt-4 pb-4 bg-secondary ">
                <NavLink to="/">
                    <button className="btn btn-dark ml-3">
                        Home
                    </button>
                </NavLink>
                <NavLink to="/Fruit">
                    <button
                        className="btn btn-dark ml-3">
                        Nos Fruits
                    </button>
                </NavLink>
                <NavLink to="/Cart">
                    <button
                        className="btn btn-dark ml-3">
                        Votre Panier
                    </button>
                </NavLink>

            </nav>
        </React.Fragment>)

}

