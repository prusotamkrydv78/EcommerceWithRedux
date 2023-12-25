import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
const ProductScreen = ({ Product }) => {
  return (
    <>
      <Card>
        <a href={Product._id}>
          <Card.Img
            variant="top"
            height={"200px"}
            width={"150px"}
            src={Product.image}
          />
          <Card.Body>
            <a href={Product._id}>
              <Card.Title>{Product.name}</Card.Title>
              <Card.Text as="div">
                <Rating
                  value={Product.rating}
                  text={`${Product.numReviews} from`}
                />
              </Card.Text>
              <Card.Text as="div">
                <div className="my-3">${Product.price}</div>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </a>
          </Card.Body>
        </a>
      </Card>
    </>
  );
};

export default ProductScreen;
