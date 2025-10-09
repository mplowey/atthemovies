import { Link } from "@tanstack/react-router";
import "./NavBar.css";
import { useAuth } from "./useAuth";

const NavBar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  const logoutClick = () => {
    logout();
  };
  return (
    <div className="navBarContainer">
      <Link to="/" className="navBarItem">
        Dinner and a Movie
      </Link>
      {isAuthenticated ? (
        <div className="navBarItem">Welcome {user.username}</div>
      ) : (
        <Link to="/Login" className="navBarItem">
          Login
        </Link>
      )}
      {isAuthenticated ? (
        <button className="navBarItem logoutBtn" onClick={logoutClick}>
          Logout
        </button>
      ) : (
        <Link to="/Register" className="navBarItem">
          Register
        </Link>
      )}
    </div>
  );
};

export default NavBar;
