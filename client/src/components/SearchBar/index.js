import React from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./style.css";

function SearchBar() {
  return (
    <Form className="searchBar">
      {/* <FormGroup> */}
      <Label for="bookTitle">Search:</Label>{" "}
      <Input
        type="title"
        name="title"
        id="title"
        placeholder="Enter a book title..."
      />
      <Button color="danger" className="bookSearchButton">
        Search
      </Button>
      {/* </FormGroup> */}
    </Form>
  );
}
export default SearchBar;
