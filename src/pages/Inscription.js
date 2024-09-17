export default function Inscription() {
  return (
    <div className="inscription">
      <h2 className="inscription">Inscription</h2>
      <form
        action="/database/connexion_inscription/inscription.php"
        method="post"
        className="form"
      >
        <div className="inscriptionDiv">
          <div>
            <input
              type="text"
              name="pseudo"
              id="pseudo"
              placeholder="Pseudo"
              pattern="[A-Za-z]{2,10}"
              required
            />
            <p style={{fontSize: 11, textAlign: "left", marginTop: -10, marginLeft: 15 }}>
              De 2 à 10 caractères majuscules/minuscules
            </p>
          </div>

          <div>
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="Mail"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="mdp"
              id="mdp"
              placeholder="Mot de passe"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}"
              required
            />
            <p style={{fontSize: 11, textAlign: "left", marginTop: -10, marginLeft: 15 }}>
              Minimum 12 caractères: majuscules/minuscules, chiffres,spéciaux{" "}
            </p>
            <p
              style={{
                fontSize: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                alignItems: "center"
              }}
            >
              <input
                type="checkbox"
                id="memorisermdp"
                name="memorisermdp"
                style={{width:20}}
              />
              <label for="memorisermdp" style={{width:250, marginLeft:-30}}>
                Mémoriser mon mot de passe
              </label>
            </p>
          </div>

          <div>
            <button className="inscriptionButton" id="inscriptionButton" type="submit">
              M'inscrire
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
