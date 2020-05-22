import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING } from "./types";
import axios from "axios";

export const getBooks = () => dispatch => {
  dispatch(setBooksLoading());
  axios.get("/api/books").then(res =>
    dispatch({
      type: GET_BOOKS,
      payload: res.data //Data retreived from the back end db, returned in json
    })
  );
};

export const addBook = book => dispatch => {
  axios.post("/api/books", book).then(res =>
    dispatch({
      type: ADD_BOOK,
      payload: res.data
    })
  );
};

export const deleteBook = id => dispatch => {
  axios.delete(`/api/books/${id}`).then(res =>
    dispatch({
      type: DELETE_BOOK,
      payload: id
    })
  );
  // return {
  //   type: DELETE_BOOK,
  //   //payload sends the id that is passed in along with the dispatch
  //   payload: id
  // };
};

export const setBooksLoading = () => {
  return {
    type: BOOKS_LOADING
  };
};
