import React, { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [data, setData] = useState([]);

  async function fetchdata() {
    try {
      const result = await fetch("https://fakestoreapi.com/products");
      const myresult = await result.json();
      setData(myresult);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1 className="logo">ShopEase 🛒</h1>
        <input
          type="text"
          className="search-box"
          placeholder="Search for products..."
        />
      </header>

      {/* Product Grid */}
      <div className="product-grid">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-details">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-category">{item.category}</p>
              <p className="product-price">₹ {(item.price * 83).toFixed(2)}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 ShopEase — Your favorite online store ❤</p>
      </footer>
    </div>
  );
}

export default Products;


