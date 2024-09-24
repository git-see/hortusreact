import { NavLink } from "react-router-dom";

export default function Connexion() {
  return (
    <div className="connexion">
      <h2 className="connexion">Connexion</h2>

      <form
        action="/src/database/connexion_inscription/connexion.php"
        method="post"
        className="form"
      >
        <div className="connexionDiv">
          <div>
            <input
              className="pseudo"
              type="text"
              name="pseudo"
              id="pseudo"
              placeholder="Pseudo"
              required
            />
          </div>

          <div>
            <input
              className="mdp"
              type="password"
              name="mdp"
              id="mdp"
              placeholder="Mot de passe"
              required
            />
          </div>

          <div>
            <button className="connexionButton" type="submit">
              Me connecter
            </button>
          </div>
          <p>
            <NavLink to="/inscription">M'inscrire</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
