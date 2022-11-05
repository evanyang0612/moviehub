import React, { useContext } from "react";
import { Context } from "../../Context";
import "./CartItem.css";
import useHover from "../../hooks/useHover";

export default function CartItem({ movie }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = useHover();
  console.log(movie);
  return (
    <div className="cart-item" ref={ref}>
      {hovered && (
        <i
          className="ri-delete-bin-line bin"
          onClick={() => removeFromCart(movie.id)}
        ></i>
      )}
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        className="cart-item--image"
        alt={`${movie.title}+ poster`}
      />
      <h3 className="cart-item--title">{movie.title}</h3>
      <p className="cart-item--price">$3.99</p>
    </div>
  );
}
