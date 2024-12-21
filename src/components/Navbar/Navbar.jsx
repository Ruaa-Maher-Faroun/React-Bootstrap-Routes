import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  
    return (
        <nav className="navbar navbar-expand-lg sticky-top p-4 px-0">
        <div className="container p-0">
          <Link className="navbar-brand" to="/">Start Bootstrap</Link>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link py-3 px-0 px-lg-3 rounded" aria-current="page" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/about">About</Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/contact">Contact</Link>
              </li>
             
           
            </ul>
        
          </div>
        </div>
      </nav>
    )
  };

  export default  Navbar;

