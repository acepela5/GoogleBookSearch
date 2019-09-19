import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }){
  return (
  <div className="list-overflow-container">
  <ul className="list-group">{children}</ul>
  </div>
  );
}

export function ListItem(props) {
  return <li className="list-group-item">{props.children}
  <h1>{props.title}</h1>
  <img alt={props.title} src={props.thumbnail}/>
  <p>{props.description}</p>
  <a href={props.href} rel="noopener noreferrer" target="_blank">More Details</a>
  </li>
}


