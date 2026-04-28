import './Navbar.css';

const navLinks = ['Home', 'About', 'Products', 'Contacts'];

export default function Navbar({ totalItems, onCartOpen }) {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <span className="navbar-logo">NATURAPURÉE</span>
      <div className="navbar-links">
        {navLinks.map(link => (
          <a key={link} href={`#${link}`} onClick={e => scrollTo(e, link)}>
            {link}
          </a>
        ))}
        <button className="navbar-cart" onClick={onCartOpen}>
          Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </div>
    </nav>
  );
}
