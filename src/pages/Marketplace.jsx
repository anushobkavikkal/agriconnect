import { useState } from "react";
import products from "../data/products";

function Marketplace() {
  const [search, setSearch] = useState("");

  const localProducts =
    JSON.parse(localStorage.getItem("products")) || [];

  const allProducts = [
    ...products,
    ...localProducts,
  ];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1>🌾 Marketplace</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <button
              className="buy-btn"
              onClick={() =>
                alert(`${product.name} added to cart`)
              }
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;