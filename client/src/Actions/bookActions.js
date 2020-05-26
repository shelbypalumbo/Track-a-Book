import {
  GET_BOOKS,
  ADD_BOOK,
  DELETE_BOOK,
  BOOKS_LOADING,
  GOOGLE_BOOK_SEARCH
} from "./types";
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
};

export const setBooksLoading = () => {
  return {
    type: BOOKS_LOADING
  };
};

//google books
export const getGoogleBook = title => dispatch => {
  return axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=" + ${title}`)
    .then(res =>
      dispatch({
        type: GOOGLE_BOOK_SEARCH,
        payload: title
      })
    );
};
