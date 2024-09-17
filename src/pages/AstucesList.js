export default function AstuceList() {
  return (
    <div className="astuce-list">
      <div>
        <div className="butBtn">
          <button className="ajouterAstuce">
            <a href="/formulaires/formulaire.php">Ajouter une astuce</a>
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
