import "./Navbar.css";
import logo from "../assets/header2-logo.svg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        <a href="#home" className="brand-logo">
          <img src={logo} alt="Scooby" />
        </a>

        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pages">Pages</a>
          <a href="#shop">Shop</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="nav-action-btn" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <button className="nav-action-btn" aria-label="Wishlist">
            <i className="fa-regular fa-heart"></i>
          </button>

          <button className="nav-action-btn cart-btn" aria-label="Cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>

          
          <button className="nav-action-btn cart-btn" aria-label="Cart">
            <i className="fa-solid fa-user"></i>
          </button>

          <a href="#contact" className="nav-book-btn">
            Book Now
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <button className="mobile-menu-btn" aria-label="Open menu">
          <i className="fa-solid fa-bars"></i>
        </button>

      </div>
    </header>
  );
}

export default Navbar;