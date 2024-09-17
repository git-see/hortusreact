import React from "react";
import logoHortus from "../images/logoHortus.png";
import connexion from "../images/connexion.png";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export default function Header() {
    return (
<div className="header">
<header>
  <div>
    <div className="headerUp">
      <div>
        <img className="logoHortus" src={logoHortus} alt="Logo, fleur et coccinelle" />
      </div>
      <div className="logoConnect">
        <nav>
          <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><HashLink to="/#qui">Qui sommes nous?</HashLink></li>
            <li><HashLink to="/#footer">Contact</HashLink></li>
            <li>
              <img className="connectLogo" src={connexion} alt="Connexion" />

              <h4>
                Bienvenue
                <br />
              </h4>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="headerCenter">
      <p>
        "Amoureux de la Nature, amis conscients de l'impact de nos actes sur notre quotidien,
        <br />
        partagez vos astuces afin d'entretenir nos jardins, en symbiose avec
        notre environnement"
        <br />
        Hortus
      </p>
    </div>
    <div className="headerDown">
      <nav>
        <ul>
          <li className="tooltip"><NavLink to="/list">Culture</NavLink></li>
          <li className="tooltip"><NavLink to="/list">Nuisibles</NavLink></li>
          <li className="tooltip"><NavLink to="/list">Rescousse</NavLink></li>
          <li className="tooltip"><NavLink to="/list">Arrosage</NavLink></li>
          <li className="tooltip"><NavLink to="/list">Recettes</NavLink></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
</div>
  );
}

