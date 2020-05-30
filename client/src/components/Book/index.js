import React from "react";
import { ListItem } from "../List";
import { Col, Row } from "reactstrap";
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <Row>
        <Col size="md-8">
          <h3 className="bookTitle">{title}</h3>
          {subtitle && <h5 className="subTitle">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              <i className="fas fa-shopping-bag"></i>
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="authors">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="imgThumbnail" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p className="description">{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
