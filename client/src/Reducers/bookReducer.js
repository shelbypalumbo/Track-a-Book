import {
  GET_BOOKS,
  ADD_BOOK,
  DELETE_BOOK,
  BOOKS_LOADING,
  GOOGLE_BOOK_SEARCH
} from "../Actions/types";

const initialState = {
  books: [],
  loading: false //When fetching data it can take a couple
  //seconds to get, once  the request is sent it will be set to true,
  //then once the data is retreived it is set back to false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case GOOGLE_BOOK_SEARCH:
      return {
        ...state,
        books: state.books.filter(book => book._title !== action.payload)
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book._id !== action.payload)
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books]
      };
    case BOOKS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
