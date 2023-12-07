import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Category from "./screens/Category";
import Detail from "./screens/Detail";
import Cart from "./screens/Cart";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:idCategory" element={<Category />} />
          <Route path="/detail/:idProduct" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>Not Found 404</div>} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
