import useReveal from '../useReveal';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import './Products.css';

const categories = [
  { img: img6,  label: 'MAKEUP' },
  { img: img7,  label: 'SKINCARE' },
  { img: img8,  label: 'WELLNESS PRODUCTS' },
  { img: img9,  label: 'PERSONAL CARE' },
  { img: img10, label: 'NUTRITION' },
  { img: img11, label: 'FRAGRANCE' },
];

export default function Products() {
  const ref = useReveal();

  return (
    <section id="Products" className="products">
      <div className="reveal" ref={ref}>
        <div className="products-header">
          <h2>PRODUCT CATEGORIES</h2>
          <p>To make things easier, we've gathered your favorites here.</p>
        </div>
        <div className="products-grid">
          {categories.map(cat => (
            <div className="product-card" key={cat.label}>
              <img src={cat.img} alt={cat.label} />
              <span>{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
