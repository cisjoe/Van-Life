import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink className="logo" to="/">
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
