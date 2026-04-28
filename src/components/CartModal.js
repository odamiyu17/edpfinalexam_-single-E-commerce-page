import './CartModal.css';

export default function CartModal({
  cart,
  isOpen,
  onClose,
  onRemove,
  onCheckout,
  onIncrease,
  onDecrease
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className={`cart-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />

      <aside className={`cart-drawer${isOpen ? ' open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={onClose}>&times;</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty</p>
          ) : (
            cart.map((item, i) => (
              <div className="cart-row" key={i}>
                <div>
                  <p className="cart-name">{item.name}</p>

                  <div className="cart-sub">
                    <span>${item.price.toFixed(2)}</span>

                    <div className="cart-quantity">
                      <button onClick={() => onDecrease(i)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onIncrease(i)}>+</button>
                    </div>
                  </div>
                </div>

                <button className="cart-remove" onClick={() => onRemove(i)}>
                  &times;
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="cart-checkout" onClick={onCheckout}>
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}