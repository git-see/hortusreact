import React from "react";
import Popup from "reactjs-popup";
import "../css/popup.css";

export default function PopupGfg() {
  return (
    <div className="popup">
      <Popup trigger={<p className="rgpd" id="rgpd">RGPD</p>} position="top center">
        <div style={{width:500,background:"rgb(187, 216, 216)"}}>
          <h3 className="h3" style={{color:"#ff6600",textAlign:"center"}}>
            !! NOUS INFORMONS QUE CE SITE FACTICE EST UN PROJET D'APPRENTISSAGE"
          </h3>
          <h4>Règlement général sur la protection des données</h4>
          <p className="popupp"> &nbsp; - Tout contenu irrespectueux sera supprimé</p>
          <p className="popupp"> &nbsp; - Vous pouvez exprimer votre désaccord à tout moment en nous
            contactant:
          </p>
          <p>
            0 rue dici 00000 VILLE, &nbsp; hortus.mail@mail, &nbsp; tél:
            00.00.00.00.00
          </p>
        </div>
      </Popup>
    </div>
  );
}
