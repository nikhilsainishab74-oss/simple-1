import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Elegant Ivory Kurti",
    category: "ETHNIC WEAR",
    price: 1299,
    image:"",
      
  },
  {
    id: 2,
    name: "Classic Summer Outfit",
    category: "NEW ARRIVALS",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
  },
  {
    id: 3,
    name: "Everyday Elegance",
    category: "SIGNATURE STYLE",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700",
  },
];

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">TIMELESS STYLE · MODERN INDIA</p>

            <h1>
              Elegance in
              <br />
              Every <span>Thread.</span>
            </h1>

            <p className="hero-description">
              Discover thoughtfully curated styles that
              celebrate your individuality.
            </p>

            <a className="primary-button" href="#collection">
              Explore Collection ↗
            </a>
          </div>

          <div className="hero-note">
            <span>01 / 03</span>
            <span>Made for your moments</span>
          </div>
        </section>

        <section className="collection" id="collection">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CURATED FOR YOU</p>
              <h2>Our Collection</h2>
            </div>

            <p>Everyday essentials. Extraordinary style.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <p className="eyebrow">OUR PHILOSOPHY</p>
          <h2>Style that feels like you.</h2>
          <p>
            Thoughtful designs, beautiful details, and styles
            made to be part of your everyday story.
          </p>
        </section>

        <footer id="contact">
          <h2>NOOR STUDIO</h2>
          <p>Have a question? We would love to hear from you.</p>
          <a href="mailto:hello@example.com">Contact our team ↗</a>
          <small>© 2026 Noor Studio. Demo website.</small>
        </footer>
      </main>
    </>
  );
}

export default App;