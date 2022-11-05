import React, { useContext } from "react";
import MovieCard from "../MovieCard/MovieCard.js";
import { Context } from "../../Context";
import "./SearchMovie.css";
export default function SearchMovies() {
  //states- input query, movies

  //create the state for movies, and update that state appropriate
  const { movies, query, setQuery, searchMovies, language } =
    useContext(Context);

  function movieNameText() {
    if (language === "en-US") return "Movie Name";
    if (language === "ja") return "映画名";
    if (language === "zh-TW") return "電影名稱";
  }
  function titleText() {
    if (language === "en-US") return "Movie Search";
    if (language === "ja") return "映画検索";
    if (language === "zh-TW") return "搜尋電影";
  }

  function placeholderText() {
    if (language === "en-US") return "Search movies...";
    if (language === "ja") return "キーワードを入力して検索";
    if (language === "zh-TW") return "侏儸紀公園...";
  }

  function searchText() {
    if (language === "en-US") return "Search";
    if (language === "ja") return "検索";
    if (language === "zh-TW") return "搜尋";
  }

  return (
    <>
      <h1 className="title">{titleText()}</h1>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          {movieNameText()}
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder={placeholderText()}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="button" type="submit">
          {searchText()}
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
