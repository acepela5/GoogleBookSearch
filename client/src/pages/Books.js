import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";
import Button from "../components/Button";
import {List, ListItem} from "../components/List";

class Books extends Component {
  state = {
    //empty array that will show data pulled from api call
    books: [],
    //empty search query
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

  //user input changes the value to the searched term
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //use q(query) with user input and GET data from API
  getBooks = () =>{
    API.getBooks(this.state.q)
    .then(res =>
      this.setState({
        books: res.data
      })).catch(() =>
      this.setState({
        //add API data to the empty array
        books: []

      })
      );
  };

  //form submit is an event that only happens once
  //when the form is submitted, getBooks function is called to get data
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
    // API.getBooks(this.state.title)
    //   .then(res => this.setState({ books: res.data }))
    //   .catch(err => this.setState({books:[]}));
this.getBooks()
  };

  //function to save books - will display on SavedBooks page
handleBookSave = id => {
  const book = this.state.books.find(book => book.id ===id)
//saves the books info into the database
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

               //add onChange function
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
                handleInputChange
                value
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
                    //button will render dynamically for every result allowing user to save each book individually
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
