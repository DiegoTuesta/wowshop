
import "./App.css";

function App() {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="navbar-logo">
            WOW Shop
        </a>
        
        <div className="navbar-menu">
          <ul className="navbar-list">
            <li className="navbar-item"> <a href=""><i className="fa-solid fa-user"></i></a> </li>
            <li className="navbar-item" > <a href=""> <i className="fa-solid fa-shop"></i></a></li>
            <li className="navbar-item"> <a href=""><i className="fa-solid fa-cart-shopping"></i></a> </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default App;
