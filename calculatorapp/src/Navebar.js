import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarStyle = {
    backgroundColor: "#007bff",
    padding: "15px 20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "auto",
  };

  const logoStyle = {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const menuStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s",
  };

  const menuIconStyle = {
    display: "none",
    cursor: "pointer",
    color: "white",
  };

  const mobileMenuStyle = {
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    backgroundColor: "#0056b3",
    padding: "10px",
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <div>
          <Link to="/" style={logoStyle}>MyBrand</Link>
        </div>

        {/* Desktop Menu */}
        <div style={{ ...menuStyle, ...(window.innerWidth <= 768 ? { display: "none" } : {}) }}>
          <Link to="/" style={linkStyle}>Home</Link>
        </div>

        {/* Mobile Menu Button */}
        <div
          style={{ ...menuIconStyle, ...(window.innerWidth <= 768 ? { display: "block" } : {}) }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        <Link to="/" style={{ ...linkStyle, padding: "10px 0", textAlign: "center" }} onClick={() => setIsOpen(false)}>
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
