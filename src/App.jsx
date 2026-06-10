import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddProduct from "./pages/AddProduct";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Experts from "./pages/Experts";
import Veterinary from "./pages/Veterinary";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/veterinary" element={<Veterinary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;