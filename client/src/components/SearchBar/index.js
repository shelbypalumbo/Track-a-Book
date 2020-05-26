import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./style.css";
// import API from "../../utils/API";

function SearchBar() {
  const state = {
    title: ""
  };
  return (
    <Form className="searchBar">
      <FormGroup>
        <Label for="bookTitle">Search:</Label>{" "}
        <Input
          type="title"
          name="title"
          id="title"
          // value={title}
          // onChange={handleInputChange}
          placeholder="Enter a book title..."
        />
        <Button
          color="danger"
          className="bookSearchButton"
          // onClick={handleFormSubmit}
        >
          Search
        </Button>
      </FormGroup>
    </Form>
  );
}

export default SearchBar;
