"use client";

import { useSelector } from "react-redux";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>

      {items.length === 0 && <p>No items added yet.</p>}

      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: 15 }}>
          {item.name} — Qty: {item.quantity}
        </div>
      ))}
    </div>
  );
}
