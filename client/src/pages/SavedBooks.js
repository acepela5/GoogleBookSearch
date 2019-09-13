import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import Wrapper from "../components/Wrapper";

class SavedBooks extends Component {
  state = {
    //empty array to put the savedBooks data
    book: []
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
   this.getSavedBooks()
  };

  //get the id's of books that have been saved
  getSavedBooks = () =>{
    API.getSavedBooks(this.props.match.params.id)
    .then(res => this.setState({ books: res.data }))
    .catch(err => console.log(err));
  };

  //delete a book from the database using its id
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Wrapper>
      <Container fluid>
        {/* <Row> */}
          {/* <Col size="md-12"> */}
            {/* <Jumbotron> */}
              <h1>
                {/* receiving data from the database called book */}
                {/* {this.state.book.title} by {this.state.book.author} */}
              </h1>
            {/* </Jumbotron> */}
          {/* </Col> */}
        {/* </Row> */}
        <Row>
          {/* <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col> */}
         <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
              </Jumbotron>
              </Col>
              <Col size="md-6 sm-12">
            {this.state.book.length ? (
              <List>
                {/* map function in oreder to render all of the items in the database */}
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              // if there are no books to display show the message below
              <h3>No Results to Display</h3>
            )}
                        

          </Col>
        </Row>
        {/* link back to other page - may not need if link is in nav */}
        {/* <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row> */}
      </Container>
      </Wrapper>
    );
  }
}

export default SavedBooks;
