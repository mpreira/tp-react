import React from 'react';

import Image from '../images/G4_FruityBio_1.png';

class Nav extends React.Component{

  render(){
    return(

      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <img src={Image} alt="logo G4" />
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Accueil
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Nos Fruits</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Votre panier</a>
              </li>
            </ul>
          </div>
        </nav>
      </>

    )
  }
}

export default Nav;
