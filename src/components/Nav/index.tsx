import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-link">
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/posts">Posty</NavLink>
          <NavLink to="/posts/addPost">Dodaj post</NavLink>
          <NavLink to="/login">Logowanie</NavLink>
        </li>
      </ul>
    </nav>
  );
};
