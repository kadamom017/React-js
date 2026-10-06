import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const [open, setOpen] = useState(false);
  const count = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return <header className="site-header">
    <div className="topline"><span>Freshly baked happiness, every day</span><span>Free delivery on orders over ₹999</span></div>
    <div className="header-main container">
      <Link className="brand" to="/" aria-label="Young Cake House home"><span>Young</span><small>CAKE HOUSE</small></Link>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button>
      <nav className={open ? "main-nav is-open" : "main-nav"}>
        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/shop" onClick={() => setOpen(false)}>Shop cakes</NavLink>
        <a href="/#story" onClick={() => setOpen(false)}>Our story</a>
        <a href="/#journal" onClick={() => setOpen(false)}>Journal</a>
        <NavLink to="/admin" onClick={() => setOpen(false)}>Admin</NavLink>
      </nav>
      <Link to="/cart" className="cart-link" aria-label={`Shopping cart with ${count} items`}><span className="cart-icon">♡</span><span>Cart</span><b>{count}</b></Link>
    </div>
  </header>;
}
export default Header;
