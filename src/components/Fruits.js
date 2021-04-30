import React from 'react';

import Items from './Items';


export default function Fruits() {

    return (
    <div>
        <Items/>
    </div>

/*
        <div className="container mt-4">

            <div className="d-flex">
                <div className="d-flex flex-column align-items-center">
                    <Items name="Pomme" src={Apple} price="0" style={{width: '30%'}}/>
                    <button type="button" className="btn btn-secondary mt-2">Ajouter au panier</button>
                </div>

                <div className="d-flex flex-column align-items-center">
                    <Items name="Raisins" src={Grapes} price="0" style={{width: '30%'}}/>
                    <button type="button" className="btn btn-secondary mt-2">Ajouter au panier</button>
                </div>

                <div className="d-flex flex-column align-items-center">
                    <Items name="Kiwi" src={Kiwi} price="0" style={{width: '30%'}}/>
                    <button type="button" className="btn btn-secondary mt-2">Ajouter au panier</button>
                </div>
            </div>
        </div>  */
    )
}
