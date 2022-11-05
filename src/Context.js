import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [movies, setMovies] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=${language}&query=${query}&page=1&include_adult=false`;

    if (!query) return;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
    setQuery("");
  };

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  function addToFavorite(newItem) {
    setFavoriteItems((prevItems) => [...prevItems, newItem]);
  }

  function removeFromFavorite(id) {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <Context.Provider
      value={{
        movies,
        query,
        searchMovies,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
        addToFavorite,
        removeFromFavorite,
        favoriteItems,
        setQuery,
        language,
        setLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
