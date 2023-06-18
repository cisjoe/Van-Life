import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
