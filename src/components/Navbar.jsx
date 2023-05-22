import { NavLink } from "react-router-dom";
import "./navbar.css"


export default function Navbar() {
  return (
    <nav className="container-nav">
      <NavLink id="link" className={({ isActive }) => {
        return isActive ? "active" : "";
      }} to="/"> Home </NavLink> |

      <NavLink id="link" className={({ isActive }) => (isActive ? "active" : null)} to="/favoritos"> Favoritos </NavLink>
    </nav>
  );
}


