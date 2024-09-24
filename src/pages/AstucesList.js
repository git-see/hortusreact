import React from "react";
import { NavLink } from "react-router-dom";
import { createRoot } from 'react-dom/client';


class AstucesList extends React.Component {
  render() {
  const voirList = JSON.parse(this.props.astucesList);
  console.log(voirList);

  return (
    <div className="astuce-list">
      <div id="butBtn">
        <button className="butBtn">
          <NavLink to="/connexion">Ajouter une astuce</NavLink>
        </button>
      </div>

      <h2 className="domaine">Liste des astuces du "nom du domaine"</h2>

      {
        voirList.map((list) => {
        return (
          <div id="fiche" key="{list.id}">
            <div class="fiche">
              <h3>{list.sujet}</h3>
            </div>
            <div class="fiche">
              <p>{list.astuce}</p>
            </div>
            <div class="fiche">
              <p>Par {list.pseudo}, le </p>
              {list.created_at}
            </div>
          </div>
        )
      })
      }
    </div>
  );
}
}
const domContainer = document.querySelector("#component_list");

const liste = createRoot(domContainer.innerHTML);

liste.render(<AstucesList astucesList={liste} />, domContainer);



/*
import { NavLink } from "react-router-dom";

export default function AstuceList() {

  const voirList = JSON.parse(this.props.astucesList);
  console.log(voirList);

  return (
    <div className="astuce-list">
      <div>
        <div className="butBtn">
          <button className="ajouterAstuce">
            <NavLink to="/connexion">Ajouter une astuce</NavLink>
          </button>
        </div>

        <h2 className="domaine">Liste des astuces du "nom du domaine"</h2>

        <div className="fiched">
          <div className="fiche">
            <h3>Sujet</h3>
          </div>
          <div className="fiche">
            <p>Astuce</p>
          </div>
          <div className="fiche">
            <p>Par "pseudo", le "date""</p>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
