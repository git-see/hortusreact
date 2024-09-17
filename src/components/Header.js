import React from "react";
import Navigation from "./Navigation";
import logoHortus from "../images/logoHortus.png";
import connexion from "../images/connexion.png";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="header">
      <header>
        <div>
          <div className="headerUp">
            <div>
              <img
                className="logoHortus"
                src={logoHortus}
                alt="Logo, fleur et coccinelle"
              />
            </div>
            <div className="logoConnect">
              <nav>
                <ul>
                  <li>
                    <HashLink to="/">Accueil</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#qui">Qui sommes nous?</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#footer">Contact</HashLink>
                  </li>
                  <li>
                    <img
                      className="connectLogo"
                      src={connexion}
                      alt="Connexion"
                    />
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
              "Amoureux de la Nature, amis conscients de l'impact de nos actes
              sur notre quotidien,
              <br />
              partagez vos astuces afin d'entretenir nos jardins, en symbiose
              avec notre environnement"
              <br />
              Hortus
            </p>
          </div>
          <Navigation />
        </div>
      </header>
    </div>
  );
}
