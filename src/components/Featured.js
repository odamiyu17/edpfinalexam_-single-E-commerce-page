import { useState } from 'react';
import useReveal from '../useReveal';
import './Featured.css';

import serum from '../assets/serum.jpg';
import cream from '../assets/cream.jpg';
import cleanser from '../assets/cleanser.jpg';
import night from '../assets/night.jpg';
import eye from '../assets/eye.jpg';
import sun from '../assets/sunscreen.jpg';

const items = [
  { name: 'Glow Serum', price: 45, desc: 'Vitamin C enriched brightening serum for radiant skin', img: serum },
  { name: 'Hydra Cream', price: 38, desc: 'Deep moisturizing cream with hyaluronic acid', img: cream },
  { name: 'Pure Cleanser', price: 28, desc: 'Gentle foaming cleanser for all skin types', img: cleanser },
  { name: 'Night Repair', price: 52, desc: 'Intensive overnight renewal treatment', img: night },
  { name: 'Eye Revival', price: 42, desc: 'Anti-aging eye cream with peptides', img: eye },
  { name: 'Sun Shield', price: 32, desc: 'SPF 50 broad spectrum protection', img: sun },
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
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="Featured" className="featured">
      <div className="reveal" ref={ref}>
        <h2 className="section-title">Featured Products</h2>

        <div className="featured-grid">
          {items.map((item, i) => (
            <div
              className={`feat-card ${activeIndex === i ? 'added' : ''}`}
              key={item.name}
            >
              <img src={item.img} alt={item.name} className="feat-img" />

              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <span className="feat-price">${item.price.toFixed(2)}</span>
<button
  onClick={(e) => {
    onAddToCart(item.name, item.price);

    const productImg = e.currentTarget
      .closest('.feat-card')
      .querySelector('.feat-img');

    const flyingImg = productImg.cloneNode(true);
    flyingImg.classList.add('flying-img');

    const rect = productImg.getBoundingClientRect();

    flyingImg.style.left = rect.left + 'px';
    flyingImg.style.top = rect.top + 'px';
    flyingImg.style.width = rect.width + 'px';
    flyingImg.style.height = rect.height + 'px';

    document.body.appendChild(flyingImg);

    setTimeout(() => {
      flyingImg.classList.add('fly-to-cart');
    }, 10);

    setTimeout(() => {
      flyingImg.remove();
    }, 800);

    setActiveIndex(i);

    setTimeout(() => {
      setActiveIndex(null);
    }, 300);
  }}
>
  Add to Cart
</button>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '5rem' }}>
          Customer Reviews
        </h2>

        <div className="reviews-grid">
          {reviews.map(review => (
            <div className="review-card" key={review.author}>
              <p>"{review.text}"</p>
              <span>— {review.author}</span>
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