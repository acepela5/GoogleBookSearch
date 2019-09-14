import React from "react";
import "./style.css";
// import { Container, Row, Col } from "../Grid";

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
  <img alt={props.key} src={props.thumbnail}/>
  <p>{props.description}</p>
  <a href={props.href} target="_blank">More Details</a>
  </li>
}


