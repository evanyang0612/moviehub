import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import "./Favorite.css";

export default function Favorite() {
  const { favoriteItems, language } = useContext(Context);

  const favoriteItemElements = favoriteItems.map((movie) => (
    <FavoriteItem key={movie.id} movie={movie} />
  ));

  function favoriteTitleText() {
    if (language === "en-US") return "Favorite Movies";
    if (language === "ja") return "お気に入り";
    if (language === "zh-TW") return "收藏清單";
  }

  return (
    <main className="favorite-page">
      <h1 className="favorite-title title">{favoriteTitleText()}</h1>
      <div className="favorite-grid">{favoriteItemElements}</div>
    </main>
  );
}
