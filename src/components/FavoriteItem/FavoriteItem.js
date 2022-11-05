import React, { useContext } from "react";
import { Context } from "../../Context";
import useHover from "../../hooks/useHover";
import "./FavoriteItem.css";

export default function FavoriteItem({ movie }) {
  const [hovered, ref] = useHover();
  const { removeFromFavorite, addToCart, removeFromCart, cartItems } =
    useContext(Context);

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

  // const removeIconClassName = hovered
  //   ? "ri-delete-bin-fill bin"
  //   : "ri-delete-bin-line bin";

  return (
    <div className="favorite-item" ref={ref}>
      {hovered && (
        <i
          className="ri-delete-bin-line bin"
          onClick={() => removeFromFavorite(movie.id)}
        ></i>
      )}
      {cartIcon()}
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        // width="200px"
        className="favorite-item--image"
        alt={`${movie.title}+ poster`}
      />
      <h2 className="favorite-item--title">{movie.title}</h2>
      <p className="favorite-item--description">{movie.overview}</p>
    </div>
  );
}
