import useReveal from '../useReveal';
import './Mission.css';

export default function Mission() {
  const ref = useReveal();

  return (
    <section className="mission">
      <div className="mission-box reveal" ref={ref}>
        <p>
          NaturaPuree products are crafted with organically grown ingredients and
          responsibly sourced materials, offering pure, effective skincare that
          nurtures your skin's natural glow.
        </p>
      </div>
    </section>
  );
}
