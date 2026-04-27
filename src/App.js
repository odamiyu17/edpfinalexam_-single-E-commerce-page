import { useState } from "react";
import "./App.css";

function App() {
  // 1. Data: Our list of products
  const products = [
    { id: 1, name: "Wireless Headphones", price: 150, image: "https://via.placeholder.com/150?text=Headphones" },
    { id: 2, name: "Smart Watch", price: 200, image: "https://via.placeholder.com/150?text=Watch" },
    { id: 3, name: "Mechanical Keyboard", price: 120, image: "https://via.placeholder.com/150?text=Keyboard" },
    { id: 4, name: "Gaming Mouse", price: 80, image: "https://via.placeholder.com/150?text=Mouse" },
  ];

  // 2. States: Tracking the cart and the final order
  const [cart, setCart] = useState([]);
  
  // Function to add/remove products from selection
  const toggleSelectProduct = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      // Remove if already there
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      // Add if not there
      setCart([...cart, product]);
    }
  };

  // Function to handle the checkout (Submit)
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Please select a product.");
    } else {
      const productList = cart.map((item) => item.name).join(", ");
      const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
      alert(`Order Confirmed!\n\nItems: ${productList}\nTotal: $${totalPrice}`);
      setCart([]); // Clear cart after order
    }
  };

  return (
    <div className="store-container">
      <header className="store-header">
        <h1>TechGlow E-Shop</h1>
        <p>Select your favorite gadgets and checkout</p>
      </header>

      <div className="main-content">
        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`product-card ${cart.find(item => item.id === product.id) ? "selected" : ""}`}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => toggleSelectProduct(product)}>
                {cart.find(item => item.id === product.id) ? "Remove" : "Select Product"}
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary Sidebar */}
        <div className="order-summary">
          <h2>Your Order List</h2>
          <hr />
          {cart.length === 0 ? (
            <p>No items selected yet.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - <strong>${item.price}</strong>
                </li>
              ))}
            </ul>
          )}
          <div className="total-section">
            <h3>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h3>
            <button className="submit-btn" onClick={handleCheckout}>
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;