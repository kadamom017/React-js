import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";

const signatures = [
  { title: "Colourful Delight Cake", label: "TRUFFLED CAKE MADE WITH LOVE", image: "https://legateaucakes.com/cdn/shop/files/16b1e88d-9763-4190-a2f2-2eedc41e684d.png?v=1772040145", text: "Celebrate your little princesses special day with our adorable baby girl birthday With Our cakes which are made with love and attention to detail." },
  { title: "Travel-Themed Farewell Cake", label: "FOR CHOCOHOLICS & TRAVELLERS", image: "https://gurgaonbakers.com/wp-content/uploads/2025/10/travel-themed-farewell-cake.jpg", text: " A generous sprinkle of bakery love in every bite for travellers showcasing iconic travel elements, symbolizing the exciting journeys ahead." },
  { title: "Anniversary Cake For Couples", label: "SMALL BITES, BIG JOY", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39EgNdMMFk77S_L-mPuZmG09NqoypyHDUBHSZCEnQiQ&s=10", text: "Colourful, joyful little pops for anniversary, engagements, receptions, celebrations and everyday smiles." },
  { title: "Bride To Be Cake", label: "FOR NEW BRIDE WITH WISHES", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZP_8PZ9LyMz2bzXXJEDFXH6HHk6SGugwZ9wBCyeiMswC-7FTprTWv84&s=10", text: "Bride to Be Cakes are made with best wishes and love, symbolizing and showcasing the exciting weddding with full of happy moments." },
];

function Home() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const [storyOpen, setStoryOpen] = useState(false);

  useEffect(() => {
    if (!items.length) dispatch(fetchProducts());
  }, [dispatch, items.length]);

  const featured = items.filter((product) => product.featured).slice(0, 4);

  return (
    <>
      <section className="hero-banner">
        <div className="hero-pink-shape" />
        <div className="hero-content">
          <span className="eyebrow">BAKED WITH LOVE, EVERY DAY</span>
          <h1>Enjoy life.<br /><em>Eat cake.</em></h1>
          <p>Little moments become sweetest memories with freshly baked cakes, pastries and treats made from the heart.</p>
          <Link to="/shop" className="pink-button">Shop our treats <span>↗</span></Link>
          <div className="hero-note">FRESH INGREDIENTS · SMALL BATCHES · BIG SMILES</div>
        </div>
        <div className="hero-photo">
          <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1500&q=90" alt="Colourful cakes and sweet bakery treats" />
        </div>
        <div className="hero-sticker">Made with <strong>♥</strong> love daily</div>
        <div className="hero-bottom-wave" />
      </section>

      <section className="container signature-section section-space">
        <SectionHeading eyebrow="A LITTLE SOMETHING SWEET" title="Can't Eat Just One" text="Meet the treats our customers come back for, time and time again." />
        <div className="signature-grid">
          {signatures.map((item, index) => (
            <article className={`signature-item signature-${["one", "two", "three", "four"][index]}`} key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div><span className="eyebrow">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p><Link to="/shop" className="pink-button">Discover <span>↗</span></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="chef-section">
        <div className="chef-top-wave" />
        <div className="container chef-inner">
          <div className="chef-image"><img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85" alt="Our pastry chef at work" loading="lazy" /></div>
          <div className="chef-copy"><span className="eyebrow">THE HANDS BEHIND THE MAGIC</span><h2>Meet Chef Kevin Abbott</h2><p className="script-line">A pinch of passion</p><p>Every cake begins with a good recipe and a little imagination. Our kitchen brings together honest ingredients, patient craft and the joy of sharing something delicious.</p><Link to="/shop" className="light-button">Taste the difference <span>↗</span></Link></div>
        </div>
        <div className="chef-pastries"><img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80" alt="Fresh pastries from our bakery" loading="lazy" /></div>
        <div className="chef-bottom-wave" />
      </section>

      <section className="container products-section section-space">
        <SectionHeading eyebrow="FRESH FROM THE OVEN" title="New Cakes, Very Delicious" text="A few favourites, baked fresh and ready to make your day sweeter." />
        {loading ? <p className="loading-message">Bringing out the treats…</p> : error ? <p className="error-message">Couldn't load products. Make sure JSON Server is running on port 3000.</p> : featured.length ? <div className="product-grid">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <p className="loading-message">No featured treats yet. Add products from the admin dashboard.</p>}
        <div className="center-action"><Link to="/shop" className="pink-button">Explore all treats <span>↗</span></Link></div>
      </section>

      <section className="history-section" id="story">
        <div className="history-overlay" />
        <div className="history-content"><span className="eyebrow">A STORY MADE FROM SCRATCH</span><h2>Our History<br />From our hearts to yours</h2><p>Good things take time: from mixing the first ingredients to sharing the very last slice.</p><button className="play-button" onClick={() => setStoryOpen(!storyOpen)} aria-label="Read our bakery story">{storyOpen ? "×" : "▶"}</button><p className={storyOpen ? "story-note show" : "story-note"}>Young Cake House started with a simple idea: make everyday celebrations feel special with fresh bakes, thoughtful details and a warm welcome for everyone.</p></div>
      </section>

      <section className="container journal-section section-space" id="journal">
        <SectionHeading eyebrow="NOTES FROM OUR KITCHEN" title="From Our Blog" text="Baking inspiration, celebration ideas and little behind-the-scenes moments." />
        <div className="journal-grid">
          <article className="journal-card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaU_5PpdH9Cgg9hdaCG1eHJGh8Zr51DnwsWCUCXh5aC2l9ErGlQlY-_Zo&s=10" alt="A beautifully decorated bakery cake" loading="lazy"/><div><span className="eyebrow">BAKING NOTES</span><h3>Choosing the perfect cake for every celebration</h3><p>From birthdays to just-because days, a little planning makes every slice memorable.</p><Link to="/shop" className="text-link">FIND YOUR CAKE ↗</Link></div></article>
          <article className="journal-card"><img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85" alt="Fresh pastries on a bakery tray" loading="lazy"/><div><span className="eyebrow">FROM THE OVEN</span><h3>Why fresh ingredients make all the difference</h3><p>A peek at the simple ingredients and careful little details behind our favourite bakes.</p><Link to="/shop" className="text-link">MEET THE TREATS ↗</Link></div></article>
        </div>
      </section>

      <section className="newsletter-band"><div><span className="eyebrow">A SWEET NOTE FROM US</span><h2>A little sugar in your inbox</h2><p>Hear about new bakes, seasonal treats and special offers.</p></div><form onSubmit={(event) => { event.preventDefault(); window.alert("Thanks for joining our sweet list!"); event.currentTarget.reset(); }}><input type="email" placeholder="Your email address" aria-label="Your email address" required /><button type="submit">SIGN ME UP ↗</button></form></section>
    </>
  );
}

export default Home;
