import React from "react";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Moviehub</h2>
      </Link>
      <Link to="/cart">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}
