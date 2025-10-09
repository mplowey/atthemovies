import { Link } from "@tanstack/react-router";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <Link to="/" className="navBarItem">
        Dinner and a Movie
      </Link>
      <div className="navBarItem">Login</div>
      <Link to="/Register" className="navBarItem">
        Register
      </Link>
    </div>
  );
};

export default NavBar;
