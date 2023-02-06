import { FaHome } from "react-icons/fa";
import { BsFilePerson } from "react-icons/bs";
import { FiBriefcase } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";
 
const Nav = () => {
  return (
    <header>
      <div>
        <div>
          <div>
            <Link to="/" className="letterP" >P</Link>
          </div>
        </div>
        <ul className="navMenu">
          <li>
            <Link to="/"><FaHome className="navIcon"/></Link>
          </li>
          <li>
            <Link to="/about"><BsFilePerson className="navIcon"/></Link>
          </li>
          <li>
            <Link to="work"><FiBriefcase className="navIcon"/></Link>
          </li>
          <li>
            <Link to="contact"><BsEnvelope className="navIcon"/></Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;