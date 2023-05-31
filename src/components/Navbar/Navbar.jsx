import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/checkout">
          Checkout
        </Link>
        <Link className="link" to="/about">
          About Us
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
