import React from "react";
import { Card, Button, NavLink } from "react-bootstrap";
import Rating from "./Rating";
import { LinkContainer } from "react-router-bootstrap";
const ProductScreen = ({ Product }) => {
  return (
    <>
      <Card>
        <LinkContainer to={`/product/${Product._id}`}>
          <NavLink>
            <Card.Img
              variant="top"
              height={"200px"}
              width={"150px"}
              src={Product.image}
            />
          </NavLink>
        </LinkContainer>
        <Card.Body>
          <LinkContainer to={`/product/${Product._id}`}>
            <NavLink>
              <Card.Title>{Product.name}</Card.Title>
              <Card.Text as="div">
                <Rating
                  value={Product.rating}
                  text={` from ${Product.numReviews}  reviews`}
                />
              </Card.Text>
              <Card.Text as="div">
                <div className="my-3">${Product.price}</div>
              </Card.Text>
            </NavLink>
          </LinkContainer>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
