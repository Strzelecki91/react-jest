import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-link">
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/posts">Posty</NavLink>
        </li>
      </ul>
    </nav>
  );
};
