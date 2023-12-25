import React from "react";
import Products from "../products";
import {
  Col,
  Row,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";
const ProductDetails = ({ match }) => {
  const product = Products[1];
  console.log(match);
  return (
    <>
      <div className="container my-2" >
        <Link to="/" className="btn btn-light ">Go back</Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>Price: ${product.price}</ListGroupItem>
              <ListGroupItem>{product.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={2}>
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className="btn" type="button">
                Add to cart
              </Button>
            </ListGroupItem>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
