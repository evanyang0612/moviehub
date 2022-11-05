import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

export default function Cart() {
  const [buttonText, setButtonText] = useState("Place order");
  const { cartItems, emptyCart, language } = useContext(Context);
  const totalCost = 3.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((movie) => (
    <CartItem key={movie.id} movie={movie} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  function checkoutText() {
    if (language === "en-US") return "Rental Check Out";
    if (language === "ja") return "お会計";
    if (language === "zh-TW") return "租借購物車";
  }

  function totalText() {
    if (language === "en-US") return "Total";
    if (language === "ja") return "合計";
    if (language === "zh-TW") return "金額";
  }

  return (
    <main className="cart-page">
      <h1 className="title">{checkoutText()}</h1>
      <div className="cart-grid">{cartItemElements}</div>
      <p className="total-cost">
        {totalText()}: {totalCostDisplay}
      </p>
      <div className="order-button">
        <button className="cart-button" onClick={placeOrder}>
          {buttonText}
        </button>
      </div>
    </main>
  );
}
