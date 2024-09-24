<?php
// Session inexistante
if (!($_SESSION["membre"])) {
    header("Location: index.php");
}

require_once('/base/connexion.php');

$sql = 'SELECT * FROM astuces ORDER BY created_at DESC ;';
$query = $db->prepare($sql);
$query->execute();
$result = $query->fetchAll(PDO::FETCH_ASSOC);
$astucesList = json_encode($result);

require_once('/base/deconnexion.php');
?>







<!--
import { NavLink } from "react-router-dom";

export default function AstuceList() {

  const voirList = JSON.parse(this.props.propsHabits);
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
-->




