import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li className="tooltip">
            <NavLink to="/list-culture">Culture</NavLink>
          </li>
          <li className="tooltip">
            <NavLink to="/list-nuisible">Nuisibles</NavLink>
          </li>
          <li className="tooltip">
            <NavLink to="/list-rescousse">Rescousse</NavLink>
          </li>
          <li className="tooltip">
            <NavLink to="/list-arrosage">Arrosage</NavLink>
          </li>
          <li className="tooltip">
            <NavLink to="/list-recettes">Recettes</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
