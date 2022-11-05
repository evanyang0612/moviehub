import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import "./Header.css";

export default function Header() {
  const { cartItems, language, setLanguage } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  function favoriteText() {
    if (language === "en-US") return "Favorite";
    if (language === "ja") return "コレクション";
    if (language === "zh-TW") return "我的最愛";
  }

  return (
    <header>
      <Link to="/">
        <h2 className="logo">MovieHub</h2>
      </Link>
      <div className="header-right">
        <Link to="/favorite">
          <h3>{favoriteText()}</h3>
        </Link>
        <Link to="/cart">
          {/* <h3>Cart</h3> */}
          <i className={`${cartClassName} ri-fw ri-2x`}></i>
        </Link>
        <select
          name="language"
          id="language"
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en-US">English</option>
          <option value="ja">日本語</option>
          <option value="zh-TW">繁體中文</option>
        </select>
      </div>
    </header>
  );
}
