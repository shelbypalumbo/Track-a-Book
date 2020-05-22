import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import BookList from "./components/BookList";
//Provider shares state through the components
import { Provider } from "react-redux";
import Store from "./Store";
import AddBookModal from "./components/AddBookModal";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <NavBar />
          <Container>
            <AddBookModal />
            <BookList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
