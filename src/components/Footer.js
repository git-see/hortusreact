export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <hr />
        <div className="footerDiv">
          <div>
            <ul>
              <li>
                {" "}
                <u>Siège</u>:<br />0 rue dici
                <br />
                00000 VILLE{" "}
              </li>
              <li>hortus.mail@mail</li>
              <li>tél: 00.00.00.00.00</li>
            </ul>
          </div>
          <div>
            <ul>
              <div className="overlay"></div>
              <div className="popup">
                <div className="popup-inner">
                  <input
                    type="button"
                    name="Close"
                    className="btn-close"
                    onclick="popupClose();"
                    value="&times;"
                  />

                  <div className="textRgpd"></div>
                  <br />
                  <div className="divRgpd">
                    <h2>Règlement général sur la protection des données</h2>
                    <p> Tout contenu irrespectueux sera supprimé</p>
                    <p>
                      {" "}
                      Vous pouvez exprimer votre désaccord à tout moment en nous
                      contactant:
                    </p>
                    <p>
                      0 rue dici 00000 VILLE &nbsp; hortus.mail@mail &nbsp; tél:
                      00.00.00.00.00
                    </p>
                  </div>
                </div>
              </div>
              <li>
                <a
                  href="#"
                  name="Open"
                  onclick="popupOpen();"
                >
                  RGPD
                </a>
              </li>
              <li>
                <a href="https://github.com/git-see/welcome">GitHub</a>
              </li>
              <li>&#9426; Hortus</li>
            </ul>
          </div>
        </div>
      </footer>
      <script src="/src/js/footer.js"></script>
    </div>
  );
}
