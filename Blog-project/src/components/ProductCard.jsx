import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
function ProductCard({ product }) {
  const dispatch = useDispatch();
  return <article className="product-card">
    <Link to={`/product/${product.id}`} className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy"/>{product.badge && <span className="product-badge">{product.badge}</span>}<span className="quick-view">View treat ↗</span></Link>
    <div className="product-info"><div className="product-meta"><span>{product.category}</span><span className="rating">★ {product.rating || "4.8"}</span></div><h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3><div className="product-bottom"><div className="price">₹{Number(product.price).toLocaleString("en-IN")} {product.oldPrice && <del>₹{Number(product.oldPrice).toLocaleString("en-IN")}</del>}</div><button className="add-icon" onClick={() => dispatch(addToCart(product))} aria-label={`Add ${product.name} to cart`}>+</button></div></div>
  </article>;
}
export default ProductCard;
