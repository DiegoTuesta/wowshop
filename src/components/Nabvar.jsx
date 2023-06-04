import { Link } from "react-router-dom";
import '../styles/navbar.css'
function Nabvar() {
  return (
    <header className="header bg-[#ee5601] ">
      <nav >
        <Link to="/" className="nav_a">WOW Shop</Link>
      </nav>

      <ul className="lista ">
        <Link to={"/"} >
        <i className="fa-solid fa-user text-white"></i>
        </Link>
        <Link className="">
        <i className="fa-solid fa-moon text-[white]"></i>
        </Link>
       
      </ul>
    </header>
  );
}

export default Nabvar;
