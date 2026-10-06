import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
function App() {
  return <BrowserRouter><Header /><main><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/admin" element={<Dashboard />} />
    <Route path="/admin/add" element={<ProductForm />} />
    <Route path="/admin/edit/:id" element={<ProductForm />} />
    <Route path="*" element={<div className="container section-space text-center"><h2>Page not found</h2><a className="pink-button" href="/">Back home</a></div>} />
  </Routes></main><Footer /></BrowserRouter>;
}
export default App;
