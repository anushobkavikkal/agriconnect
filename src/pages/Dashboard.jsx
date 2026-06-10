function Dashboard() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const products =
    JSON.parse(localStorage.getItem("products")) || [];

  return (
    <div className="page-container">
      <h1>📊 User Dashboard</h1>

      <div className="product-card">
        <h2>Welcome, {user.name || "User"}</h2>
        <p>Role: {user.role || "Guest"}</p>
        <p>Total Products Added: {products.length}</p>
      </div>

      <br />

      <h2>Your Products</h2>

      <div className="card-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;