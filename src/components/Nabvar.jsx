import { Link } from "react-router-dom";
import "../styles/navbar.css";
function Nabvar() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav__logo">
          WoW Shop
        </Link>

        <div className="nav__menu">
          <button type="button" className="nav__btn btn--close">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className="nav__list">
            <li className="nav__items">
              <Link to={"/"} className="nav__link">
                <i className="fa-solid fa-house"></i> Home
              </Link>
              <Link to={"/"} className="nav__link">
                <i className="fa-solid fa-user"></i> login
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__buttons">
          <button type="button" className="nav__btn btn--dark">
            <i className="fa-solid fa-moon"></i>
          </button>
          <button type="button" className="nav__btn btn--cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="notify">0</span>
          </button>
          <button type="button" className="nav__btn btn--menu">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Nabvar;
