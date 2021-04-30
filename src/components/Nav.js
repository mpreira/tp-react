import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/G4_FruityBio_1.png';

export default function Nav() {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        style={{ fontSize: '25px' }}>
        <h1>
          <img src={Image} style={{ width: '40%' }} alt="logo G4" />
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="mr-auto navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Accueil
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fruits">
                Nos Fruits
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Votre panier
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

/*class Nav extends React.Component{

  render(){
    return(

      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{fontSize : '25px'}}>
        <h1><img src={Image} style={{ width: '40%'}} alt="logo G4" /></h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="mr-auto navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Accueil
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fruits">Nos Fruits</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">Votre panier</a>
              </li>
            </ul>
          </div>
        </nav>
      </>

    )
  }
}

export default Nav;  */
