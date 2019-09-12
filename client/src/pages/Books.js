import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";
import Button from "../components/Button";
import {List, ListItem} from "../components/List";

class Books extends Component {
  state = {
    books: [],
    q: "",
    // title: "",
    // author: "",
    // synopsis: "",
    // bookSearch: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () =>{
    API.getBooks(this.state.q)
    .then(res =>
      this.setState({
        books: res.data
      })).catch(() =>
      this.setState({
        books: []

      })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
console.log("book to search: ", this.state)
    API.getBooks(this.state.title)
      .then(res => this.setState({ books: res.data }))
      .catch(err => this.setState({books:[]}));
// this.getBooks()
  };

handleBookSave = id => {
  const book = this.state.books.find(book => book.id ===id)


API.saveBook({
  googleId: book.id,
  title: book.volumeInfo.title,
  link: book.volumeInfo.infoLink,
  authors: book.volumeInfo.authors,
  description: book.volumeInfo.description,
  image: book.volumeInfo.imageLinks.thumbnail
}).then(() => this.getBooks());
}

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
               handleInputChange={this.handleInputChange}
               handleFormSubmit={this.handleFormSubmit}
               q={this.state.q}
              />
              {/* <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              {/* <FormBtn
                enabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn> */}
              <Button onClick={this.handleFormSubmit}
              type="success"
              className="input-lg">Second Search BTN
              </Button>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem 
                  key={book.id}
                  title={book.infoLink.title}
                  Button={() => (
                    <button 
                    onClick={() => this.handleBookSave(book.id)}
                    />
                  )}
                  >
                   
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
