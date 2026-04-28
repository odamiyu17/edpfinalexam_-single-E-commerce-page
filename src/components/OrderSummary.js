export default function OrderSummary({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section style={{ padding: "4rem", background: "#fff" }}>
      <h2 style={{ textAlign: "center" }}>Order Summary</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>No items selected.</p>
      ) : (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {cart.map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <hr />
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </section>
  );
}