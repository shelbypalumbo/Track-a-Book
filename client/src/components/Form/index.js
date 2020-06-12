import React from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import "./style.css";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <InputGroup>
      <InputGroupAddon className="sear" addonType="prepend">
        <h5>
          <i className="fas fa-quran"></i> &nbsp;Search: &nbsp;
        </h5>
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
        <button
          onClick={handleFormSubmit}
          className="searchBtn"
          // color="primary"
          // type="submit"
        >
          <i className="fas fa-search"></i>
        </button>
      </InputGroupAddon>
    </InputGroup>
  );
}

export default Form;
