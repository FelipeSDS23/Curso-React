import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/" className="link">Page 1</NavLink>
        <NavLink to="/page2" className="link">Page 2</NavLink>
        <NavLink to="/page3" className="link">Page 3</NavLink>
    </nav>
  ) 
}

export default Navbar;