import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <a id="navLink" href="/SavedBooks.js">
        Saved Books Here
      </a>
    </nav>
  );
}

export default Nav;
