import { Link } from '@tanstack/react-router'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navBarContainer">
            <div className="navBarItem">Dinner and a Movie</div>
            <div className="navBarItem">Login</div>
            <Link to="/Register" className="navBarItem">Register</Link>
        </div>
    );
};

export default NavBar;