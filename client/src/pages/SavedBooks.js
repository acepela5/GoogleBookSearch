import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import Wrapper from "../components/Wrapper";

class SavedBooks extends Component {
  state = {
    //empty array to put the savedBooks data
    books: []
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getSavedBooks()
    .then(res => {
      this.setState({ books: res.data })
    })
    .catch(err => console.log(err));
  };

  //get the id's of books that have been saved
  postSavedBooks = () =>{
    API.getSavedBooks(this.props.match.params.id)
    .then(res => this.setState({ books: res.data }))
    .catch(err => console.log(err));
    };

  //delete a book from the database using its id
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.postSavedBooks());
  };

  render() {
    console.log("indisde the render:",this.state.books)
    return (
      <Wrapper>
        <Container fluid>
          <Row>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Books On My List</h1>
              </Jumbotron>
            </Col>

            <Col size="md-6 sm-12">
              {this.state.books.length ? (
                <List>
                {/* map function in order to render all of the items in the database */}
                  {this.state.books.map(book => (
                    <ListItem 
                      key={book._id}
                      title={book.title}
                      href={book.href}
                      thumbnail={book.image}>

                      <DeleteBtn onClick={() => this.handleBookDelete(book._id)} />
                    </ListItem>
                ))}
                </List>
                  ) : (
                // if there are no books to display show the message below
                  <h3>No Results to Display</h3>
              )}

          </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default SavedBooks;
