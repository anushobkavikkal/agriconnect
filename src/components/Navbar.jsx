import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged Out Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">🌾 AgriConnect</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/add-product">Sell Product</Link>
        <Link to="/experts">Experts</Link>
        <Link to="/veterinary">Veterinary</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className="nav-buttons">
        {!user ? (
          <>
            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>
          </>
        ) : (
          <>
            <span
              style={{
                color: "white",
                marginRight: "15px",
                fontWeight: "bold",
              }}
            >
              👋 {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;