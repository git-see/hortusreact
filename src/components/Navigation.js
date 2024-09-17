import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li className="tooltip">
            <NavLink to="/list">Culture</NavLink>
          </li>
          <li className="tooltip">
            <NavLink to="/list">Nuisibles</NavLink>
          </li>
          <li className="tooltip">
            <NavLink to="/list">Rescousse</NavLink>
          </li>
          <li className="tooltip">
            <NavLink to="/list">Arrosage</NavLink>
          </li>
          <li className="tooltip">
            <NavLink to="/list">Recettes</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
