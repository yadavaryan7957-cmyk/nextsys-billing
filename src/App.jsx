import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState(1);

  const addItem = () => {
    if (!product || !price) return;
    const total = price * qty;
    setItems([...items, { product, price, qty, total }]);
    setProduct("");
    setPrice("");
    setQty(1);
  };

  const getTotal = () => {
    return items.reduce((sum, item) => sum + item.total, 0);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1>NextSys Billing</h1>

      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <input placeholder="Product" value={product} onChange={(e) => setProduct(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        <input type="number" placeholder="Qty" value={qty} onChange={(e) => setQty(Number(e.target.value))} />
        <button onClick={addItem}>Add</button>
      </div>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{item.product}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Total: ₹{getTotal()}</h2>
    </div>
  );
}
