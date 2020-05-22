//The Store holds the state tree of the application
//The state is changed only by Actions
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const initialSate = {};

const middleware = [thunk];

const Store = createStore(
  rootReducer,
  initialSate,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;
