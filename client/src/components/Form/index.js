import React from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import "./style.css";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <InputGroup>
      <InputGroupAddon className="sear" addonType="prepend">
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
