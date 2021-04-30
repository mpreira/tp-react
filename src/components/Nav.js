import React from 'react';

import Image from '../images/G4_FruityBio_1.png';

class Nav extends React.Component{

  render(){
    return(

      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <img src={Image} alt="logo G4" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Accueil
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nos Fruits</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Votre panier</a>
              </li>
            </ul>
          </div>
        </nav>
      </>

    )
  }
}

export default Nav;
