import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, fetchProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
function ProductDetails() {
 const { id } = useParams(); const dispatch = useDispatch(); const { selected, items, loading, error } = useSelector((s) => s.products);
 useEffect(() => { dispatch(fetchProductById(id)); }, [dispatch,id]);
 const product = selected && String(selected.id) === String(id) ? selected : items.find((p) => String(p.id) === String(id));
 useEffect(() => { if (!items.length) dispatch(fetchProducts()); }, [dispatch,items.length]);
 if (loading && !product) return <div className="container section-space">Loading this sweet treat…</div>;
 if (!product) return <div className="container section-space empty-state"><h2>Treat not found</h2><p>{error || "This product may have sold out."}</p><Link className="pink-button" to="/shop">Back to shop</Link></div>;
 return <section className="container product-detail section-space"><div className="detail-image"><img src={product.image} alt={product.name}/><span className="product-badge">{product.badge || "Made fresh"}</span></div><div className="detail-copy"><div className="breadcrumb-line"><Link to="/">Home</Link><span>/</span><Link to="/shop">Shop</Link><span>/</span>{product.category}</div><span className="eyebrow">HANDCRAFTED WITH LOVE</span><h1>{product.name}</h1><div className="detail-rating">★★★★★ <span>{product.rating || "4.8"} · Fresh from our kitchen</span></div><div className="detail-price">₹{Number(product.price).toLocaleString("en-IN")} {product.oldPrice && <del>₹{Number(product.oldPrice).toLocaleString("en-IN")}</del>}</div><p>{product.description}</p><div className="detail-note"><span>♡</span><div><strong>A little love in every bite</strong><small>Prepared fresh in small batches. Handle with care and enjoy soon.</small></div></div><button className="pink-button detail-add" onClick={() => dispatch(addToCart(product))}>Add to cart <span>↗</span></button><p className="stock-note">{product.stock > 0 ? `${product.stock} available today` : "Made to order"} · Secure checkout</p><Link className="text-link" to="/shop">← Back to all treats</Link></div></section>;
}
export default ProductDetails;
