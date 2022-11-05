import React, { useContext } from "react";
import useHover from "../../hooks/useHover";
import { Context } from "../../Context";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  const [hovered, ref] = useHover();
  const {
    addToCart,
    removeFromCart,
    cartItems,
    addToFavorite,
    removeFromFavorite,
    favoriteItems,
    language,
  } = useContext(Context);

  function heartIcon() {
    const alreadyFavorited = favoriteItems.some((item) => item.id === movie.id);
    if (alreadyFavorited) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => removeFromFavorite(movie.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => addToFavorite(movie)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === movie.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(movie.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-shopping-cart-line cart"
          onClick={() => addToCart(movie)}
        ></i>
      );
    }
  }

  function releaseDateText() {
    if (language === "en-US") return "RELEASE DATE";
    if (language === "ja") return "公開日";
    if (language === "zh-TW") return "上映時間";
  }
  function ratingText() {
    if (language === "en-US") return "RATING";
    if (language === "ja") return "評判";
    if (language === "zh-TW") return "評分";
  }

  return (
    <div className="card" ref={ref}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      {heartIcon()}
      {cartIcon()}
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p className="card--release">
          <small>
            {releaseDateText()}: {movie.release_date}
          </small>
        </p>
        <p className="card--rating">
          <small>
            {ratingText()}: {movie.vote_average}
          </small>
        </p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
}
