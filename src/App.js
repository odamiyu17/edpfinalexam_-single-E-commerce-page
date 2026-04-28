import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Mission from './components/Mission';
import Featured from './components/Featured';
import Contacts from './components/Contacts';
import CartModal from './components/CartModal';
import Toast from './components/Toast';
import OrderSummary from './components/OrderSummary';
import './App.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState('');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = useCallback((name, price) => {
    setCart(prev => {
      const found = prev.find(item => item.name === name);

      if (found) {
        return prev.map(item =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { name, price, quantity: 1 }];
    });

    setToast(`${name} added to cart!`);
  }, []);

  const removeFromCart = useCallback((index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  }, []);

  const increaseQty = useCallback((index) => {
    setCart(prev =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }, []);

  const decreaseQty = useCallback((index) => {
    setCart(prev =>
      prev
        .map((item, i) =>
          i === index
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }, []);

  const checkout = useCallback(() => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const lines = cart
      .map(
        item =>
          `• ${item.name} ×${item.quantity} — $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join('\n');

    alert(
      `Thank you for your order!\n\n${lines}\n\nTotal: $${total.toFixed(
        2
      )}\n\nYour order will be processed shortly.`
    );

    setCart([]);
    setCartOpen(false);
  }, [cart]);

  return (
    <div className="app">
      <Navbar totalItems={totalItems} onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <About />
      <Products />
      <Mission />
      <Featured onAddToCart={addToCart} />
      <OrderSummary cart={cart} />
      <Contacts />

      <CartModal
        cart={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onCheckout={checkout}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
      />

      {toast && <Toast message={toast} onDone={() => setToast('')} />}
    </div>
  );
}