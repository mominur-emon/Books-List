import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
        to="/"
        className="nav-link"
      >
        Books
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
        to="/add-book"
        className="nav-link"
      >
        Add Book
      </NavLink>
    </nav>
  );
};

export default Navbar;
