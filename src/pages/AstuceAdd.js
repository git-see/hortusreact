export default function AstuceAdd() {
  return (
    <div className="astuce-add">
      <h2 className="domaine">Astuce</h2>
      <form action="/database/astuces/add.php" method="post" className="form">
        <div className="formDiv">
          <div>
            <label htmlFor="domaines">Domaine</label>
            <select type="text" id="domaines" name="domaines" required>
              <option value="Culture" selected="selected">
                Culture
              </option>
              <option value="Nuisibles">Nuisibles</option>
              <option value="Rescousse">Rescousse</option>
              <option value="Arrosage">Arrosage</option>
              <option value="Recettes">Recettes</option>
            </select>
          </div>
          <div>
            <label htmlFor="sujet">Sujet: </label>
            <input
              type="text"
              name="sujet"
              id="sujet"
              placeholder="Sujet"
              value=""
              required
            />
          </div>

          <div>
            <label htmlFor="astuce">Astuce: </label>
            <textarea
              name="astuce"
              id="astuce"
              placeholder="Écrivez ici votre astuce..."
              value=""
              required
            ></textarea>
          </div>
          <p>
            <label htmlFor="pseudo"></label>
            <input
              type="hidden"
              name="pseudo"
              id="pseudo"
              value="pseudo"
              required
            />
          </p>
          <div>
            <button
              className="domaineButton"
              type="submit"
              name="domaineButton"
              id="domaineButton"
            >
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
