import React from "react";
import SearchMovies from "./components/SearchMovies";
import Header from "./components/Header";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <h1 className="title">React Movie Search</h1>
      <SearchMovies />
    </div>
  );
}
