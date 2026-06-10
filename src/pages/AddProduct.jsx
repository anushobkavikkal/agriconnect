import { useState } from "react";
import { toast } from "react-toastify";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    existingProducts.push(product);

    localStorage.setItem(
      "products",
      JSON.stringify(existingProducts)
    );

    toast.success("Product added successfully!");

    setProduct({
      name: "",
      price: "",
      category: "",
      image: "",
    });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sell Your Product</h2>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;