import useReveal from '../useReveal';
import img5 from '../assets/img5.png';
import './About.css';

export default function About() {
  const ref = useReveal();

  const scrollToProducts = (e) => {
    e.preventDefault();
    document.getElementById('Products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="About" className="about">
      <div className="about-inner reveal" ref={ref}>
        <div className="about-img">
          <img src={img5} alt="NaturaPuree" />
        </div>
        <div className="about-content">
          <h2>NATURAPURÉE</h2>
          <p>
            Welcome to NaturaPuree, where nature's finest ingredients meet pure skincare.
            Our mission is simple: to nourish your skin with the gentle power of botanicals,
            delivering a radiant glow that's as natural as you are. Each product is carefully
            crafted with love and integrity, using only the purest, sustainably sourced
            ingredients. No harsh chemicals, no unnecessary additives — just the goodness of
            nature, designed to keep your skin balanced, healthy, and glowing from the inside out.
          </p>
          <a href="#Products" className="about-btn" onClick={scrollToProducts}>
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}
