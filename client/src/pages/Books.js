import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input} from "../components/Form";
import Button from "../components/Button";
import {List, ListItem} from "../components/List";
import Wrapper from "../components/Wrapper";
import SaveButton from "../components/SaveButton";

class Books extends Component {
  state = {
    //empty array that will show data pulled from api call
    books: [],
    //empty search query
    q: "",
  };

  componentDidMount() {
    this.getBooks();
  }

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
    .then(res =>{
     console.log("This is your books array:", this.state.books)

      this.setState({
        books: res.data
      })
      console.log("This is your books array:", this.state.books)
    }).catch((err) => console.log(err)
   
      );
  };

  //form submit is an event that only happens once
  //when the form is submitted, getBooks function is called to get data
  handleFormSubmit = event => {
    event.preventDefault();
  
    if(!this.state.q){
      alert("Please input a valid book title or author.")
    } else{
      console.log("book to search: ", this.state)

    this.getBooks();
    console.log("This is the q before API", this.state.q)
    this.setState({q: ""})
  }
  };

  //function to save books - will display on SavedBooks page
handleBookSave = id => {
  const book = this.state.books.find(book => book.id ===id)
//saves the books info into the database
console.log(book, "THIS IS handle BOOK*s*a*v*e")
API.saveBook({
  googleId: book.id,
  title: book.volumeInfo.title,
  href: book.volumeInfo.canonicalVolumeLink,
  authors: book.volumeInfo.authors,
  description: book.volumeInfo.description,
  image: book.volumeInfo.imageLinks.thumbnail
}).then(() => this.getSavedBooks());
}

  render() {
    return (
      <Wrapper>
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
               name="q"
               value={this.state.q}
               onChange={this.handleInputChange}
               placeholder="Search for book"

              />
             
            
              <Button onClick={this.handleFormSubmit}
               
              type="success"
              className="input-lg">Second Search BTN
              </Button>
            </form>
          </Col>
          <Col size="md-6 sm-12">
           
            {!this.state.books.length ? (
              <h1 className="text-center"> No Books Showing</h1>
            ) : (
              <List>
                  {this.state.books.map(book => {
                    return (
                      <ListItem
                    
                        key={book.id}
                        title={book.volumeInfo.title}
                        href={book.volumeInfo.canonicalVolumeLink}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}>
                     
                     <SaveButton onClick={() => this.handleBookSave(book.id) + console.log(book.id,"BOOK ID %%%%%%%%%")} />  

                        </ListItem>
                     

                      );

                  })}

                </List>
              )}

          </Col>
        </Row>
      </Container>
      </Wrapper>
    );
  }
}

export default Books;
