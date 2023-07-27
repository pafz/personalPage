import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
    <nav className='headerText'> 
    <Link to="/">| HOME </Link>
    <Link to="/aboutme">| ABOUT ME |</Link>
    <Link to="/contact"> CONTACT |</Link>
    </nav>
    </div>
  )
}

export default Header;