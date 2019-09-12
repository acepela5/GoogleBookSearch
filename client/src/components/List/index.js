import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";

// This file exports both the List and ListItem components

// export function List({ children }) {
//   return (
//     <div className="list-overflow-container">
//       <ul className="list-group">{children}</ul>
//     </div>
//   );
// }



export function List({ children }){
  return <ul className="list-group">{children}</ul>;
}
//lists items of information from api call?
export function ListItem({
  title,
  author,
  synopsis,
  date
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="sm-2">

          </Col>
          <Col size="sm-9">
            <h3>{title}</h3>
            <strong>{author}</strong>
            <p>{synopsis}</p>
            <strong>{date}</strong>
          </Col>
        </Row>
      </Container>
    </li>
  )
}

