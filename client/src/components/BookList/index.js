import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
//connect allows you to get state from redux into a react component
import { connect } from "react-redux";
import { getBooks, deleteBook } from "../../Actions/bookActions";
import PropTypes from "prop-types";

class BookList extends Component {
  //Runs only when the component mounts to call an action
  componentDidMount() {
    this.props.getBooks();
  }

  onDeleteClick = id => {
    //Calls action deleteBook
    this.props.deleteBook(id);
  };

  render() {
    const { books } = this.props.book;
    console.log("BOOKS FROM BOOK LIST", books);
    return (
      <Container>
        <h3>Book List</h3>

        <ListGroup>
          {books.map(({ _id, title }) => (
            <div key={_id} className="bookList">
              <ListGroupItem>
                <Button
                  className="removeButton"
                  color="light"
                  onClick={this.onDeleteClick.bind(this, _id)}
                >
                  <i className="fas fa-minus-square"></i>
                </Button>
                &nbsp;{title}
              </ListGroupItem>
            </div>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

BookList.propTypes = {
  getBooks: PropTypes.func.isRequired,
  //book represents our state which is an object
  book: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  book: state.book
});

//connect takes in a function and any actions being used in this component
//maps the action into the component
export default connect(mapStateToProps, { getBooks, deleteBook })(BookList);
