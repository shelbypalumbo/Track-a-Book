import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Search a book title..."
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-success float-right"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default Form;
