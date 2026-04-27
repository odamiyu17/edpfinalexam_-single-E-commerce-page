import homeBg from '../assets/home.png';
import './Hero.css';

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="Home" className="hero" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="hero-text">
        <h1>NATURAPURÉE</h1>
        <p>One-Stop Health &amp; Beauty Shop</p>
      </div>
      <button className="hero-arrow" onClick={scrollDown} aria-label="Scroll down">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="7 13 12 18 17 13" />
          <polyline points="7 6 12 11 17 6" />
        </svg>
      </button>
    </section>
  );
}
