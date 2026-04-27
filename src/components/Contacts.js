import useReveal from '../useReveal';
import img14 from '../assets/img14.png';
import './Contacts.css';

export default function Contacts() {
  const ref = useReveal();

  return (
    <section id="Contacts" className="contacts">
      <div className="contacts-inner reveal" ref={ref}>
        <div className="contacts-img">
          <img src={img14} alt="Contact" />
        </div>
        <div className="contacts-content">
          <h2>Contact Us</h2>
          <div className="contact-list">
            <div>
              <h3>Mailing Address</h3>
              <p>123 Anywhere St.<br />Any City, ST 12345</p>
            </div>
            <div>
              <h3>Email Address</h3>
              <p>hello@reallygreatsite.com</p>
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
