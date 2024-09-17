import React from "react";
import logoHortus from "../images/logoHortus.png";
import connexion from "../images/connexion.png";

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
            <li>Accueil</li>
            <li>Qui sommes nous?</li>
            <li>Contact</li>
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
          <li className="tooltip">Culture</li>
          <li className="tooltip">Nuisibles</li>
          <li className="tooltip">Rescousse</li>
          <li className="tooltip">Arrosage</li>
          <li className="tooltip">Recettes</li>
        </ul>
      </nav>
    </div>
  </div>
</header>
</div>
  );
}

