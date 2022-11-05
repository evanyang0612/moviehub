import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchMovies from "./components//SearchMovie/SearchMovies";
import Header from "./components/Header/Header";
import Favorite from "./pages/Favoirte/Favorite";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<SearchMovies />} />

        <Route path="/favorite" element={<Favorite />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}
