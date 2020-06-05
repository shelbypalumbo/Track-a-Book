import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        {" "}
        <h3>
          {" "}
          <i className="fas fa-quran"></i> Search: &nbsp;
        </h3>
      </InputGroupAddon>
      <Input
        className="form-control"
        id="Title"
        type="text"
        value={q}
        placeholder="Search a book title..."
        name="q"
        onChange={handleInputChange}
        required
      />
      <InputGroupAddon addonType="append">
        <Button onClick={handleFormSubmit} color="info" type="submit">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}

export default Form;
