import { Link } from "react-router-dom";
import "../css/header.css";

function Header() {
  return (
    <div className="header-container">
      <Link to="/" className="header-link">
        Fiona Dowling
      </Link>
      <nav className="nav-links">
        <Link to="/work" className="link">
          Work
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/cv" className="link">
          CV
        </Link>
      </nav>
    </div>
  );
}

export default Header;
