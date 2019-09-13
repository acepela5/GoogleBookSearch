import React from "react";
import "./style.css"

//nav bar to be seen on every page
//links to Books.js and SavedBooks.js

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <a id="navLink" href="/SavedBooks">
        Saved Books Here
      </a>
    </nav>
  );
}

export default Nav;
