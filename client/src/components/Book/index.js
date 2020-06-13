import React from "react";
import { ListItem } from "../List";
import { Col, Row } from "reactstrap";
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem className="book-list-item">
      <Row>
        <Col classname="title">
          <h3 className="bookTitle">{title}</h3>
          {subtitle && <h5 className="subTitle">{subtitle}</h5>}
        </Col>
      </Row>

      <Row>
        <Col className="btn-container">
          <a
            className="btn btn-success"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
          >
            <i className="fas fa-shopping-bag"></i>
          </a>
          <Button />
        </Col>
      </Row>

      <Row>
        <div className="imgThumbnailCol">
          <img className="imgThumbnail" src={image} alt={title} />
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </Row>
      <hr />
    </ListItem>
  );
}

export default Book;
