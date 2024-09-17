import Popup from "./Popup";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <footer>
        <hr />
        <div className="footerDiv">
          <div>
            <ul>
              <li>
                <u>Siège</u>:<br />0 rue dici
                <br />
                00000 VILLE
              </li>
              <li>hortus.mail@mail</li>
              <li>tél: 00.00.00.00.00</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Popup />
              </li>
              <li>
                <a href="https://github.com/git-see/welcome">GitHub</a>
              </li>
              <li>&#9426; Hortus</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
