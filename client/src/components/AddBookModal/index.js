import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addBook } from "../../Actions/bookActions";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class AddBookModal extends Component {
  state = {
    //false = modal is closed
    modal: false,
    title: ""
  };

  //set modals state to opposite state
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newBook = {
      title: this.state.title
    };
    this.props.addBook(newBook);

    //Close modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button className="addBookButton" onClick={this.toggle}>
          Add Book
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Saved Books</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="book">Book</Label>
                <Input
                  type="text"
                  name="title"
                  id="book"
                  placeholder="Add book"
                  onChange={this.onChange}
                />
                <Button className="addBookModalButton" color="dark">
                  Save Book
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book
});
export default connect(mapStateToProps, { addBook })(AddBookModal);
