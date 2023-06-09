import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { useState } from "react";

// import { useState } from "react";
function Nabvar() {


  const [Usuario, setUsuario] = useState(false)

  const token = localStorage.getItem("token");
  const cart = useSelector(state => state.cart)
  const showCart = () => {
    document.querySelector(".cart-shop").classList.toggle("show--cart");
  };
  const showMenu = () => {
    document.querySelector(".nav__menu").classList.toggle("show--menu");
  };
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav__logo">
            WoW Shop
          </Link>

          <div className="nav__menu">
            <button
              onClick={showMenu}
              type="button"
              className="nav__btn btn--close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <ul className="nav__list">
              <li className="nav__items">
                <Link to={"/"} className="nav__link">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
                {!token && (
                  <Link to="/login" className="nav__link">
                    <i className="fa-solid fa-user"></i> login
                  </Link>
                )}

                {token && (
                  <Link to="/purchases" className="nav__link">
                    <i className="fa-sharp fa-solid fa-shop-lock"></i> Purchases
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div className="nav__buttons">
            <button type="button" className="nav__btn btn--dark">
              <i className="fa-solid fa-moon"></i>
            </button>
            {token && (
              <button
                onClick={showCart}
                type="button"
                className="nav__btn btn--cart"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className={cart.length > 0 ? "notify show--notify" : "notify" }> {cart.reduce((acc, cv) => acc + cv.quantity, 0 )} </span>
              </button>
            )}
            {token && (
              <button
              onClick={() => setUsuario(!Usuario)} type="button" className="nav__btn btn--user">
                <i className="fa-solid fa-user"></i>
                {
                  Usuario && <ul>
                  <Link to="/profile">Profile</Link>
                  <Link to="/login">Cerrar</Link>
                </ul>
                }
                
              </button>
            )}
            <button
              onClick={showMenu}
              type="button"
              className="nav__btn btn--menu"
            >
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
        </nav>
      </header>

      {token && <Cart />}
    </>
  );
}

export default Nabvar;
