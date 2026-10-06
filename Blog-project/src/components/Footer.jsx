import { Link } from "react-router-dom";
function Footer() { return <footer className="site-footer">
  <div className="footer-wave" />
  <div className="container footer-grid">
    <div className="footer-brand"><Link className="brand" to="/"><span>Young</span><small>CAKE HOUSE</small></Link><p>A little sweetness makes every day special. Handcrafted with love, baked fresh for you.</p></div>
    <div><h4>Explore</h4><Link to="/">Home</Link><Link to="/shop">Shop all cakes</Link><a href="/#story">Our story</a></div>
    <div><h4>Customer care</h4><a href="mailto:hello@youngcake.test">Contact us</a><Link to="/cart">Your cart</Link><Link to="/admin">Store admin</Link></div>
    <div className="newsletter"><h4>Sweet notes, straight to you</h4><p>Join our list for seasonal treats and bakery news.</p><form onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining our sweet list!"); }}><input type="email" required placeholder="Your email address" aria-label="Email address"/><button type="submit">Join</button></form></div>
  </div><div className="footer-bottom">© {new Date().getFullYear()} Young Cake House <span>Made with a little extra love ♡</span></div>
</footer>; }
export default Footer;
