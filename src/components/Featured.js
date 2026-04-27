import useReveal from '../useReveal';
import './Featured.css';

const items = [
  { name: 'Glow Serum',    price: 45, desc: 'Vitamin C enriched brightening serum for radiant skin' },
  { name: 'Hydra Cream',   price: 38, desc: 'Deep moisturizing cream with hyaluronic acid' },
  { name: 'Pure Cleanser', price: 28, desc: 'Gentle foaming cleanser for all skin types' },
  { name: 'Night Repair',  price: 52, desc: 'Intensive overnight renewal treatment' },
  { name: 'Eye Revival',   price: 42, desc: 'Anti-aging eye cream with peptides' },
  { name: 'Sun Shield',    price: 32, desc: 'SPF 50 broad spectrum protection' },
];

const reviews = [
  {
    text: "I've been using NaturaPuree for a few weeks now, and I'm absolutely hooked! My skin feels so hydrated and smooth, and I love that all the ingredients are natural and sustainably sourced.",
    author: 'Sarah M.',
  },
  {
    text: "I've tried countless skincare products, but nothing compares to the purity and effectiveness of NaturaPuree. My skin feels healthier, looks more radiant, and I trust the brand's commitment to organic ingredients.",
    author: 'Olivia T.',
  },
  {
    text: 'The NaturaPuree cleanser is a game-changer! It gently removes impurities without drying out my skin, and I love knowing that the ingredients are both organic and responsibly sourced.',
    author: 'James L.',
  },
];

export default function Featured({ onAddToCart }) {
  const ref = useReveal();

  return (
    <section id="Featured" className="featured">
      <div className="reveal" ref={ref}>
        <h2 className="section-title">Featured Products</h2>
        <div className="featured-grid">
          {items.map(item => (
            <div className="feat-card" key={item.name}>
              <div className="feat-img">{item.name}</div>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <span className="feat-price">${item.price.toFixed(2)}</span>
              <button onClick={() => onAddToCart(item.name, item.price)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '5rem' }}>Customer Reviews</h2>
        <div className="reviews-grid">
          {reviews.map(r => (
            <div className="review-card" key={r.author}>
              <p>"{r.text}"</p>
              <span>— {r.author}</span>
            </div>
          ))}
        </div>
        <p className="closing">
          Nourish your skin with the purity of nature, and let your natural beauty shine through.
        </p>
      </div>
    </section>
  );
}
