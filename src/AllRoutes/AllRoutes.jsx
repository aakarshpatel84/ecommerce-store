import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Checkout from "../pages/Checkout/Checkout";
import Order from "../pages/Order/Order";
import ProdeuctDetailPage from "../pages/ProductDetailPage/ProdeuctDetailPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product/:productId" element={<ProdeuctDetailPage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
