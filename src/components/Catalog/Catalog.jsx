import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import BookCard from "./BookCard";

// Styles
import "./Catalog.css";

// API uri
const API = `http://localhost:8000/api/catalog`;

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ books: data, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { books, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="text-center">
          <p className="display-4">Loading...</p>
        </div>
      );
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="mx-auto col-8 text-center">
            <h2>Catalog</h2>
            <Form>
              <FormGroup>
                <Input type="text" placeholder="Type your search here"></Input>
                <Button className="btn-danger my-2">Search</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3 className="text-center">
              Total Books in Catalog ({books.length})
            </h3>
            <div className="row d-flex align-items-stretch justify-content-center">
              <div className="col-lg-12 col-md-12 col-sm-12 py-2">
                <div className="card-columns">
                  {books.map((book, index) => (
                    <BookCard
                      className="text-nowrap"
                      image={"../" + book.imageLink}
                      title={book.title}
                      year={book.year}
                      author={book.author}
                      language={book.language}
                      pages={book.pages}
                      country={book.country}
                      link={book.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;
